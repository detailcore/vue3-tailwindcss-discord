<template>
  <div class="px-2 h-12 flex items-center shadow-sm">
    <div class="flex items-center">
      <Hashtag class="mr-2 w-6 h-6 font-semibold text-gray-400" />
      <span class="mr-2 text-white font-title whitespace-nowrap">{{ getChannel.label }}</span>
    </div>

    <div class="hidden md:block w-px h-6 mx-2 bg-white/[.06]"></div>
    <div class="hidden md:block text-sm font-medium mx-2 text-gray-200 truncate">{{ getChannel.description }}</div>

    <!-- Mobile buttons -->
    <div class="flex items-center ml-auto md:hidden">
      <button class="text-gray-200 hover:text-gray-100">
        <HashtagWithSpeechBubble class="w-6 h-6 mx-2" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <People class="w-6 h-6 mx-2" />
      </button>
    </div>

    <!-- Desktop buttons -->
    <div class="items-center ml-auto hidden md:flex">
      <button class="text-gray-200 hover:text-gray-100">
        <HashtagWithSpeechBubble class="w-6 h-6 mx-2" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <Bell class="w-6 h-6 mx-2" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <Pin class="w-6 h-6 mx-2" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <People class="w-6 h-6 mx-2" />
      </button>
      <div class="mx-2 relative">
        <input
          type="text" 
          placeholder="Search" 
          class="bg-gray-900 placeholder-gray-400 border-none h-6 w-36 px-1.5 rounded text-sm font-medium"
        >
        <div class="absolute right-0 inset-y-0 flex items-center">
          <Spyglass class="w-4 h-4 mr-1.5 text-gray-400" />
        </div>
      </div>
      <button class="text-gray-200 hover:text-gray-100">
        <Inbox class="w-6 h-6 mx-2" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <QuestionCircle class="w-6 h-6 mx-2" />
      </button>
    </div>
  </div>

  <div class="flex-1 overflow-y-scroll">
    <div v-for="(item, index) in getChannel.messages">
      <MessageWithUser :message="item" v-if="(index == 0 || item.user != getChannel.messages[index - 1].user)" />
      <Message :message="item" v-else />
    </div>
  </div>
</template>


<script setup lang="ts">
import Pin from '@/components/icons/Pin.vue'
import Bell from '@/components/icons/Bell.vue'
import Inbox from '@/components/icons/Inbox.vue'
import People from '@/components/icons/People.vue'
import Hashtag from '@/components/icons/Hashtag.vue'
import Spyglass from '@/components/icons/Spyglass.vue'
import QuestionCircle from '@/components/icons/QuestionCircle.vue'
import HashtagWithSpeechBubble from '@/components/icons/HashtagWithSpeechBubble.vue'

import Message from '@/components/Message.vue'
import MessageWithUser from '@/components/MessageWithUser.vue'

import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores'
import { computed } from 'vue'
import { IChannel } from '@/stores/index.interfaces'

const route = useRoute()
const { getServerCategories } = storeToRefs(useMainStore())

const getChannel = computed<IChannel>(() => {
  return getServerCategories.value
    .map(c => c.channels)
    .flat()
    .find(ch => ch.id == +route.params.cid) as IChannel
})

</script>

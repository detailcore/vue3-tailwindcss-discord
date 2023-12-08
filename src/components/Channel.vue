<template>
  <div class="flex h-12 items-center px-2 shadow-sm">
    <div class="flex items-center">
      <Hashtag class="mr-2 h-6 w-6 font-semibold text-gray-400" />
      <span class="mr-2 whitespace-nowrap font-title text-white">{{ getChannel.label }}</span>
    </div>

    <div class="mx-2 hidden h-6 w-px bg-white/[.06] md:block"></div>
    <div class="mx-2 hidden truncate text-sm font-medium text-gray-200 md:block">
      {{ getChannel.description }}
    </div>

    <!-- Mobile buttons -->
    <div class="ml-auto flex items-center md:hidden">
      <button class="text-gray-200 hover:text-gray-100">
        <HashtagWithSpeechBubble class="mx-2 h-6 w-6" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <People class="mx-2 h-6 w-6" />
      </button>
    </div>

    <!-- Desktop buttons -->
    <div class="ml-auto hidden items-center md:flex">
      <button class="text-gray-200 hover:text-gray-100">
        <HashtagWithSpeechBubble class="mx-2 h-6 w-6" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <Bell class="mx-2 h-6 w-6" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <Pin class="mx-2 h-6 w-6" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <People class="mx-2 h-6 w-6" />
      </button>
      <div class="relative mx-2">
        <input
          type="text"
          placeholder="Search"
          class="h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium placeholder-gray-400"
        />
        <div class="absolute inset-y-0 right-0 flex items-center">
          <Spyglass class="mr-1.5 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <button class="text-gray-200 hover:text-gray-100">
        <Inbox class="mx-2 h-6 w-6" />
      </button>
      <button class="text-gray-200 hover:text-gray-100">
        <QuestionCircle class="mx-2 h-6 w-6" />
      </button>
    </div>
  </div>

  <div class="flex-1 overflow-y-scroll">
    <div v-for="(item, index) in getChannel.messages">
      <MessageWithUser
        :message="item"
        v-if="index == 0 || item.user != getChannel.messages[index - 1].user"
      />
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
    .map((c) => c.channels)
    .flat()
    .find((ch) => ch.id == +route.params.cid) as IChannel
})
</script>

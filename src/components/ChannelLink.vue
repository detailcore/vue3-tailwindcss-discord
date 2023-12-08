<template>
  <router-link
    @click="channel.unread = false"
    :to="{ name: 'channels', params: { cid: channel.id } }"
    active-class="text-white bg-gray-550/[0.32]"
    :class="[
      readClass,
      'group relative mx-2 flex items-center rounded px-2 py-1 active:bg-gray-550/[0.24]',
    ]"
  >
    <div v-if="channel.unread" class="absolute left-0 -ml-2 h-2 w-1 rounded-r-full bg-white"></div>
    <Hashtag v-if="!channel.icon" class="mr-1.5 h-5 w-5 text-gray-400" />
    <span v-else>
      <Book v-show="channel.id == 1" class="mr-1.5 h-5 w-5 text-gray-400" />
      <Speakerphone v-show="channel.id == 2" class="mr-1.5 h-5 w-5 text-gray-400" />
    </span>
    {{ channel.label }}
    <AddPerson
      class="ml-auto h-4 w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100"
    />
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Book from '@/components/icons/Book.vue'
import Hashtag from '@/components/icons/Hashtag.vue'
import AddPerson from '@/components/icons/AddPerson.vue'
import Speakerphone from '@/components/icons/Speakerphone.vue'

import { IChannel } from '@/stores/index.interfaces'

const { channel } = defineProps<{
  channel: IChannel
  // category: ICategory
}>()

const readClass = computed(() => {
  return channel.unread
    ? 'text-white hover:bg-gray-550/[0.16]'
    : 'text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16]'
})
</script>

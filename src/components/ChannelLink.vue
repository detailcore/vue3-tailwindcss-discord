<template>
  <router-link
    @click="channel.unread = false"
    :to="{ name: 'channels', params: { cid: channel.id } }"
    active-class="text-white bg-gray-550/[0.32]"
    :class="[
      readClass,
      'flex items-center px-2 mx-2 py-1 rounded group relative active:bg-gray-550/[0.24]'
    ]">
    <div v-if="channel.unread" class="absolute w-1 h-2 bg-white left-0 -ml-2 rounded-r-full"></div>
    <Hashtag v-if="!channel.icon" class="w-5 h-5 mr-1.5 text-gray-400" />
    <span v-else>
      <Book v-show="channel.id == 1" class="w-5 h-5 mr-1.5 text-gray-400" />
      <Speakerphone v-show="channel.id == 2" class="w-5 h-5 mr-1.5 text-gray-400" />
    </span>
    {{ channel.label }}
    <AddPerson class="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
  </router-link>
</template>


<script setup lang="ts">
import { computed } from 'vue';
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

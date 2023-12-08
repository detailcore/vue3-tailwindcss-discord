<template>
  <div class="hidden w-60 flex-col bg-gray-800 md:flex">
    <button
      class="flex h-12 items-center px-4 font-title text-[15px] font-semibold text-white shadow-sm transition hover:bg-gray-550/[0.16]"
    >
      <div class="relative mr-1 h-4 w-4">
        <Verified class="absolute h-4 w-4 text-gray-550" />
        <Check class="absolute h-4 w-4" />
      </div>
      {{ getServerName }}
      <Chevron class="ml-auto h-[18px] w-[18px] opacity-80" />
    </button>

    <div class="flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300">
      <div v-for="(category, index) in getServerCategories" :key="index">
        <button
          v-if="category.label"
          class="text-sx flex w-full items-center px-0.5 font-title uppercase tracking-wide transition duration-200 hover:text-gray-100"
          @click="toggleCategory(category.id)"
        >
          <Arrow :class="[category.isShow ? '' : '-rotate-90', 'mr-0.5 h-3 w-3']" />
          {{ category.label }}
        </button>

        <div v-for="channel in category.channels" :key="channel.id" class="mt-[5px] space-y-0.5">
          <ChannelLink
            v-if="category.isShow || (channel.unread != undefined && channel.unread != false)"
            :channel="channel"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="flex min-w-0 flex-1 flex-shrink flex-col bg-gray-700">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Arrow from '@/components/icons/Arrow.vue'
import Check from '@/components/icons/Check.vue'
import Chevron from '@/components/icons/Chevron.vue'
import Verified from '@/components/icons/Verified.vue'

import ChannelLink from '@/components/ChannelLink.vue'

import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores'

const { getServerName, getServerCategories } = storeToRefs(useMainStore())
const { setShowCategories, toggleCategory } = useMainStore()

onMounted(() => {
  setShowCategories(getServerCategories.value)
})
</script>

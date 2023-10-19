<template>
  <div class="bg-gray-800 w-60 flex flex-col">
    <button
      class="px-4 h-12 shadow-sm flex items-center font-title font-semibold text-white text-[15px] hover:bg-gray-550/[0.16] transition">
      <div class="relative w-4 h-4 mr-1">
        <Verified class="absolute w-4 h-4 text-gray-550" />
        <Check class="absolute w-4 h-4" />
      </div>
        {{ getServerName }}
      <Chevron class="w-[18px] h-[18px] ml-auto opacity-80" />
    </button>

    <div class="flex-1 overflow-y-scroll font-medium pt-3 space-y-[21px] text-gray-300">
      <div v-for="(category, index) in getServerCategories" :key="index">
        <button 
          @click="toggleCategory(category.id)"
          v-if="category.label" 
          class="flex items-center px-0.5 text-sx font-title uppercase tracking-wide hover:text-gray-100 w-full transition duration-200">
          <Arrow :class="[category.isShow ? '' : '-rotate-90', 'w-3 h-3 mr-0.5']" />
          {{ category.label }}
        </button>

        <div 
          v-for="channel in category.channels"
          :key="channel.id" 
          class="space-y-0.5 mt-[5px]"
        >
          <ChannelLink
            :channel="channel"
            v-if="category.isShow || (channel.unread != undefined && channel.unread != false)"
          />
        </div>
      </div>

    </div>
  </div>

  <div class="bg-gray-700 flex flex-1 flex-col">
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

<template>
  <div class="relative block group">
    <div class="absolute -left-3 h-full flex items-center">
      <div
        :class="[
          isCurrent
            ? 'h-10'
            : 'h-5 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100',
          'w-1 bg-white rounded-r origin-left transition-all duration-200'
        ]"
      ></div>
    </div>
    <div class="group-active:translate-y-px">
      <button
        @click="goToDefChannel()"
        :class="[
          isCurrent 
            ? 'rounded-2xl bg-brand text-white'
            : 'bg-gray-700 text-gray-100 rounded-3xl group-hover:bg-brand group-hover:text-white group-hover:cursor-pointer group-hover:rounded-2xl',
          'w-12 h-12 flex items-center justify-center transition-all duration-200 overflow-hidden'
        ]"
      >
        <slot></slot>
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores'

const props = defineProps({
  id: {
    type: Number,
    required: false,
  },
})

const route = useRoute()
const router = useRouter()
const { dataOfServer } = storeToRefs(useMainStore())

const isCurrent = computed(() => {
  return +route.params?.sid == props.id
})

const goToDefChannel = () => {
  if(!props.id) {
    router.push({ path: '/' })
  } else {
    //@ts-ignore
    router.push({ path: `/server/${props.id}/channels/${dataOfServer.value[props.id].categories[0].channels[0].id}` })
  }
}
</script>

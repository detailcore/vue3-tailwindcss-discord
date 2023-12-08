<template>
  <div class="group relative block">
    <div class="absolute -left-3 flex h-full items-center">
      <div
        :class="[
          isCurrent
            ? 'h-10'
            : 'h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100',
          'w-1 origin-left rounded-r bg-white transition-all duration-200',
        ]"
      ></div>
    </div>
    <div class="group-active:translate-y-px">
      <button
        :class="[
          isCurrent
            ? 'rounded-2xl bg-brand text-white'
            : 'rounded-3xl bg-gray-700 text-gray-100 group-hover:cursor-pointer group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white',
          'flex h-12 w-12 items-center justify-center overflow-hidden transition-all duration-200',
        ]"
        @click="goToDefChannel()"
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
  if (!props.id) {
    router.push({ path: '/' })
  } else {
    router.push({
      path: `/server/${props.id}/channels/${
        //@ts-ignore
        dataOfServer.value[props.id].categories[0].channels[0].id
      }`,
    })
  }
}
</script>

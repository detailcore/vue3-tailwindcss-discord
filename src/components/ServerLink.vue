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
      <router-link 
        :to="!id ? { name: 'home' } : { name: 'server', params: { sid: id } }"
        :class="[
          isCurrent 
            ? 'rounded-2xl bg-brand text-white'
            : 'bg-gray-700 text-gray-100 rounded-3xl group-hover:bg-brand group-hover:text-white group-hover:cursor-pointer group-hover:rounded-2xl',
          'w-12 h-12 flex items-center justify-center transition-all duration-200 overflow-hidden'
        ]"
      >
        <slot></slot>
      </router-link>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  id: {
    type: Number,
    required: false,
  },
})

const route = useRoute()

const isCurrent = computed(() => {
  return +route.params?.sid == props.id
})
</script>

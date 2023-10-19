<template>
  <div class="px-3 h-12 flex items-center shadow-sm">{{ getChannel.label }}</div>
  <div class="p-3 flex-1 space-y-2 overflow-y-scroll">
  </div>
</template>


<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores'
import { computed } from 'vue';
import { IChannel } from '@/stores/index.interfaces';

const route = useRoute()
const { getServerCategories } = storeToRefs(useMainStore())

const getChannel = computed<IChannel>(() => {
  return getServerCategories.value
    .map(c => c.channels)
    .flat()
    .find(ch => ch.id == +route.params.cid) as IChannel
})

</script>

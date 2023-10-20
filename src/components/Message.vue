<template>
  <div className="pl-4 pr-16 py-0.5 hover:bg-gray-950/[.07] leading-[22px]">
    <p className="text-gray-100 pl-14">{{ message.text }}</p>
  </div>
</template>


<script setup lang="ts">
import { IMessage } from '@/stores/index.interfaces'

defineProps<{
  message: IMessage
}>()
</script>

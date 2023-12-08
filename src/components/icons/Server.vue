<template>
  <p>Server {{ name }}</p>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

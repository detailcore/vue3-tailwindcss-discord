<template>
  <div class="flex h-screen text-gray-100">
    <div class="hidden space-y-2 overflow-y-scroll bg-gray-900 p-3 md:block">
      <ServerLink name="home">
        <Discord class="h-5 w-7" />
      </ServerLink>

      <hr class="mx-2 border-t-2 border-t-white/[.06]" />

      <ServerLink v-for="{ id, img } in servers" :id="id" :key="id">
        <img :src="getImageUrl('servers', img)" />
      </ServerLink>
    </div>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from './stores'
import Discord from '@/components/icons/Discord.vue'
import ServerLink from '@/components/ServerLink.vue'
import { useUtils } from './composables/useUtils'

const { servers } = useMainStore()
const { getImageUrl } = useUtils()
</script>

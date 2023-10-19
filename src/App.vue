<template>
  <div class="flex text-gray-100 h-screen">

    <div class="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
      <ServerLink name="home">
        <Discord class="w-7 h-5" />
      </ServerLink>

      <hr class="border-t-white/[.06] border-t-2 mx-2">

      <ServerLink 
        v-for="{ id, img } in servers" 
        :key="id"
        :id="id"
      >
        <img :src="getImageUrl('assets/servers', img)" />
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

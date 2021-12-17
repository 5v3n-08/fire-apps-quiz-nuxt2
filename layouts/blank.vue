<template>
  <v-app class="w-screen h-screen">
    <v-main>
      <DevTools />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DevTools from '@/components/DevTools.vue'

export default defineComponent({
  components: {
    DevTools,
  },
})
</script>

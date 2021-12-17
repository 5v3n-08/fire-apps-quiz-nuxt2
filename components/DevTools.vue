<template>
  <div
    class="w-full flex justify-between fixed top-0 text-sm pt-1 text-gray-200 z-50"
  >
    <div>
      <div class="item">{{ $config.apiUrl }}</div>
    </div>
    <div>
      <div class="item hidden xs:!inline">xs</div>
      <div class="item hidden sm:!inline">sm</div>
      <div class="item hidden md:!inline">md</div>
      <div class="item hidden lg:!inline">lg</div>
      <div class="item hidden xl:!inline">xl</div>
      <div class="item hidden 2xl:!inline">2xl</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  mounted() {
    console.log(this.$config.apiUrl)
  },
})
</script>

<style scoped>
.item {
  @apply border px-2 mx-1 border-black bg-black bg-opacity-50 rounded;
}
</style>

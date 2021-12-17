<template>
  <div
    class="w-full flex justify-between fixed top-0 text-sm pt-1 text-gray-400 z-50"
  >
    <div>
      <!-- <div class="item">{{ process.env.BASE_URL }}</div> -->
    </div>
    <div>
      <div class="item xs:!inline">xs</div>
      <div class="item sm:!inline">sm</div>
      <div class="item md:!inline">md</div>
      <div class="item lg:!inline">lg</div>
      <div class="item xl:!inline">xl</div>
      <div class="item 2xl:!inline">2xl</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  mounted() {
    console.log(process.env)
  },
})
</script>

<style scoped>
.item {
  @apply border px-2 mx-1 border-black bg-black bg-opacity-30 rounded hidden;
}
</style>

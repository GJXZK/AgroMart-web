<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useGlobalStore } from '@/stores/global'
import homeHeader from '@/components/home-header.vue'
import { computed } from 'vue'
const globalStore = useGlobalStore()
const RouterViewStyle = computed(() => {
  return {
    height: `${globalStore.windowHeight - 70}px`
  }
})
</script>
<template>
  <div class=" bg-#f5f5f5">
    <homeHeader></homeHeader>
    <div class="">
      <div class="">
        <RouterView />
      </div>
    </div>
  </div>
</template>

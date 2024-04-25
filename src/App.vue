<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useGlobalStore } from '@/stores/global'
import homeHeader from '@/components/HomePage/home-header.vue'
import { computed } from 'vue'
const globalStore = useGlobalStore()
const RouterViewStyle = computed(() => {
  return {
    height: `${globalStore.windowHeight - 70}px`,
  }
})
</script>
<template>
  <homeHeader></homeHeader>
  <div class="">
    <div :style="RouterViewStyle" class="">
      <RouterView />
    </div>
    
  </div>

</template>

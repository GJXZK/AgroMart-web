<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import mainHeader from '@/components/mainHeader.vue'
import menuBody from './recommendPageChidren/menuBody.vue'
const route = useRoute()
const router = useRouter()
  const routerPush = (path: string) => {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>
<template>
  <!-- 头部区域 -->
  <mainHeader></mainHeader>
  <menuBody></menuBody>

</template>
<style scoped></style>

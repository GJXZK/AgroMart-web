<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import mainHeader from '@/views/commendPage/commendPageChidren/mainHeader.vue'
const route = useRoute()
const router = useRouter()
  const routerPush = (path: string) => {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>
<template>
  <mainHeader></mainHeader>
</template>
<style scoped></style>

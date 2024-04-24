<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
  const routerPush = (path: string) => {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>
<template>
  首页
  <p @click="routerPush('/search')">搜索</p>
</template>
<style scoped></style>

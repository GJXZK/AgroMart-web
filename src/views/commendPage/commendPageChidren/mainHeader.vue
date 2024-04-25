<script setup lang="ts">
import { IconSearch, IconDelete } from '@arco-design/web-vue/es/icon'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

let gotoSearchPage= ()=>{
  router.push({ name: 'search', query: { searchKey: 'eduardo' } })
}
</script>
<template>
  <div class="h-120px flex">
    <!-- logo -->
    <div class="flex h-120px">
      <div class="w-400px h-120px flex justify-center items-center">
        <img class="w-60%" src="@\assets\img\logo.png" alt="" />
      </div>
    </div>
    <!-- search other -->
    <div class="w-full flex items-center justify-between">
      <!-- 搜索框 -->
      <div class="">
        <!-- 输入框 -->
        <div class="mt-20px">
          <a-input
            size="large"
            :style="{ width: '600px', height: '50px' }"
            placeholder="推荐搜索"
            allow-clear
            @press-enter="gotoSearchPage()"
          >
            <template #append>
              <icon-search size="20px"/>
            </template>
          </a-input>
        </div>
        <!-- 推荐 -->
        <div class="flex justify-items-start">
          <p>823一站通</p>
          <p class="ml-10px">823一站通</p>
          <p class="ml-10px">823一站通</p>
        </div>
      </div>
      <!-- 购物车 -->
      <div>
        <a-button :style="{ width: '120px', height: '50px' }" type="outline" status="danger">
          <template #icon>
            <img class="w-60% mr-10px" src="@\assets\img\cart.png" alt="">
          </template>
          <template #default>
            <p class="text-17px">购物车</p>
          </template>
        </a-button>
      </div>
      <!-- 广告 -->
      <div class="mr-100px">
        <img src="@\assets\img\a1917f025ce14a84b67ea3565438adfd.gif" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>

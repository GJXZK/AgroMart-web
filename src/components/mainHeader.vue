<script setup lang="ts">
import {onMounted} from 'vue'
import { IconSearch, IconDelete } from '@arco-design/web-vue/es/icon'
import { useRoute, useRouter } from 'vue-router'
import category from '@/components/category.vue'
const router = useRouter()
const route = useRoute()
let gotoSearchPage = () => {
  router.push({ name: 'search', query: { searchKey: 'eduardo' } })
}
let goPage = () => {
  window.open('https://www.fupin832.com/')
}
</script>
<template>
  <!-- Header -->
  <div class="h-160px bg-#fff flex flex-col items-center">
    <div class="w h-120px flex">
      <!-- logo -->
      <div class="flex h-120px">
        <div class="w-300px h-120px flex items-center" @click="goPage()">
          <img class="w-90%" src="@\assets\img\logo.png" alt="" />
        </div>
      </div>
      <!-- search other -->
      <div class="w-full flex items-center justify-between ml-50px">
        <!-- 搜索框 -->
        <div class="">
          <!-- 输入框 -->
          <div class="mt-20px">
            <a-input
              size="large"
              :style="{ width: '400px', height: '45px' }"
              placeholder="推荐搜索"
              allow-clear
              @press-enter="gotoSearchPage()"
            >
              <template #append>
                <icon-search size="20px" />
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
          <a-button :style="{ width: '120px', height: '45px' }" type="outline" status="danger">
            <template #icon>
              <img class="w-60% mr-10px" src="@\assets\img\cart.png" alt="" />
            </template>
            <template #default>
              <p class="text-17px">购物车</p>
            </template>
          </a-button>
        </div>
        <!-- 广告 -->
        <div class="">
          <img src="@\assets\img\a1917f025ce14a84b67ea3565438adfd.gif" alt="" />
        </div>
      </div>
    </div>
    <!-- hot -->
    <div class="flex w">
      <div class="h-40px w-300px">
        <a-popover position="bottom" v-if="route.path=='/search'">
          <div class="h-40px w-300px bg-red flex items-center">
            全部商品分类
          </div>
          <template #content>
            <div class="w-300px h-300px">
              <category></category>
            </div>
           
          </template>
        </a-popover>
      </div>
      <div class="w-600px flex justify-around items-center">
        <div class="flex">
          <p class="text-17px">823优选</p>
          <div class="w-20px">
            <img class="w-16px" src="@\assets\img\Hot.gif" alt="" />
          </div>
        </div>
        <div class="flex">
          <p class="text-17px">823优选</p>
          <div class="w-20px">
            <img class="w-16px" src="@\assets\img\Hot.gif" alt="" />
          </div>
        </div>
        <div class="flex">
          <p class="text-17px">823优选</p>
          <div class="w-20px">
            <img class="w-16px" src="@\assets\img\Hot.gif" alt="" />
          </div>
        </div>
        <div class="flex">
          <p class="text-17px">823优选</p>
          <div class="w-20px">
            <img class="w-16px" src="@\assets\img\Hot.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<style scoped></style>

<script setup lang="ts">

import category from '@/components/category.vue';
import { onMounted, ref } from 'vue';
import recommendApi from '@/api/recommendApi';
import type { BannerDto } from '@/model/discover';

// Image array
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp'
];

// Asynchronous function to fetch banners with error handling
const getBannerC = async () => {
  try {
    let result = await recommendApi.getBannners();
    console.log(result);
  } catch (error) {
    console.error("Error fetching banners:", error);
  }
};

// Fetch banners when component is mounted
onMounted(() => {
  getBannerC();
});

</script>
<template>
  <div class="flex justify-center pt-10px">
    <div class="w h-500px flex">
      <!-- menu -->
      <menu class="w-300px h-500px bg-#fff">
        <category></category>
      </menu>
      <!-- 轮播 -->
      <div class="w-600px h-500px bg-amber mx-10px">
        <a-carousel
          class="w-full h-300px bg-pink"
          :auto-play="true"
          animation-name="fade"
          show-arrow="never"
        >
          <a-carousel-item v-for="image in images">
            <img
              :src="image"
              :style="{
                width: '100%'
              }"
            />
          </a-carousel-item>
        </a-carousel>
        <div class="mt-10px">
          <img src="@/assets/img/ceb9691a59be4a599f742e753873ccbf.jpg" />
        </div>
      </div>
      <!-- 登录  -->
      <div class="w-300px h-500px bg-#fff">
        <!-- login -->
        <div class="p-20px">
          <!-- 欢迎 -->
          <div class="flex items-center">
            <img src="@/assets/img/avatar.png" alt="" />
            <p class="ml-20px">欢迎来到xxxx</p>
          </div>
          <!-- 按钮 -->
          <div class="mt-20px flex justify-between">
            <a-button :style="{ width: '100px', height: '30px' }" status="danger">登 录</a-button>
            <a-button :style="{ width: '100px', height: '30px' }" type="outline" status="danger"
              >注 册</a-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

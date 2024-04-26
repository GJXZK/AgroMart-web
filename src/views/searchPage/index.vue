<!-- 
  搜索界面
 -->
<script setup lang="ts">
import mainHeader from '@/components/mainHeader.vue'
import hotRecommend from '@/components/hotRecommend.vue';
</script>
<template>
  <mainHeader></mainHeader>
  <div class="flex justify-center bg-#fff">
    <div class="w">
      <!-- 面包屑 -->
      <div class="h-30px flex items-center">
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>Channel</a-breadcrumb-item>
          <a-breadcrumb-item>News</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <!-- 主体部分 -->
      <div class="flex mt-20px">
        <!-- 热门推荐 -->
        <div class="">
          <hotRecommend></hotRecommend>
        </div>
        <!-- searchresult -->
        <div class="w-full pl-20px">
          <div class="w-full h-80px bg-amber">
            预留操作区
          </div>
          <div class="w-full flex flex-wrap " style="gap: 1px;">
            <div class="w-225px h-320px bg-#ccc" v-for="i in 10" style="transition: box-shadow 0.3s;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.w-225px:hover { 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); 
}
</style>

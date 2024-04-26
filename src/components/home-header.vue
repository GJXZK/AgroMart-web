<script setup lang="ts"></script>
<template>
  <div class="h-20px bg-#f6f8fa flex justify-center">
    <div class="w flex justify-between items-center text-12px">
      <!-- left 欢迎  登录  注册 -->
      <div class="flex">
        <div>欢迎光临</div>
        <div class="w-120px ml-50px flex justify-around">
          <div class="">登录</div>
          <div class="">|</div>
          <div class="text-red">免费注册</div>
        </div>
      </div>
      <!-- right 购物车 -->
      <div class="flex">
        <div class="mr-50px">购物车</div>
        <div>
          <a-popover title="Title" trigger="click" position="bottom">
            <p class="cursor-pointer">联系我们</p>
            <template #content>
              <p>1234567890</p>
              <p>Here is the text content</p>
            </template>
          </a-popover>
        </div>
      </div>
    </div>
  </div>
</template>

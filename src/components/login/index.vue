<script setup lang="ts">
import qrimg from './Qrimg.vue'
import Qrform from './Qrform.vue'
</script>
<template>
  <div class="w-300px">
    <a-tabs default-active-key="2">
      <!-- 二维码登录 -->
      <a-tab-pane class="w-150px" key="1" title="二维码登录">
         <qrimg></qrimg>
        </a-tab-pane>
      <!-- 手机验证码登录 -->
      <a-tab-pane class="w-150px" key="2" title="手机验证码登录">
        <Qrform></Qrform>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<style></style>

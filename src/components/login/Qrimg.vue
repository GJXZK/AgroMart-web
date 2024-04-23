<script setup lang="ts">
import { computed, getCurrentInstance, reactive, ref, toRefs } from 'vue'
import { request } from '@/api/index';

// 获取登录验证码
// export function getVerifyCode(query) {
//   return request('/captcha/sent', query);
// }

// 登录c
// export function login(query) {
//   return request('/login/cellphone', query);
// }

// 二维码登录流程：生成key => 根据key生成二维码 => 轮询获取二维码接口状态
// 二维码生成key
export function getQrCodeKey() {
  return request('/login/qr/key');
}

// 生成二维码
export function getQrCode(key:string) {
  return request(`/login/qr/create?key=${key}&qrimg=true`);
}

// 获取二维码状态
export function checkQrCode(key:string) {
  return request(`/login/qr/check?key=${key}`);
}

// 获取账号信息
export function getAccountInfo() {
  return request('/user/account');
}


let qrcode = ref(false)
let qrcodeKey = ref('')
let qrCodeImg = ref('')
</script>
<template>
  <div class="img-container">
    <img :src="qrCodeImg" />
  </div>
</template>
<style></style>

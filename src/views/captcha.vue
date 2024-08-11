<script lang="ts" setup>
import type {CaptchaConfig} from "@/types/captcha.ts";
import {reactive} from "vue";
import GtCaptcha from "@/components/gt-captcha.vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {gt, challenge, new_captcha, success} = route.query;
const config: CaptchaConfig = reactive({
  // 省略必须的配置参数
  gt: <string>gt,
  challenge: <string>challenge,
  new_captcha: !new_captcha,
  offline: !success,
  product: 'bind',
  lang: 'zh-cn'
})
</script>

<template>
  <gt-captcha :config="config"/>
</template>

<style lang="scss" scoped>

</style>

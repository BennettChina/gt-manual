<script lang="ts" setup>

import type {CaptchaHandle, CaptchaProps} from "@/types/captcha.ts";
import axios from "axios";

const {config} = defineProps<CaptchaProps>();

const callback: CaptchaHandle = (captchaObj: any) => {
  // 极验V3实现
  captchaObj.onReady(() => {
    captchaObj.verify();
  }).onSuccess(() => {
    const validate = captchaObj.getValidate();
    if (!validate) alert("请先完成验证");

    const api = import.meta.env.VITE_CAPTCHA_API
    axios.post(api, validate)
        .then(resp => {
          if (resp.data.code === 0) {
            document.body.append("<h1>验证码已提交，可关闭本页面返回原服务了。</h1>>")
            return;
          }
          return Promise.reject(`服务器错误: ${resp.data.message}`);
        })
        .catch(reason => {
          if (axios.isAxiosError(reason)) {
            console.error(`服务器错误: ${reason.message}`)
            return;
          }
          console.error(reason);
        })

    captchaObj.destroy();
  }).onError(() => {
    console.error("初始化失败");
  });
}

window.initGeetest(config, callback);


</script>

<template>
  <div id="captcha-box"></div>
</template>

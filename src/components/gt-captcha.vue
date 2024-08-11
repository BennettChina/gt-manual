<script lang="ts" setup>

import type {CaptchaHandle, CaptchaProps} from "@/types/captcha.ts";
import axios from "axios";

const {config} = defineProps<CaptchaProps>();

const callback: CaptchaHandle = (captchaObj: any) => {
  captchaObj.onReady(() => {
    captchaObj.showCaptcha();
  }).onSuccess(() => {
    const validate = captchaObj.getValidate();
    if (!validate) alert("请先完成验证");

    const api = import.meta.env.VITE_CAPTCHA_API
    axios.post(api, validate)
        .then(resp => {
          if (resp.data.code === 0) {
            alert("验证码已提交")
            return
          }
          alert(`服务器错误: ${resp.data.message}`)
        })
        .catch(reason => {
          if (axios.isAxiosError(reason)) {
            console.error(`服务器错误: ${reason.message}`)
            return;
          }
          console.error(reason);
        })

    captchaObj.reset();
  }).onError(() => {
    console.error("初始化失败");
  })
}

window.initGeetest4(config, callback);


</script>

<template>
  <div id="captchaBox"></div>
</template>

<script lang="ts" setup>

import type {CaptchaConfig, CaptchaHandle, CaptchaProps, Gt4Config, GtError} from "@/types/captcha.ts";
import axios from "axios";
import {onMounted, ref} from "vue";
import {transfer} from "@/utils/transfer.ts";

const {config, sessionId} = defineProps<CaptchaProps>();

const show = ref(false);
const errMsg = ref("");
const captchaBox = ref<HTMLElement>();
const mounted = ref(false);

let captchaObj: any = null;
let attachedV4Captcha = false;

const isV4 = (value: CaptchaConfig): value is Gt4Config =>
    Object.prototype.hasOwnProperty.call(value, "captchaId");

const getSessionId = (): string | undefined => {
  if (!isV4(config)) {
    return sessionId;
  }

  if (!config.userInfo) {
    return undefined;
  }

  try {
    const userInfo = JSON.parse(config.userInfo) as Record<string, unknown>;
    return typeof userInfo.session_id === "string" ? userInfo.session_id : undefined;
  } catch {
    return undefined;
  }
}

const buildKey = (): string | undefined => {
  const sessionId = getSessionId();
  const gt = isV4(config) ? config.captchaId : config.gt;
  return sessionId && gt ? `${sessionId}:${gt}` : undefined;
}

const submit = (validate: Record<string, unknown>) => {
    const api = import.meta.env.VITE_CAPTCHA_API
  const key = buildKey();
  axios.post(api, key ? {...validate, key} : validate)
        .then(resp => {
          if (resp.data.code === 0) {
            show.value = true;
            captchaObj?.destroy?.();
            return;
          }

          const message = resp.data?.message ?? "未知错误";
          errMsg.value = `服务器错误: ${message}`;
          captchaObj?.reset?.();
        })
        .catch(reason => {
          const message = axios.isAxiosError(reason) ? reason.message : String(reason);
          console.error(`服务器错误: ${message}`);
          errMsg.value = `服务器错误: ${message}`;
        });
}

const handleError = (error: GtError) => {
  errMsg.value = transfer(error) || error.msg || "验证码初始化失败";
  console.error("验证码初始化失败", error);
}

const attachV4Captcha = () => {
  if (!captchaObj || !mounted.value || !isV4(config) || attachedV4Captcha) {
    return;
  }

  attachedV4Captcha = true;

  if (config.product === "bind") {
    captchaObj.showCaptcha();
    return;
  }

  if (captchaBox.value) {
    captchaObj.appendTo(captchaBox.value);
  }
}

const v3Callback: CaptchaHandle = (captcha: any) => {
  captchaObj = captcha;

  captchaObj.onReady(() => {
    captchaObj.verify();
  }).onSuccess(() => {
    const validate = captchaObj.getValidate();
    if (!validate) {
      alert("请先完成验证");
            return;
    }

    submit(validate);
  }).onError((error: GtError) => {
    handleError(error);
  });
}

const v4Callback: CaptchaHandle = (captcha: any) => {
  captchaObj = captcha;

  captchaObj.onReady(() => {
    attachV4Captcha();
  }).onSuccess(() => {
    const validate = captchaObj.getValidate();
    if (!validate) {
      alert("请先完成验证");
      return;
    }

    submit(validate);
  }).onError((error: GtError) => {
    handleError(error);
  });
}

onMounted(() => {
  mounted.value = true;

  if (isV4(config)) {
    attachV4Captcha();
  }
});

if (isV4(config)) {
  window.initGeetest4(config, v4Callback);
} else {
  window.initGeetest(config, v3Callback);
}

</script>

<template>
  <div ref="captchaBox"></div>
  <h1 v-if="show">验证码已提交，可关闭本页面返回原服务了。</h1>
  <h2 v-if="errMsg">{{ errMsg }}</h2>
</template>

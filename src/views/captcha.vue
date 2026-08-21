<script lang="ts" setup>
import type {CaptchaConfig, Gt3Config, Gt4Config} from "@/types/captcha.ts";
import {reactive} from "vue";
import GtCaptcha from "@/components/gt-captcha.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

type QueryValue = string | null | Array<string | null>;

const getQueryValue = (value: QueryValue): string | undefined =>
    Array.isArray(value) ? value[0] ?? undefined : value ?? undefined;

const useV4 = getQueryValue(route.query.use_v4) === "true";
const sessionId = getQueryValue(route.query.session_id);

let config: CaptchaConfig;

if (useV4) {
  const captchaId = getQueryValue(route.query.gt);
  const product = getQueryValue(route.query.product) as Gt4Config["product"];
  const language = getQueryValue(route.query.language) as Gt4Config["language"];
  const riskType = getQueryValue(route.query.risk_type) ?? getQueryValue(route.query.riskType);
  const userInfo = getQueryValue(route.query.userInfo);

  if (!captchaId) {
    router.push({path: "/"});
  }

  config = reactive<Gt4Config>({
    captchaId: <string>captchaId,
    product: product === "float" || product === "popup" || product === "bind" ? product : "bind",
    language: language || "zho",
    riskType,
    userInfo,
    hideSuccess: getQueryValue(route.query.hideSuccess) === "true",
  });
} else {
  const gt = getQueryValue(route.query.gt);
  const challenge = getQueryValue(route.query.challenge);
  const newCaptcha = getQueryValue(route.query.new_captcha);
  const success = getQueryValue(route.query.success);

  if (!gt || !challenge) {
    router.push({path: "/"});
  }

  config = reactive<Gt3Config>({
    gt: <string>gt,
    challenge: <string>challenge,
    new_captcha: newCaptcha === undefined ? true : !!newCaptcha,
    offline: success === undefined ? false : !success,
    product: "bind",
    lang: "zh-cn",
  });
}
</script>

<template>
  <gt-captcha :config="config" :session-id="sessionId"/>
</template>

<style lang="scss" scoped>

</style>

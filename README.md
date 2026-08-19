# 手动打码平台

手动打码平台的前端服务，可以部署在免费的 Vercel 平台。

部署的环境需要添加以下环境变量

| 名称               | 描述        | 示例                                         |
|------------------|-----------|--------------------------------------------|
| VITE_CAPTCHA_API | 后端服务API地址 | `http://localhost:8000/api/manual/captcha` |

## 验证码接入

当前前端同时支持极验 V3 和 V4。

- V3 使用 `https://static.geetest.com/static/js/gt.0.4.9.js`，初始化参数来自 `gt`、`challenge`。
- V4 使用 `https://static.geetest.com/v4/gt4.js`，通过 `use_v4=true` 启用，初始化参数中的 `captchaId` 取自 `gt`。

手动处理页路由为 `/manual/captcha`，后端按版本传入对应查询参数即可。

## 后端服务

[awesome-api](https://github.com/BennettChina/awesome-api)

## 部署

### 使用 Vercel 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBennettChina%2Fgt-manual&env=VITE_CAPTCHA_API&project-name=gt-manual&repository-name=gt-manual)

### 自行编译部署

```bash
npm install && npm run build
```

### 开发环境

```bash
npm install && npm run dev
```

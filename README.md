# 手动打码平台

手动打码平台的前端服务，可以部署在免费的 Vercel 平台。

部署的环境需要添加以下环境变量

| 名称               | 描述        | 示例                                         |
|------------------|-----------|--------------------------------------------|
| VITE_CAPTCHA_API | 后端服务API地址 | `http://localhost:8000/api/manual/captcha` |

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

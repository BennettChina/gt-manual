/// <reference types="vite/client" />
declare module "*.vue" {
    import {DefineComponent} from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    readonly VITE_CAPTCHA_API: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}


declare global {
    interface Window {
        initGeetest4: (config, callback) => void;
        initGeetest: (config, callback) => void;
        captchaObj: any
    }
}

export {}

export type CaptchaHandle = (captcha: object) => void;

export type CaptchaConfig = Gt4Config | Gt3Config;

export interface Gt4Config {
    captchaId: string;
    product?: "float" | "popup" | "bind";
    nativeButton?: object;
    rem?: number;
    language?: "zho" | "eng" | "zho-tw" | "zho-hk" | "udm" | "jpn" | "ind" | "kor" | "rus" | "ara" | "spa" | "pon" | "por" | "fra" | "deu";
    protocol?: "http://" | "https://";
    timeout?: number;
    hideBar?: string[];
    mask?: object;
    apiServers?: string[];
    nextWidth?: string;
    riskType?: string;
    hideSuccess?: boolean;
    offlineCb?: () => void;
    onError?: (err: Error) => void;
    userInfo?: string;
}

export interface Gt3Config {
    gt: string;
    challenge: string;
    offline: boolean;
    new_captcha: boolean;
    product?: "float" | "popup" | "bind" | "custom";
    width?: string;
    lang?: "zh-cn" | "zh-hk" | "zh-tw" | "en" | "ja" | "ko" | "id" | "ru" | "ar" | "es" | "pt-pt"
        | "fr" | "de" | "th" | "tr" | "vi" | "ta" | "it" | "bn" | "mr";
    https?: boolean;
    timeout?: number;
    remUnit?: number;
    zoomEle?: string;
    hideSuccess?: boolean;
    hideClose?: boolean;
    hideRefresh?: boolean;
    api_server?: string;
    api_server_v3?: string;
}


export type CaptchaProps = {
    config: CaptchaConfig;
}

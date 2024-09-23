import {GtError} from "@/types/captcha.ts";

const CODE_MAP = {
    // server error
    'error_00': '运行异常',
    'error_01': '刷新次数过多',
    'error_02': 'challenge重复使用',
    'error_03': '参数解密错误',
    'error_11': '已验证过',
    'error_12': '尝试次数过多',
    'error_13': '没有传用户答案',
    'error_14': '用户答案解码错误',
    'error_21': '已验证或 challenge 非法',
    'error_22': '没有上传 challenge 字段',
    'error_23': 'challenge 字段非法',
    'error_31': '没有上传 captcha_id 字段',
    'error_32': 'captcha_id 字段非法',
    'error_34': '查不到账号信息',
    'error_42': '错误的 captcha_id 字段',
    'error_51': '验证状态标识为已验证过',
    // web error
    'error_100': '传给 appendTo 接口的参数有误，只接受 id 选择器和 DOM 元素',
    'error_101': '传给 bindOn 接口的参数有误，只接受 id 选择器和 DOM 元素',
    'error_102': '传给各回调的参数不是函数类型，请传入函数类型参数',
    'error_103': '配置参数 gt 有误，请检查初始化时传入的配置参数gt（对应申请时的ID）',
    'error_104': 'get.php请求报错，检查初始化时传入的配置参数gt和challenge',
    'error_105': 'ajax.php 请求报错，检查网络状态',
    'error_106': 'refresh.php 请求报错(刷新次数有限制（6 次以内），超过限制请刷新整个页面)',
    'error_107': '皮肤加载失败，请检查网络畅通',
    'error_108': '验证图片加载失败，请检查网络状态',
    'error_109': 'reset.php请求报错，请检查网络状态',
    'error_110': '验证的 js 地址不存在',
    'error_111': '验证的 js 地址无法加载',
    'error_112': '配置参数 area 有误：只接受 id 选择器和 DOM 元素',
    'error_113': '服务端forbidden：请联系极验官网客服',
    'error_114': 'initGeetest里面的gt或者challenge参数缺少: 请检查初始化参数',
    'error_115': '语音文件加载失败：1.请保持网络畅通；2.请联系极验官网客服',
    'error_116': '用户回调函数执行异常,请检查api方法中的回调函数',
    'error_117': '未定义的错误类型',
}

export function transfer(error: GtError): string | undefined {
    return CODE_MAP[error.code];
}


declare const _default: import("vue").DefineComponent<{
    modelValue: {
        default: string;
    };
    language: {
        default: string;
    };
    theme: {
        default: string;
    };
    monaco: null;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    language?: unknown;
    theme?: unknown;
    monaco?: unknown;
} & {
    modelValue: string;
    language: string;
    theme: string;
} & {
    monaco?: any;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    language: string;
    theme: string;
}>;
export default _default;

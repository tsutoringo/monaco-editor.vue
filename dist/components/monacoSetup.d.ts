import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { InjectionKey } from 'vue';
export interface MonacoEditorProps {
    modelValue: string;
    language: string;
    theme: string;
    monaco: typeof monaco;
}
export interface MonacoEditorEmits {
    (event: 'update:modelValue', value: string): void;
}
export interface ProvideFunction {
    (container: HTMLDivElement, context: {
        props: MonacoEditorProps;
        emit: MonacoEditorEmits;
    }): monaco.editor.IEditor;
}
export declare const injectionKey: InjectionKey<ProvideFunction>;

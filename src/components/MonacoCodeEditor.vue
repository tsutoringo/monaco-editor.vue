<script lang="ts" setup>
import { provide, toRefs, watch } from 'vue';
import MonacoEditor from './MonacoEditor.vue';
import * as monacoSetup from './monacoSetup';
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const props = withDefaults(defineProps<{
  options?: monaco.editor.IEditorOptions & monaco.editor.IGlobalEditorOptions
}>(), {
  options: () => ({})
});

const emit = defineEmits<{(event: 'monacoEditorMounted', editor: monaco.editor.IStandaloneCodeEditor): void}>();

provide(monacoSetup.injectionKey, (container, { props: _props, emit: _emit }) => {
  const editor = _props.monaco.editor.create(container, {
    value: _props.modelValue,
    language: _props.language,
    theme: _props.theme,
    ...props.options
  });

  emit('monacoEditorMounted', editor);

  editor.onDidChangeModelContent(() => {
    _emit('update:modelValue', editor.getValue());
  });

  watch(toRefs(_props).modelValue, () => {
    _props.modelValue !== editor.getValue() && editor.setValue(_props.modelValue);
  });

  watch(toRefs(props).options, () => {
    editor.updateOptions(props.options);
  }, { deep: true });

  watch(toRefs(_props).language, () => {
    const model = editor.getModel();
    if (!model) return;
    _props.monaco.editor.setModelLanguage(model, _props.language);
  });

  return editor;
});
</script>
<template>
  <MonacoEditor class="monaco-code-editor" />
</template>

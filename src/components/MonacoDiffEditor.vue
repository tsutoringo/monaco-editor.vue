<script lang="ts" setup>
import { provide, watch, toRefs } from 'vue';
import MonacoEditor from './MonacoEditor.vue';
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import * as monacoSetup from './monacoSetup';

const props = withDefaults(defineProps<{
  originalValue: string;
  options?: monaco.editor.IDiffEditorOptions
}>(), {
  originalValue: '',
  options: () => ({})
});

const emit = defineEmits<{(event: 'monacoEditorMounted', editor: monaco.editor.IStandaloneDiffEditor): void;}>();

provide(monacoSetup.injectionKey, (container, { props: _props, emit: _emit }) => {
  const editor = _props.monaco.editor.createDiffEditor(container, {
    theme: _props.theme,
    ...props.options
  });

  emit('monacoEditorMounted', editor);

  editor.setModel({
    original: _props.monaco.editor.createModel(props.originalValue, _props.language),
    modified: _props.monaco.editor.createModel(_props.modelValue, _props.language)
  });

  editor.onDidUpdateDiff(() => {
    _emit('update:modelValue', editor.getModifiedEditor().getValue());
  });

  watch(toRefs(_props).modelValue, () => {
    _props.modelValue !== editor.getModifiedEditor().getValue() && editor.getModifiedEditor().setValue(_props.modelValue);
  });

  watch(toRefs(props).options, () => {
    editor.updateOptions(props.options);
  }, { deep: true });

  watch(toRefs(_props).language, () => {
    const models = editor.getModel();
    if (!models) return;
    _props.monaco.editor.setModelLanguage(models.original, _props.language);
    _props.monaco.editor.setModelLanguage(models.modified, _props.language);
  });

  return editor;
});
</script>
<template>
  <MonacoEditor class="monaco-diff-editor"/>
</template>

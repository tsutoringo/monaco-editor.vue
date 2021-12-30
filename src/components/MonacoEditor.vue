<script lang="ts" setup>
import * as monacoSetup from './monacoSetup';
import { inject, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
import type monaco from 'monaco-editor/esm/vs/editor/editor.api';

const monacoEditorContainer = ref<HTMLDivElement | null>(null);
let editor: monaco.editor.IEditor | null = null;

const props = withDefaults(
  defineProps<{
    modelValue: string;
    language?: string;
    theme?: string;
    monaco: typeof monaco;
  }>(),
  {
    modelValue: '',
    language: 'javascript',
    theme: 'vs'
  }
);

const emit = defineEmits<{(event: 'update:modelValue', value: string): void;}>();

onMounted(() => {
  const setupMonaco = inject(monacoSetup.injectionKey);

  if (!setupMonaco) throw new Error('setupMonaco is not provided');
  if (!monacoEditorContainer.value) throw new Error('monacoEditorContainer is not provided');
  if (!props.monaco) throw new Error('monaco is not provided');

  editor = setupMonaco(monacoEditorContainer.value, { props, emit });

  watch(toRefs(props).theme, () => {
    props.monaco.editor.setTheme(props.theme);
  });
});

onUnmounted(() => {
  if (editor) {
    editor.dispose();
    editor = null;
  }
});

</script>
<template>
  <div class="monaco-editor-container monaco" ref="monacoEditorContainer"></div>
</template>

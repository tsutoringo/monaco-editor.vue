<script lang="ts" setup>
import { MonacoCodeEditor } from '../';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { ref } from 'vue';

const language = ref('css');
const code = ref('あああ');
</script>
<template>
  <MonacoCodeEditor
    :monaco="monaco"
    v-model="code"
    :language="language"
    theme="vs"
  />
  <textarea v-model="code"></textarea>
</template>
<style>
body {
  margin: 0;
}
.monaco-code-editor {
  height: 50vh;
}
.code {
  height: 50vh;
}
</style>

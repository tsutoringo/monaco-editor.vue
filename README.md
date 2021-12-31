# ///////// WIP /////////
# monaco-editor.vue
This package support only vue 3.

## WIP
This package is a work in progress.  
there may be many bugs in this package.

If you have suggestions, please submit a pull request or an issue.

## Example

```html
<script lang="ts" setup>
import { MonacoCodeEditor } from '../';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { ref } from 'vue';

const monacoEditorMounted = (editor: monaco.editor.ICodeEditor) => {
  window.addEventListener('resize', () => {
    editor.layout();
  });
};

const language = ref('css');
const code = ref('あああ');
</script>
<template>
  <MonacoCodeEditor
    :monaco="monaco"
    v-model="code"
    :language="language"
    theme="vs-dark"
    @monaco-editor-mounted="monacoEditorMounted"
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
```

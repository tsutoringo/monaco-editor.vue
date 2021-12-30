
/* eslint-disable */
declare module '*.vue' {
  import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

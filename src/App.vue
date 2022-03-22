<template>
  <div style="max-width: 800px; margin: auto;">
    <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor>
    <br><br>
    <hr>
    <hr>
    <hr>
    <br><br>
    <div>
      <v-runtime-template :template="code"></v-runtime-template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// import Prism Editor
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import Prism from "prismjs";
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

// Component live rendering
import VRuntimeTemplate from "vue3-runtime-template";

const code = ref(`<o-alert>
  tutu
</o-alert>`);

function highlighter(code: string) {
  return Prism.highlight(code, Prism.languages.js, 'javascript'); // languages.<insert language> to return html with markup
}
</script>

<style>
  /* required class */
  .my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
</style>
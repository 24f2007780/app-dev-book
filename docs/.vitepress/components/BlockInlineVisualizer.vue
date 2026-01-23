<template>
  <div class="bi-thinking">
    <h3>Block vs Inline — Change code & Observe why?</h3>

    <div class="bi-grid">
      <!-- LEFT: Editable HTML -->
      <textarea
        v-model="htmlCode"
        class="code-editor"
        spellcheck="false"
      ></textarea>

      <!-- RIGHT: Rendered Output -->
      <div class="preview">
        <div v-html="htmlCode"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'block-inline-visualizer'
})

import { ref } from 'vue'

const htmlCode = ref(`
<span>1. SPAN</span>
<em>EM</em>

<p>2.PARAGRAPH</p>

<span>3. SPAN</span>
<strong>STRONG</strong>
<a href="#">ANCHOR</a>
<span>2nd SPAN</span>

<div>4. DIV</div>
<span>SPAN</span>
`)
</script>

<style lang="css" scoped>
.bi-thinking {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
}

/* layout */
.bi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* editor */
.code-editor {
  width: 100%;
  min-height: 300px;
  font-family: monospace;
  font-size: 0.9rem;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: #ffffff;
  color: #000000; /* BLACK TEXT */
  line-height: 1.6;
}

/* preview */
.preview {
  border: 2px dashed #999;
  padding: 0.75rem;
  background: #ffffff;
  color: #000000; /* BLACK TEXT */
  line-height: 2;
}

/* ensure all rendered text is black */
.preview * {
  color: #000000;
}

/* visual separation */
.preview p,
.preview div {
  border: 2px solid #2563eb;
  padding: 0.3rem;
  margin: 0.5rem 0;
  background: #e0f2fe;
}

.preview span,
.preview strong,
.preview em,
.preview a {
  border: 1px solid #444;
  padding: 0.15rem 0.35rem;
  margin-right: 0.3rem;
  background: #f1f5f9;
  text-decoration: none;
}
</style>
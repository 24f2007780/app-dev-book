<template>
  <div class="ti-wrapper">
    <!-- Code Editor -->
    <textarea
      v-model="htmlCode"
      class="ti-editor"
      spellcheck="false"
    ></textarea>

    <!-- Rendered Output -->
    <div class="ti-preview">
      <div v-html="htmlCode"></div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: 'CSS-specificity'
})

import { ref } from "vue";

const htmlCode = ref(`<!DOCTYPE html>
<html>
<head>
  <style>
    h6 {
      color: blue;
    }
    .red {
      color: red;
    }
    .green {
      color: green;
    }
    #special {
      color: grey;
    }
    .important {
      color: orange !important;
    }
  </style>
</head>

<body>
  <h6 class="red green">
  Case 1: Two classes applied (same specificity)
</h6>

<h6 class="green" id="special">
  Case 2: Class and ID applied together
</h6>

<h6 class="green" id="special" style="color: plum;">
  Case 3: Inline style with ID and class
</h6>

<h6 class="green important" id="special" style="color: plum;">
  Case 4: !important with inline, ID, and class
</h6>

<h6 class="red important">
  Case 5: Multiple !important rules
</h6>
  <!-- Instructions -->
  <hr>
  <p style="color:black">
    🧪 Try this:
    <br>1. Remove <code>!important</code> and see what changes
    <br>2. Swap class rule order
    <br>3. Add <code>!important</code> to <code>#special</code>
  </p>
`);
</script>

<style scoped>
/* wrapper only controls layout, NOT content styles */
.ti-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}

/* editor */
.ti-editor {
  width: 100%;
  min-height: 380px;
  font-family: monospace;
  font-size: 0.85rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: inherit;
}

/* preview container ONLY */
.ti-preview {
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.75rem;
  background: white;
  overflow: auto;
}
</style>

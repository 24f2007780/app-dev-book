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
    /* Base template */
    h6 {
      font-size: 22px;
      color: blue;
    }

    h1 {
      color: blue;
    }

    /* Extended template (class) */
    .blue {
      color: red;
    }

    .green {
      color: green;
    }

    /* More specific template (id) */
    #special {
      color: grey;
    }
  </style>
</head>

<body>
  <h6 class="blue">Text1</h6>
  <!-- class overrides element -->

  <h6 class="green" id="special" style="color: plum;">
    Text2
  </h6>
  <!-- inline overrides id & class -->

  <h6 class="green" id="special">Text3</h6>
  <!-- id overrides class -->

  <h1>Text4</h1>
  <!-- element style -->

  <h1>Text5</h1>
</body>
</html>

<!-- Priority:
!important > inline > id > class > element -->
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

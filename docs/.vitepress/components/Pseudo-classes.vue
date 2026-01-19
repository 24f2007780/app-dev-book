<template>
  <div class="link-demo-card">
    <h3 style="color: black;">Link State Demo</h3>

    <a
      href="#demo"
      class="demo-link"
      @mouseenter="setState('hover')"
      @mouseleave="setState(visited ? 'visited' : 'link')"
      @mousedown="setState('active')"
      @mouseup="handleClick"
    >
      Demo Link
    </a>

    <p class="state-label" style="color: black;">
      Current state:
      <span :class="currentState">{{ currentState }}</span>
    </p>
  </div>
</template>

<script setup>
defineOptions({
  name: 'pseudo-class'
})
import { ref } from "vue";

const currentState = ref("link");
const visited = ref(false);

function setState(state) {
  currentState.value = state;
}

function handleClick() {
  visited.value = true;
  currentState.value = "visited";
}
</script>

<style scoped>
.link-demo-card {
  max-width: 320px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fafafa;
  text-align: center;
  font-family: system-ui, sans-serif;
}

.demo-link {
  display: inline-block;
  padding: 10px 18px;
  margin: 10px 0;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
}

/* LINK */
.demo-link:link {
  background-color: #1e90ff;
  color: white;
}

/* VISITED */
.demo-link:visited {
  background-color: #6a5acd;
  color: white;
}

/* HOVER */
.demo-link:hover {
  background-color: #ff9800;
  color: black;
}

/* ACTIVE */
.demo-link:active {
  background-color: #e53935;
  color: white;
}

/* STATE LABEL */
.state-label {
  margin-top: 12px;
  font-size: 0.9rem;
}

.state-label span {
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
}

/* STATE COLORS */
.link { color: #1e90ff; }
.hover { color: #ff9800; }
.active { color: #e53935; }
.visited { color: #6a5acd; }
</style>

<template>
  <div class="container">

    <div class="card">
      <label>Endpoint name</label>
      <input v-model="endpoint" placeholder="profile" />

      <label>Path parameter (username)</label>
      <input v-model="username" placeholder="alice" />

      <label>Extra parameter (age)</label>
      <input v-model="age" placeholder="23" />

      <button @click="generateUrl">
        Generate URL
      </button>
    </div>

    <div v-if="url" class="result">
      <strong>Generated URL</strong>
      <code>{{ url }}</code>

      <p class="hint">
        Path parameters go inside the URL.<br />
        Extra values become query parameters.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UrlForVisualizer",
  data() {
    return {
      endpoint: "profile",
      username: "",
      age: "",
      url: ""
    }
  },
  methods: {
    generateUrl() {
      let base = `/user/${this.username || '<username>'}`
      if (this.age) {
        base += `?age=${this.age}`
      }
      this.url = base
    }
  }
}
</script>

<style scoped>
.container {
  --bg: var(--vp-c-bg);
  --text: var(--vp-c-text-1);
  --border: var(--vp-c-divider);
  --brand: var(--vp-c-brand);
  --soft: var(--vp-c-bg-soft);

  background: var(--bg);
  color: var(--text);
  padding: 24px;
  font-family: system-ui, sans-serif;
}

.card {
  display: grid;
  gap: 10px;
  max-width: 360px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--soft);
}

input {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
}

button {
  margin-top: 8px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--soft);
  cursor: pointer;
}

button:hover {
  border-color: var(--brand);
}

.result {
  margin-top: 20px;
  padding: 14px;
  border-left: 4px solid var(--brand);
  background: var(--soft);
}

code {
  display: block;
  margin-top: 6px;
  padding: 6px;
  background: var(--bg);
  border-radius: 4px;
}

.hint {
  margin-top: 10px;
  font-size: 0.9em;
  opacity: 0.8;
}
</style>

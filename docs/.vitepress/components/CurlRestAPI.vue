<template>
  <div class="curl-box">
    <h2 class="title">📤 cURL – JSON API Simulator</h2>

    <!-- URL -->
    <div class="row">
      <label>URL:</label>
      <input v-model="url" />
    </div>

    <!-- Method -->
    <div class="row">
      <label>HTTP Method:</label>
      <select v-model="method">
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
      </select>
    </div>

  <!-- Flags -->
  <div class="flags">
    <label>
      <input type="checkbox" v-model="flags.verbose" />
      -v
    </label>

    <label>
      <input type="checkbox" v-model="flags.include" />
      -i
    </label>

    <label>
      <input type="checkbox" v-model="flags.header" />
      -H
    </label>
  </div>

  <!-- Help text -->
  <div class="flag-help">
    <p v-if="flags.verbose">
      🔍 <strong>-v (Verbose)</strong>: Shows detailed request & response info
      including headers and connection details.
    </p>

    <p v-if="flags.include">
      📥 <strong>-i (Include)</strong>: Includes HTTP response headers in the output.
    </p>

    <p v-if="flags.header">
      🧾 <strong>-H</strong>: Adds custom HTTP headers (e.g., Content-Type).
    </p>
  </div>

    <!-- JSON Body -->
    <div class="row" v-if="method !== 'GET'">
      <label>Request Body (JSON):</label>
      <textarea v-model="body"></textarea>
    </div>

    <button @click="simulate">▶ Run curl</button>

    <h3>Generated Command</h3>
    <pre class="cmd">{{ command }}</pre>

    <h3>Simulated Response</h3>
    <pre class="output">
<span class="status">HTTP/1.1 {{ status }}</span>
<span class="headers" v-if="flags.include">
Content-Type: application/json
Server: Flask
</span>
<span class="body">{{ response }}</span>
    </pre>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CurlRestAPI',
})

import { ref, watch } from 'vue'

const url = ref('http://localhost:5000/api/course')
const method = ref('GET')
const body = ref('{}')
const command = ref('')
const response = ref('')
const status = ref('200 OK')

const flags = ref({
  verbose: false,
  include: false,
  header: true
})

// Reset body when switching to POST/PUT
watch(method, (m) => {
  if (m !== 'GET') body.value = '{}'
})

function simulate() {
  let cmd = 'curl'

  if (flags.value.verbose) cmd += ' -v'
  if (flags.value.include) cmd += ' -i'
  if (flags.value.header) cmd += ' -H "Content-Type: application/json"'

  cmd += ` -X ${method.value}`

  if (method.value !== 'GET') {
    cmd += ` -d '${body.value}'`
  }

  cmd += ` ${url.value}`
  command.value = cmd

  // Simulated behavior
  if (method.value === 'GET') {
    status.value = '200 OK'
    response.value = `{
  "course_id": 1,
  "course_code": "CS2001",
  "course_name": "DBMS"
}

✔ Data fetched from server`
  }

  if (method.value === 'POST') {
    status.value = '201 Created'
    response.value = `${body.value}

✔ Data received by server
✔ New resource created`
  }

  if (method.value === 'PUT') {
    status.value = '200 OK'
    response.value = `${body.value}

✔ Existing resource updated`
  }
}
</script>

<style scoped>
.curl-box {
  background:
    linear-gradient(
      135deg,
      var(--vp-c-bg-soft),
      var(--vp-c-bg)
    );
  border-radius: 14px;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.12),
    inset 0 0 0 1px var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

/* Title */
.title {
  text-align: center;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.75rem;
}

/* Rows */
.row {
  margin-bottom: 0.75rem;
}

label {
  font-weight: 500;
}

/* Inputs */
input,
select,
textarea {
  width: 100%;
  padding: 0.55rem 0.65rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-2);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

textarea {
  font-family: monospace;
}

/* Flags */
.flags {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
}

/* Help box */
.flag-help {
  background: var(--vp-c-brand-soft);
  border-left: 4px solid var(--vp-c-brand-2);
  border-radius: 10px;
  padding: 0.6rem 0.8rem;
  font-size: 0.85rem;
}

/* Button */
button {
  margin-top: 0.75rem;
  padding: 0.55rem 1.5rem;
  border-radius: 999px;
  border: none;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  background: var(--vp-button-brand-hover-bg);
}

/* Output */
pre {
  margin-top: 0.75rem;
  padding: 0.9rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  font-family: monospace;
}

/* Highlight */
.headers { color: var(--vp-c-brand-1); }
.status { font-weight: 600; }
.cmd { background: var(--vp-c-brand-soft); }

</style>

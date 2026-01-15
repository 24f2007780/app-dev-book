<template>
  <div class="net-demo">
    <h2>🌐 Network Latency Visualizer</h2>

    <div class="input">
      <label>
        Total distance (km):
        <input type="number" v-model.number="totalDistanceKm" min="1" />
      </label>
    </div>

    <div class="network">
      <div class="node client">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png"
          alt="Client"
        />
      </div>

      <div class="link cable">
        <div class="packet"></div>
      </div>

      <div class="node router">Router</div>

      <div class="link air">
        <div class="packet fast"></div>
      </div>

      <div class="node server">
        <img
          src="https://www.freeiconspng.com/uploads/computer-server-icon-png-19.png"
          alt="Server"
        />
      </div>
    </div>

    <button @click="simulate">▶ Send Request</button>

    <pre class="result">{{ output }}</pre>
  </div>
</template>

<script setup>
  defineOptions({
  name: 'LatencyVisualizer',
})


import { ref } from 'vue'

const totalDistanceKm = ref(18000)
const output = ref('Click "Send Request" to calculate RTT')

// convert number to scientific notation (×10^n)
function sci(n) {
  if (n === 0) return '0'
  else{
    const exp = Math.floor(Math.log10(Math.abs(n)))
  
  const mantissa = (n / Math.pow(10, exp)).toFixed(2)
  return `${mantissa} × 10^${exp}`
  }
}

function simulate() {
  const totalDistanceM = totalDistanceKm.value * 1000
  const halfDistanceM = totalDistanceM / 2

  const cableSpeed = 1.5e8
  const airSpeed = 3e8

  const cableTimeSec = halfDistanceM / cableSpeed
  const airTimeSec = halfDistanceM / airSpeed

  const oneWaySec = cableTimeSec + airTimeSec
  const rttMs = oneWaySec * 2 * 1000

  output.value = `
GIVEN:
Total distance = ${totalDistanceKm.value} km
Router placed exactly at midpoint

STEP 1: Distance split
Client → Router = ${totalDistanceKm.value / 2} km
Router → Server = ${totalDistanceKm.value / 2} km

STEP 2: Time = Distance / Speed

Cable (1.5 × 10⁸ m/s):
t₁ = (${sci(halfDistanceM)}) / (1.5 × 10⁸)
   = ${cableTimeSec.toFixed(2)} s = ${(cableTimeSec*1000).toFixed(2)} ms

Air (3 × 10⁸ m/s):
t₂ = (${sci(halfDistanceM)}) / (3 × 10⁸)
   = ${airTimeSec.toFixed(2)} s = ${(airTimeSec*1000).toFixed(2)} s

STEP 3: Round-trip latency
RTT = 2 × ${(oneWaySec * 1000).toFixed(2)} ms
    = ${rttMs.toFixed(0)} ms

FINAL ANSWER:
✔ Round-trip latency ≈ ${rttMs.toFixed(0)} ms
`
}
</script>

<style scoped>
/* =========================================================
   LatencyVisualizer – Diagram-focused contrasting surface
   ========================================================= */

.net-demo {
  background:
    radial-gradient(
      circle at top,
      var(--vp-c-bg-soft),
      var(--vp-c-bg)
    );
  border-radius: 16px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.net-demo h2 {
  text-align: center;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.75rem;
}

/* Input */
.input {
  margin: 0.75rem 0;
}

.input input {
  margin-left: 0.5rem;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.input input:focus {
  outline: none;
  border-color: var(--vp-c-brand-2);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

/* Network */
.network {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

/* Nodes */
.node {
  width: 92px;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-weight: 600;
  text-align: center;
}

.client { background: var(--vp-c-brand-soft); }
.router { background: var(--vp-c-warning-soft); }
.server { background: var(--vp-c-tip-soft); }

/* Links */
.link {
  flex: 1;
  height: 6px;
  margin: 0 0.4rem;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.cable { background: var(--vp-c-brand-3); }
.air { background: var(--vp-c-tip-3); }

/* Packet */
.packet {
  position: absolute;
  top: -4px;
  width: 12px;
  height: 12px;
  background: var(--vp-c-danger-3);
  border-radius: 50%;
  animation: move 2s linear infinite;
}

.fast { animation-duration: 1s; }

@keyframes move {
  from { left: -10px; }
  to { left: 100%; }
}

/* Button */
button {
  margin-top: 0.5rem;
  padding: 0.55rem 1.5rem;
  border-radius: 999px;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: none;
  font-weight: 600;
}

/* Output */
.result {
  margin-top: 0.75rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 0.9rem;
  font-family: monospace;
}

</style>

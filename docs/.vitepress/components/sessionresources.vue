<script setup>
import { computed } from 'vue'

defineOptions({ name: 'SessionResources' })

/* -----------------------------
   Props
------------------------------ */
const props = defineProps({
  week: {
    type: Number,
    required: true   // 👈 make it explicit and safe
  }
})

/* -----------------------------
   Data
------------------------------ */
const bestRecordedSessions = {
  week1: [{ label: 'Week 1', link: 'https://www.youtube.com/watch?v=7yl2RBL-dBY' }],

  week2: [
    { label: 'AQ/PQ', link: 'https://www.youtube.com/watch?v=FPf8fIh7UqE' },
    { label: 'Open Session', link: 'https://www.youtube.com/watch?v=9lymS1vedw8' },
    { label: 'Extra Session', link: 'https://www.youtube.com/watch?v=Zylkdw7X6Wo' }
  ],

  week3: [
    { label: 'AQ/PQ', link: 'https://www.youtube.com/watch?v=T8QiBFNJN2I' },
    { label: 'Open Session', link: 'https://www.youtube.com/watch?v=KjGeY6hpJQI' }
  ],

  week4: [
    { label: 'AQ/PQ', link: 'https://www.youtube.com/watch?v=l0WiH1t1Sag' },
    { label: 'Open Session', link: 'https://www.youtube.com/watch?v=hn0wTLzD05E' }
  ],

  week5: [
    { label: 'AQ/PQ', link: 'https://www.youtube.com/watch?v=2hwwRwy6pTg' },
    { label: 'Open Session 1', link: 'https://www.youtube.com/watch?v=QqpN6JDjixQ' },
    { label: 'Open Session 2', link: 'https://www.youtube.com/watch?v=pO1lsAKJqI4' }
  ],

  week6: [{ label: 'AQ/PQ', link: 'https://www.youtube.com/watch?v=eKBpidQVvHs' }],

  week7: [
    { label: 'AQ/PQ', link: 'https://www.youtube.com/watch?v=bmob7OK2EbU' },
    { label: 'Open Session', link: 'https://www.youtube.com/watch?v=zcmIsXkp99E' }
  ],

  week8: [
    { label: 'AQ/PQ', link: 'https://www.youtube.com/live/DuCPYXacGj4' },
    { label: 'Open Session', link: 'https://www.youtube.com/live/GBxqXpMvkxs' }
  ],

  week9: [
    { label: 'AQ/PQ', link: 'https://www.youtube.com/live/mhghFez0TbY' },
    { label: 'Open Session', link: 'https://www.youtube.com/live/_VsNgoIyqbw' }
  ],

  week10: [
    { label: 'Activity / Practice', link: 'https://www.youtube.com/watch?v=3pFJEUWi_MM' },
    { label: 'AQ/PQ', link: 'https://www.youtube.com/watch?v=PhU7cb-nawg' },
    { label: 'Summary', link: 'https://www.youtube.com/watch?v=4fP0ZEkEpos' }
  ],

  week11: [{ label: 'Week 11', link: 'https://www.youtube.com/watch?v=fZYDhRz93Go' }],

  week12: [
    { label: 'AQ/PQ', link: 'https://www.youtube.com/live/YzDHlrFbgPk' },
    { label: 'Summary', link: 'https://www.youtube.com/live/BG6hmMKrYrc' }
  ]
}

const liveSessions = {
  ta: {
    label: 'TA sessions (Tue, Thu, Sat · 6–8 PM)',
    link: 'https://meet.google.com/owz-duij-iok'
  },
  instructor: [
    { label: 'Wed · 6–8 PM', link: 'https://meet.google.com/dyv-cprt-nmd' },
    { label: 'Sat · 11 AM – 1 PM', link: 'https://meet.google.com/sxd-oukd-ids' }
  ]
}

/* -----------------------------
   Derived State
------------------------------ */
const weekKey = computed(() => `week${props.week}`)

const best = computed(() => {
  return bestRecordedSessions[weekKey.value] || []
})
</script>
<template>
  <div class="sessions-inline">
    <strong class="heading">📺 Session Resources</strong>
    <div class="line">
      <span class="label">Instructor sessions:</span>
      <a
        v-for="(s, i) in liveSessions.instructor"
        :key="i"
        :href="s.link"
        target="_blank"
      >
        {{ s.label }}
      </a>
    </div>
    
    <div class="line">
      <span class="label">TA sessions:</span>
      <a :href="liveSessions.ta.link" target="_blank">
        Tue, Thu, Sat · 6–8 PM
      </a>
    </div>
    <div v-if="best.length" class="line">
      <span class="label">Best recorded session:</span>
      <a
        v-for="(s, i) in best"
        :key="i"
        :href="s.link"
        target="_blank"
      >
        {{ s.label }}
      </a>
    </div>
  </div>
</template>


<style scoped>
.sessions-inline {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 1rem 0;

  /* visual polish */
  padding: 0.75rem 1rem;
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.heading {
  display: block;
  color: var(--vp-c-text-1);
  margin-bottom: 0.35rem;
  font-weight: 600;
}

.line {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0.2rem 0;
}

.label {
  color: var(--vp-c-text-3);
}

a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  padding: 0 0.15rem;
}

a:hover {
  text-decoration: underline;
}
</style>

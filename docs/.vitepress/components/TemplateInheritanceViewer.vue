<template>
  <div class="container">
    <h2 class="heading">Template Inheritance – Final Rendered Page</h2>

    <div class="stage">
      <!-- CHILD PAGE -->
      <div class="child">
        <strong>home.html</strong>

        <transition name="slide-lr">
          <div v-if="show" class="child-block title-block">
            {% block title %}Home Page{% endblock %}
          </div>
        </transition>

        <transition name="slide-lr">
          <div v-if="show" class="child-block content-block">
            {% block content %}
            <br />
            &lt;h2&gt;Welcome to {{ title }}'s Home Page!&lt;/h2&gt;
            <br />
            &lt;p&gt;This is the content of the home page.&lt;/p&gt;
            <br />
            {% endblock %}
          </div>
        </transition>
      </div>

      <!-- ARROW -->
      <div class="arrow">➜</div>

      <!-- BASE PAGE -->
      <div class="base">
        <strong>base.html</strong>

        <div class="section header">
          &lt;header&gt;
          <br />
          &lt;h1&gt;My Website Header&lt;/h1&gt;
          <br />
          &lt;/header&gt;
        </div>

        <div class="render-area">
          <transition name="fade">
            <h3 v-if="show" class="render-title">
              Home Page
            </h3>
          </transition>

          <transition name="fade">
            <div v-if="show" class="render-content">
                <h2>Welcome to My Website's Home Page!</h2>
                <p>This is the content of the home page.</p>
            </div>
          </transition>
        </div>

        <div class="section footer">
          &lt;footer&gt;
          <br />
          &lt;p&gt;My Website Footer&lt;/p&gt;
          <br />
          &lt;/footer&gt;
        </div>
      </div>
    </div>

    <!-- CONTROL -->
    <div class="controls">
      <button @click="show = !show">
        {{ show ? 'Reset View' : 'Show Inheritance' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TemplateInheritanceViewer",
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
/* 🌗 VitePress-aware styling */
.container {
  --bg: var(--vp-c-bg);
  --text: var(--vp-c-text-1);
  --border: var(--vp-c-divider);
  --brand: var(--vp-c-brand);
  --soft: var(--vp-c-bg-soft);

  background: var(--bg);
  color: var(--text);
  padding: 28px;
  font-family: system-ui, sans-serif;
}

.heading {
  margin-bottom: 24px;
}

/* Layout */
.stage {
  display: flex;
  align-items: center;
  gap: 28px;
}

/* Child page */
.child {
  width: 320px;
  padding: 16px;
  border: 2px dashed var(--border);
  border-radius: 8px;
  background: var(--soft);
}

.child-block {
  margin-top: 12px;
  padding: 10px;
  font-size: 0.85em;
  border-radius: 6px;
  background: rgba(100, 100, 100, 0.15);
}

.title-block {
  background: var(--brand);
  color: white;
}

.content-block {
  line-height: 1.4;
}

/* Arrow */
.arrow {
  font-size: 36px;
  opacity: 0.6;
}

/* Base page */
.base {
  width: 380px;
  padding: 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  background: var(--soft);
}

.section {
  padding: 8px;
  margin: 8px 0;
  background: var(--bg);
  border: 1px dashed var(--border);
  border-radius: 4px;
  font-size: 0.9em;
}

.render-area {
  min-height: 140px;
  padding: 12px;
  margin: 12px 0;
  border: 2px dashed var(--brand);
  border-radius: 6px;
}

.render-title {
  margin: 0;
}

.render-content {
  margin-top: 6px;
}

/* Button */
.controls {
  margin-top: 28px;
}

.controls button {
  padding: 8px 18px;
  background: var(--soft);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
}

.controls button:hover {
  border-color: var(--brand);
}

/* 🎬 Animations: Left → Right */
.slide-lr-enter-active {
  transition: all 0.8s ease;
}

.slide-lr-enter-from {
  opacity: 0;
  transform: translateX(-160px);
}

.slide-lr-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>

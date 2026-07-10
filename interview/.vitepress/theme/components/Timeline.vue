<script setup lang="ts">
defineProps<{
  steps: Array<{ label: string; title: string; desc: string; tag?: string }>
  variant?: 'day' | 'week'
}>()
</script>

<template>
  <div class="tl-wrap">
    <div
      v-for="(step, i) in steps"
      :key="i"
      class="tl-row"
    >
      <!-- 时间轴左侧 -->
      <div class="tl-spine">
        <div class="tl-dot" />
        <div v-if="i < steps.length - 1" class="tl-line" />
      </div>

      <!-- 右侧内容 -->
      <div class="tl-content">
        <div class="tl-meta">
          <span class="tl-label">{{ step.label }}</span>
          <span v-if="step.tag" class="tl-tag">{{ step.tag }}</span>
        </div>
        <div class="tl-title">{{ step.title }}</div>
        <p class="tl-desc">{{ step.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tl-wrap {
  margin: 2em 0;
}

.tl-row {
  display: flex;
  gap: 1.25em;
  position: relative;
}

/* ── 时间轴竖线 ── */
.tl-spine {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 20px;
}

.tl-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--hqq-accent);
  border: 2px solid var(--hqq-paper);
  box-shadow: 0 0 0 1.5px var(--hqq-accent);
  flex-shrink: 0;
  margin-top: 4px;
  z-index: 1;
}

.tl-line {
  width: 1px;
  flex: 1;
  background: var(--hqq-rule);
  margin: 4px 0;
  min-height: 20px;
}

/* ── 内容区 ── */
.tl-content {
  padding-bottom: 1.6em;
  flex: 1;
  min-width: 0;
}

.tl-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.2em;
}

.tl-label {
  font-family: var(--hqq-font-mono);
  font-size: 11.5px;
  letter-spacing: 0.08em;
  color: var(--hqq-accent);
  font-weight: 600;
  text-transform: uppercase;
}

.tl-tag {
  font-family: var(--hqq-font-sans);
  font-size: 11px;
  font-weight: 500;
  padding: 0.1em 0.55em;
  border-radius: 4px;
  background: rgba(74, 124, 111, 0.12);
  color: var(--hqq-green);
}

.tl-title {
  font-family: var(--hqq-font-serif);
  font-size: 1em;
  font-weight: 600;
  color: var(--hqq-ink);
  line-height: 1.35;
  margin-bottom: 0.35em;
}

.tl-desc {
  font-family: var(--hqq-font-sans);
  font-size: 13.5px;
  color: var(--hqq-ink-muted);
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 480px) {
  .tl-label {
    font-size: 10.5px;
  }
}
</style>

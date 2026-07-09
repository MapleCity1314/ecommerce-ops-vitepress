<script setup lang="ts">
const steps = [
  {
    num: '01',
    phase: '第一步',
    title: '爆款素材资产库',
    subtitle: '第一周 · 自有私店',
    desc: '把赢过的素材入库、打标、排名。先在自有私店把取数→入库→回写→日报这条链跑通，做样板。',
    icon: '◈',
  },
  {
    num: '02',
    phase: '第二步',
    title: '去人肉 + 推理层',
    subtitle: '第 2–3 周',
    desc: '用浏览器插件自动取数，真正的归因 Agent 介入（聚类客服原话、出复盘草稿），手感判断开始沉淀成规则。',
    icon: '◉',
  },
  {
    num: '03',
    phase: '第三步',
    title: '放大给代理网络',
    subtitle: '有了样板再动',
    desc: '样板跑通、成绩单在手，把这套军火库推给代理店。一次整理，整个代理网络受益，直接放大出货。',
    icon: '◎',
  },
]
</script>

<template>
  <div class="tsf-wrap">
    <div class="tsf-track">
      <!-- 连接线 -->
      <div class="tsf-connector" aria-hidden="true" />

      <div
        v-for="(step, i) in steps"
        :key="i"
        class="tsf-card"
      >
        <div class="tsf-num">{{ step.num }}</div>
        <div class="tsf-icon">{{ step.icon }}</div>
        <div class="tsf-body">
          <div class="tsf-phase">{{ step.phase }}</div>
          <div class="tsf-title">{{ step.title }}</div>
          <div class="tsf-subtitle">{{ step.subtitle }}</div>
          <p class="tsf-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>

    <p class="tsf-axiom">
      代理店不是发动机，是放大器。<br>
      发动机是「库 + 自有私店样板」，这台发动机周一就能点火。
    </p>
  </div>
</template>

<style scoped>
.tsf-wrap {
  margin: 2.5em 0;
}

.tsf-track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
}

/* 横贯连线 */
.tsf-connector {
  position: absolute;
  top: 36px;
  left: calc(33.333% - 24px);
  right: calc(33.333% - 24px);
  height: 1px;
  background: linear-gradient(
    to right,
    var(--hqq-rule) 0%,
    var(--hqq-accent) 50%,
    var(--hqq-rule) 100%
  );
  z-index: 0;
}

.tsf-card {
  position: relative;
  z-index: 1;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--hqq-rule);
  border-radius: 8px;
  padding: 1.4em 1.2em 1.2em;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.tsf-card:hover {
  border-color: var(--hqq-accent);
  box-shadow: 0 4px 20px var(--hqq-shadow);
}

.tsf-num {
  font-family: var(--hqq-font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--hqq-ink-faint);
  margin-bottom: 0.2em;
}

.tsf-icon {
  font-size: 1.5em;
  color: var(--hqq-accent);
  line-height: 1;
  margin-bottom: 0.4em;
}

.tsf-phase {
  font-family: var(--hqq-font-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--hqq-accent);
}

.tsf-title {
  font-family: var(--hqq-font-serif);
  font-size: 1.05em;
  font-weight: 600;
  color: var(--hqq-ink);
  margin: 0.15em 0 0.1em;
  line-height: 1.3;
}

.tsf-subtitle {
  font-family: var(--hqq-font-sans);
  font-size: 12px;
  color: var(--hqq-ink-faint);
  margin-bottom: 0.5em;
}

.tsf-desc {
  font-family: var(--hqq-font-sans);
  font-size: 13.5px;
  color: var(--hqq-ink-muted);
  line-height: 1.65;
  margin: 0;
}

.tsf-axiom {
  margin-top: 1.4em;
  text-align: center;
  font-family: var(--hqq-font-serif);
  font-size: 0.92em;
  font-style: italic;
  color: var(--hqq-ink-muted);
  border-top: 1px solid var(--hqq-rule);
  padding-top: 1em;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .tsf-track {
    grid-template-columns: 1fr;
  }
  .tsf-connector {
    display: none;
  }
}
</style>

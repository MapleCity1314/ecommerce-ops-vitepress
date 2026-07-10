<script setup lang="ts">
const scriptCases = [
  { scene: '字段映射', reason: '映射关系固定，一张表定义一次，脚本机械套用' },
  { scene: '去重、入库、增删改查', reason: '数据库基本功，要的是「永远不出错」，不是聪明' },
  { scene: '实验编号生成 / 命名合规校验', reason: '规则可穷举，脚本又快又稳' },
  { scene: 'Excel 清洗回写', reason: '字段清洗是确定逻辑' },
  { scene: '异常报警（CTR 高但 3s 留存低）', reason: '阈值判断，规则就能触发' },
]

const agentCases = [
  { scene: '客服原话 / 竞品评论聚类', reason: '输入非结构化，靠模型读懂语义再归类' },
  { scene: '素材候选生成', reason: '封面/钩子/详情页候选，规则写不出一条好文案' },
  { scene: '复盘归因草稿', reason: '多因素、要解释、要下判断，规则只能报警做不了归因' },
]
</script>

<template>
  <div class="dr-wrap">
    <!-- 判断入口 -->
    <div class="dr-question">
      <span class="dr-q-label">判断铁律</span>
      <p class="dr-q-text">这件事的逻辑，能否用规则明确写出来？</p>
    </div>

    <!-- 两个分支 -->
    <div class="dr-branches">
      <!-- 能写 → 脚本 -->
      <div class="dr-branch dr-branch--script">
        <div class="dr-branch-header">
          <span class="dr-arrow">能写出来</span>
          <span class="dr-verdict">→ 脚本</span>
        </div>
        <p class="dr-branch-why">确定、便宜、不会错、出了问题一眼能定位</p>
        <div class="dr-cases">
          <div v-for="(c, i) in scriptCases" :key="i" class="dr-case">
            <div class="dr-case-scene">{{ c.scene }}</div>
            <div class="dr-case-reason">{{ c.reason }}</div>
          </div>
        </div>
      </div>

      <!-- 写不出来 → Agent -->
      <div class="dr-branch dr-branch--agent">
        <div class="dr-branch-header">
          <span class="dr-arrow">写不出来（输入是人话/图片/杂乱信息）</span>
          <span class="dr-verdict">→ Agent</span>
        </div>
        <p class="dr-branch-why">少数但价值高：依赖语义理解，规则覆盖不了</p>
        <div class="dr-cases">
          <div v-for="(c, i) in agentCases" :key="i" class="dr-case">
            <div class="dr-case-scene">{{ c.scene }}</div>
            <div class="dr-case-reason">{{ c.reason }}</div>
          </div>
        </div>
      </div>
    </div>

    <p class="dr-note">
      注意：异常<strong>检测</strong>（阈值报警）是脚本；解释异常<strong>为什么</strong>发生，才是 Agent。报警和归因，一个脚本一个 Agent，不要混用。
    </p>
  </div>
</template>

<style scoped>
.dr-wrap {
  margin: 2em 0;
}

/* ── 判断入口 ── */
.dr-question {
  border: 1.5px solid var(--hqq-accent);
  border-radius: 8px;
  padding: 0.8em 1.2em;
  margin-bottom: 1em;
  background: rgba(204, 120, 92, 0.04);
  display: flex;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
}

.dr-q-label {
  font-family: var(--hqq-font-sans);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hqq-accent);
  flex-shrink: 0;
}

.dr-q-text {
  font-family: var(--hqq-font-serif);
  font-size: 1em;
  font-weight: 600;
  color: var(--hqq-ink);
  margin: 0;
}

/* ── 两分支 ── */
.dr-branches {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 1em;
}

.dr-branch {
  border: 1px solid var(--hqq-rule);
  border-radius: 8px;
  overflow: hidden;
}

.dr-branch--script .dr-branch-header {
  background: rgba(74, 124, 111, 0.08);
  border-bottom: 1px solid rgba(74, 124, 111, 0.2);
}

.dr-branch--agent .dr-branch-header {
  background: rgba(184, 125, 58, 0.08);
  border-bottom: 1px solid rgba(184, 125, 58, 0.2);
}

.dr-branch-header {
  padding: 0.6em 1em;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.dr-arrow {
  font-family: var(--hqq-font-sans);
  font-size: 12px;
  color: var(--hqq-ink-muted);
}

.dr-verdict {
  font-family: var(--hqq-font-sans);
  font-size: 13.5px;
  font-weight: 700;
}

.dr-branch--script .dr-verdict { color: var(--hqq-green); }
.dr-branch--agent .dr-verdict  { color: var(--hqq-amber); }

.dr-branch-why {
  font-family: var(--hqq-font-sans);
  font-size: 12.5px;
  color: var(--hqq-ink-muted);
  margin: 0;
  padding: 0.5em 1em 0;
  font-style: italic;
}

/* ── 场景列表 ── */
.dr-cases {
  padding: 0.4em 0 0.5em;
}

.dr-case {
  padding: 0.4em 1em;
  border-bottom: 1px solid var(--hqq-rule);
}

.dr-case:last-child {
  border-bottom: none;
}

.dr-case-scene {
  font-family: var(--hqq-font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--hqq-ink);
  margin-bottom: 2px;
}

.dr-case-reason {
  font-family: var(--hqq-font-sans);
  font-size: 12px;
  color: var(--hqq-ink-faint);
  line-height: 1.5;
}

/* ── 底部注释 ── */
.dr-note {
  font-family: var(--hqq-font-sans);
  font-size: 13px;
  color: var(--hqq-ink-muted);
  border-top: 1px solid var(--hqq-rule);
  padding-top: 0.75em;
  margin: 0;
  line-height: 1.6;
}

.dr-note strong {
  color: var(--hqq-ink);
}

@media (max-width: 600px) {
  .dr-branches {
    grid-template-columns: 1fr;
  }
}
</style>

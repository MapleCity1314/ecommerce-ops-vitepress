<script setup lang="ts">
const sides = [
  {
    key: 'A',
    label: 'A 手',
    mode: '分销链接（Push）',
    color: 'a',
    items: [
      '分发臂 = 主动推：库里出"本周该发什么"视图，代理进来就看到',
      '数据回收顺理成章：记一下"发了/没发"，填一个下拉即可',
      '增长故事最硬：把赢过的爆款配方铺满代理网，从几个人赢变成全网一起赢',
    ],
    cond: '代理挂总部链接分销，用总部素材是本分',
  },
  {
    key: 'B',
    label: 'B 手',
    mode: '各自开店（Pull）',
    color: 'b',
    items: [
      '库对代理的身份变成"素材灵感库 / 参考货架"，自愿取用',
      '代理来取，是因为"好用"（省选题、降翻车率），不是总部要求',
      '数据回收靠激励：回传效果的代理优先拿爆款配方、进"标杆代理"名单',
      '强录入砍掉，换成"取用即埋点"',
    ],
    cond: '代理有自己的账号和内容，不能硬发素材',
  },
]
</script>

<template>
  <div class="pp-wrap">
    <!-- 共同地基 -->
    <div class="pp-base">
      <span class="pp-base-label">共同地基（两种情况都不变）</span>
      <span class="pp-base-text">爆款素材资产库 — 打标签、排名、可检索</span>
    </div>

    <!-- 箭头 -->
    <div class="pp-split" aria-hidden="true">
      <div class="pp-split-line" />
      <span class="pp-split-text">分叉点：分发臂姿态</span>
      <div class="pp-split-line" />
    </div>

    <!-- 两侧 -->
    <div class="pp-sides">
      <div
        v-for="side in sides"
        :key="side.key"
        :class="['pp-side', `pp-side--${side.color}`]"
      >
        <div class="pp-side-header">
          <span class="pp-side-label">{{ side.label }}</span>
          <span class="pp-side-mode">{{ side.mode }}</span>
        </div>
        <div class="pp-cond">适用前提：{{ side.cond }}</div>
        <ul class="pp-list">
          <li v-for="(item, i) in side.items" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- 押注结论 -->
    <div class="pp-bet">
      <span class="pp-bet-label">押注方向</span>
      <p class="pp-bet-text">
        默认按 B 手的「货架」姿态搭，同时保留 A 手的主动推能力。一套库，两边都不塌。入职第一天核实代理模式后再调整分发臂。
      </p>
    </div>
  </div>
</template>

<style scoped>
.pp-wrap {
  margin: 2em 0;
}

/* ── 共同地基 ── */
.pp-base {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--hqq-rule);
  border-radius: 8px;
  padding: 0.7em 1.1em;
  margin-bottom: 10px;
}

.pp-base-label {
  font-family: var(--hqq-font-sans);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hqq-ink-faint);
}

.pp-base-text {
  font-family: var(--hqq-font-sans);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--hqq-ink);
}

/* ── 分叉提示 ── */
.pp-split {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.pp-split-line {
  flex: 1;
  height: 1px;
  background: var(--hqq-rule);
}

.pp-split-text {
  font-family: var(--hqq-font-sans);
  font-size: 11px;
  font-weight: 500;
  color: var(--hqq-ink-faint);
  letter-spacing: 0.04em;
  white-space: nowrap;
}

/* ── 两侧对比 ── */
.pp-sides {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
}

.pp-side {
  border: 1px solid var(--hqq-rule);
  border-radius: 8px;
  overflow: hidden;
}

.pp-side--a .pp-side-header { background: rgba(74, 124, 111, 0.08); border-bottom: 1px solid rgba(74,124,111,0.2); }
.pp-side--b .pp-side-header { background: rgba(184, 125, 58, 0.08); border-bottom: 1px solid rgba(184,125,58,0.2); }

.pp-side-header {
  padding: 0.6em 1em;
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}

.pp-side-label {
  font-family: var(--hqq-font-sans);
  font-size: 14px;
  font-weight: 700;
}

.pp-side--a .pp-side-label { color: var(--hqq-green); }
.pp-side--b .pp-side-label { color: var(--hqq-amber); }

.pp-side-mode {
  font-family: var(--hqq-font-sans);
  font-size: 12px;
  color: var(--hqq-ink-muted);
}

.pp-cond {
  font-family: var(--hqq-font-sans);
  font-size: 12px;
  font-style: italic;
  color: var(--hqq-ink-faint);
  padding: 0.4em 1em 0;
}

.pp-list {
  padding: 0.4em 1em 0.8em 2em;
  margin: 0;
}

.pp-list li {
  font-family: var(--hqq-font-sans);
  font-size: 13px;
  color: var(--hqq-ink-muted);
  line-height: 1.6;
  margin-bottom: 0.3em;
}

/* ── 押注结论 ── */
.pp-bet {
  border: 1px solid var(--hqq-accent);
  border-radius: 8px;
  padding: 0.75em 1.1em;
  background: rgba(204, 120, 92, 0.04);
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}

.pp-bet-label {
  font-family: var(--hqq-font-sans);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hqq-accent);
  flex-shrink: 0;
}

.pp-bet-text {
  font-family: var(--hqq-font-sans);
  font-size: 13.5px;
  color: var(--hqq-ink);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .pp-sides {
    grid-template-columns: 1fr;
  }
}
</style>

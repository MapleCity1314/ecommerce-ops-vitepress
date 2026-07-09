<script setup lang="ts">
const questions = [
  {
    q: 'Q1',
    title: '第一周工具',
    verdict: '爆款素材资产库，先服务自有私店',
    link: '/q1',
    tag: '选择',
  },
  {
    q: 'Q2',
    title: '最小可执行版本',
    verdict: '1 个 SKU + 20 条素材，闭环跑通',
    link: '/q2',
    tag: '交付',
  },
  {
    q: 'Q3',
    title: '七天交付',
    verdict: '把技术面原型往下接一截，私店闭环演示',
    link: '/q3',
    tag: '排期',
  },
  {
    q: 'Q4',
    title: '后台没 API',
    verdict: '浏览器插件取数 + 飞书 API 入库，素材 ID 当主键',
    link: '/q4',
    tag: '技术',
  },
  {
    q: 'Q5',
    title: '一线不愿填表',
    verdict: '重新设计流程，紧迫感 > 催促，截止+临门一脚',
    link: '/q5',
    tag: '落地',
  },
  {
    q: 'Q6',
    title: '哪些真需要 Agent',
    verdict: '默认脚本，语义模糊才上 Agent，克制比会用值钱',
    link: '/q6',
    tag: '判断',
  },
  {
    q: 'Q7',
    title: '30 天证明价值',
    verdict: '过程指标打包票，结果指标给趋势，不承诺爆款',
    link: '/q7',
    tag: '承诺',
  },
]
</script>

<template>
  <div class="qg-wrap">
    <a
      v-for="item in questions"
      :key="item.q"
      :href="item.link"
      class="qg-card"
    >
      <div class="qg-head">
        <span class="qg-q">{{ item.q }}</span>
        <span class="qg-tag">{{ item.tag }}</span>
      </div>
      <div class="qg-title">{{ item.title }}</div>
      <p class="qg-verdict">{{ item.verdict }}</p>
      <div class="qg-arrow">→</div>
    </a>
  </div>
</template>

<style scoped>
.qg-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin: 2em 0;
}

.qg-card {
  display: block;
  text-decoration: none !important;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--hqq-rule);
  border-radius: 8px;
  padding: 1.2em 1.3em 1em;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
  cursor: pointer;
  position: relative;
}

.qg-card:hover {
  border-color: var(--hqq-accent);
  box-shadow: 0 4px 18px var(--hqq-shadow);
  transform: translateY(-1px);
}

.qg-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
}

.qg-q {
  font-family: var(--hqq-font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--hqq-accent);
}

.qg-tag {
  font-family: var(--hqq-font-sans);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--hqq-ink-faint);
  background: var(--hqq-paper-alt);
  border: 1px solid var(--hqq-rule);
  padding: 0.15em 0.55em;
  border-radius: 100px;
}

.qg-title {
  font-family: var(--hqq-font-serif);
  font-size: 1.02em;
  font-weight: 600;
  color: var(--hqq-ink);
  margin-bottom: 0.45em;
  line-height: 1.3;
}

.qg-verdict {
  font-family: var(--hqq-font-sans);
  font-size: 13px;
  color: var(--hqq-ink-muted);
  line-height: 1.6;
  margin: 0 0 0.8em;
}

.qg-arrow {
  font-family: var(--hqq-font-sans);
  font-size: 14px;
  color: var(--hqq-ink-faint);
  transition: color 0.15s, transform 0.15s;
  display: inline-block;
}

.qg-card:hover .qg-arrow {
  color: var(--hqq-accent);
  transform: translateX(3px);
}
</style>

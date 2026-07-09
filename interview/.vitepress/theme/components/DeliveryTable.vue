<script setup lang="ts">
const rows = [
  {
    metric: '实验编号覆盖率',
    target: '≥ 80%',
    type: 'process',
    cond: '附条件',
    note: '分母 = 进入投放的素材。需"没编号不排期"硬约束，得老板拍板。',
  },
  {
    metric: '数据回写率',
    target: '≥ 90%',
    type: 'process',
    cond: '附条件',
    note: '飞书写入权限审批通过后，脚本自动回写；审批前手动占坑。',
  },
  {
    metric: '复盘假设沉淀',
    target: '10 条',
    type: 'process',
    cond: '打包票',
    note: '10 条带数据支撑的待验假设，标适用条件。不是"10 条铁律"——样本量撑不到那里。',
  },
  {
    metric: '人工耗时下降',
    target: '可量化',
    type: 'process',
    cond: '打包票',
    note: '找素材 / 对口径 / 出日报的时间，前后对比记录，降多少算多少。',
  },
  {
    metric: 'CTR / 3 秒留存 / 加购',
    target: '趋势向好',
    type: 'result',
    cond: '只看趋势',
    note: '受大盘、产品、运气影响，我只给趋势方向，不认单点数字。',
  },
  {
    metric: 'ROI / GMV',
    target: '趋势向好',
    type: 'result',
    cond: '只看趋势',
    note: '团队共同贡献，我不抢这个功。30 天样本量也不够跑统计显著。',
  },
]
</script>

<template>
  <div class="dt-wrap">
    <div class="dt-legend">
      <span class="dt-badge dt-badge--process">过程指标 — 可控，打包票</span>
      <span class="dt-badge dt-badge--result">结果指标 — 受外因，只给趋势</span>
    </div>

    <div class="dt-table-wrap">
      <table class="dt-table">
        <thead>
          <tr>
            <th>指标</th>
            <th>目标</th>
            <th>性质</th>
            <th>承诺方式</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in rows"
            :key="i"
            :class="['dt-row', `dt-row--${row.type}`]"
          >
            <td class="dt-metric">{{ row.metric }}</td>
            <td class="dt-target">{{ row.target }}</td>
            <td>
              <span :class="['dt-badge-sm', `dt-badge-sm--${row.type}`]">
                {{ row.type === 'process' ? '过程' : '结果' }}
              </span>
            </td>
            <td class="dt-cond">{{ row.cond }}</td>
            <td class="dt-note">{{ row.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.dt-wrap {
  margin: 2em 0;
}

.dt-legend {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 1em;
}

.dt-badge {
  font-family: var(--hqq-font-sans);
  font-size: 12px;
  font-weight: 500;
  padding: 0.3em 0.9em;
  border-radius: 100px;
  border: 1px solid;
}

.dt-badge--process {
  background: rgba(74, 124, 111, 0.1);
  border-color: rgba(74, 124, 111, 0.3);
  color: var(--hqq-green);
}

.dt-badge--result {
  background: rgba(184, 125, 58, 0.1);
  border-color: rgba(184, 125, 58, 0.3);
  color: var(--hqq-amber);
}

.dt-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--hqq-rule);
  border-radius: 8px;
}

.dt-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--hqq-font-sans);
  font-size: 13.5px;
  margin: 0;
}

.dt-table thead tr {
  background: var(--vp-c-bg-soft);
}

.dt-table th {
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--hqq-ink-muted);
  padding: 0.65em 1em;
  border-bottom: 1px solid var(--hqq-rule);
  text-align: left;
  white-space: nowrap;
}

.dt-table td {
  padding: 0.65em 1em;
  border-bottom: 1px solid var(--hqq-rule);
  vertical-align: top;
  line-height: 1.55;
}

.dt-table tr:last-child td {
  border-bottom: none;
}

.dt-row--process td {
  border-left: 2px solid transparent;
}

.dt-row--process:first-child td:first-child {
  border-left-color: var(--hqq-green);
}

.dt-row--process td:first-child {
  border-left: 2px solid var(--hqq-green);
}

.dt-row--result td:first-child {
  border-left: 2px solid var(--hqq-amber);
}

.dt-row:hover td {
  background: var(--vp-c-bg-soft);
}

.dt-metric {
  font-weight: 500;
  color: var(--hqq-ink);
  white-space: nowrap;
}

.dt-target {
  font-family: var(--hqq-font-mono);
  font-size: 12.5px;
  color: var(--hqq-ink);
  white-space: nowrap;
}

.dt-badge-sm {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 0.15em 0.6em;
  border-radius: 4px;
  white-space: nowrap;
}

.dt-badge-sm--process {
  background: rgba(74, 124, 111, 0.12);
  color: var(--hqq-green);
}

.dt-badge-sm--result {
  background: rgba(184, 125, 58, 0.12);
  color: var(--hqq-amber);
}

.dt-cond {
  font-weight: 500;
  white-space: nowrap;
  color: var(--hqq-ink-muted);
}

.dt-note {
  color: var(--hqq-ink-muted);
  font-size: 13px;
  line-height: 1.6;
  min-width: 200px;
}

@media (max-width: 640px) {
  .dt-note {
    display: none;
  }
}
</style>

<script setup lang="ts">
const timelineScale = [
  { label: 'T0', note: '实验启动' },
  { label: '0.5h', note: '变量锁定' },
  { label: '2h', note: '事实供给' },
  { label: '4h', note: '候选生成' },
  { label: '6h', note: '人工收敛' },
  { label: '8h', note: '审核上线' },
  { label: '24h', note: '首轮回收' },
  { label: '48h', note: '稳定观察' },
  { label: '72h', note: '复盘决策' },
  { label: 'T+4', note: '规则沉淀' }
]

const expandedTimeline = [
  {
    phase: '生产推进',
    group: '运营研究组',
    duty: '定义变量、实验编号和最终去留',
    bars: [
      { start: 1, end: 3, label: '立项与变量锁定', type: 'decision', output: '实验设计单' },
      { start: 5, end: 6, label: '候选版本收敛', type: 'review', output: '可测清单' },
      { start: 9, end: 11, label: '复盘与下一轮立项', type: 'decision', output: '下一轮假设' }
    ]
  },
  {
    phase: '事实供给',
    group: '供应链/品控',
    duty: '确认 SKU、价格、库存、规格和发货边界',
    bars: [
      { start: 1, end: 3, label: 'SKU/库存/价格确认', type: 'review', output: '事实包' },
      { start: 6, end: 7, label: '发布前复核', type: 'review', output: '可发布' },
      { start: 7, end: 9, label: '履约风险监测', type: 'data', output: '库存/发货预警' }
    ]
  },
  {
    phase: '事实供给',
    group: '客服洞察组',
    duty: '把咨询、差评和退款原因转成素材输入',
    bars: [
      { start: 1, end: 3, label: '用户原话提取', type: 'work', output: '购买理由/质疑点' },
      { start: 5, end: 6, label: '评论承接话术审核', type: 'review', output: '标准回复' },
      { start: 7, end: 10, label: '评论区新问题回收', type: 'data', output: '新增痛点' }
    ]
  },
  {
    phase: '素材供给',
    group: '工厂/仓库素材组',
    duty: '交付真实生产、质检、打包和发货画面',
    bars: [
      { start: 2, end: 4, label: '生产/质检/打包实拍', type: 'work', output: '真实素材包' },
      { start: 4, end: 5, label: '缺口补拍', type: 'work', output: '补充镜头' },
      { start: 5, end: 6, label: '事实复核', type: 'review', output: '画面可用' }
    ]
  },
  {
    phase: 'AI 辅助',
    group: 'AI Agent 编队',
    duty: '扩大候选空间并结构化输出',
    bars: [
      { start: 2, end: 4, label: '情报/脚本/封面候选', type: 'ai', output: '候选池' },
      { start: 4, end: 5, label: '分镜与提示词整理', type: 'ai', output: '生产清单' },
      { start: 8, end: 10, label: '胜败因初判', type: 'ai', output: '归因草稿' }
    ]
  },
  {
    phase: '生产推进',
    group: '封面/设计组',
    duty: '把封面作为入口承诺单独验证',
    bars: [
      { start: 3, end: 5, label: '四类封面生成', type: 'ai', output: '封面候选' },
      { start: 5, end: 6, label: '精修与安全区检查', type: 'work', output: '可测封面' },
      { start: 7, end: 9, label: '封面 CTR 归因', type: 'data', output: '封面结论' }
    ]
  },
  {
    phase: '生产推进',
    group: '视频制作组',
    duty: '让视频开头兑现封面承诺',
    bars: [
      { start: 3, end: 4, label: '分镜和拍摄清单', type: 'work', output: '分镜稿' },
      { start: 4, end: 6, label: '拍摄/粗剪/二创', type: 'work', output: '视频版本' },
      { start: 6, end: 7, label: '源文件归档', type: 'work', output: '资产记录' }
    ]
  },
  {
    phase: '自动化辅助',
    group: '浏览器自动化',
    duty: '只做巡检、截图、下载、核对和预填',
    bars: [
      { start: 2, end: 4, label: '商品页/库存核对', type: 'data', output: '一致性预警' },
      { start: 5, end: 6, label: '投放后台预填', type: 'work', output: '待确认草稿' },
      { start: 7, end: 9, label: '报表下载/截图归档', type: 'data', output: '证据链' }
    ]
  },
  {
    phase: '验证投放',
    group: '品控/合规组',
    duty: '保护事实、食品宣传和经营承诺边界',
    bars: [
      { start: 2, end: 3, label: '禁用表达预审', type: 'review', output: '风险边界' },
      { start: 5, end: 7, label: '视频/封面/话术终审', type: 'review', output: '审核结论' },
      { start: 8, end: 9, label: '投诉风险复核', type: 'review', output: '风险处置' }
    ]
  },
  {
    phase: '验证投放',
    group: '投放/渠道组',
    duty: '控制变量并回收市场反馈',
    bars: [
      { start: 5, end: 6, label: '计划映射实验编号', type: 'work', output: '投放计划' },
      { start: 6, end: 9, label: '小预算测试与观察', type: 'data', output: '首轮数据' },
      { start: 9, end: 10, label: '放量/暂停/继续观察', type: 'decision', output: '投放决策' }
    ]
  },
  {
    phase: '复盘迭代',
    group: '数据/知识库组',
    duty: '判断样本资格并沉淀规则',
    bars: [
      { start: 7, end: 9, label: '数据清洗与异常标记', type: 'data', output: '可用数据' },
      { start: 9, end: 10, label: '胜败因复盘会', type: 'decision', output: '复盘结论' },
      { start: 10, end: 11, label: '规则入库', type: 'data', output: '知识规则' }
    ]
  }
]

function barStyle(bar: { start: number; end: number }) {
  return {
    gridColumn: `${bar.start} / ${bar.end}`
  }
}
</script>

<template>
  <div class="swimlane-board swimlane-board--expanded report-chart">
    <div class="time-ruler">
      <div class="lane-label ruler-label">小组</div>
      <div class="ruler-grid">
        <div v-for="tick in timelineScale" :key="tick.label" class="time-tick">
          <strong>{{ tick.label }}</strong>
          <span>{{ tick.note }}</span>
        </div>
      </div>
    </div>
    <article v-for="lane in expandedTimeline" :key="`${lane.phase}-${lane.group}`" class="swimlane-row">
      <div class="lane-label">
        <em>{{ lane.phase }}</em>
        <strong>{{ lane.group }}</strong>
        <span>{{ lane.duty }}</span>
      </div>
      <div class="lane-track">
        <div
          v-for="bar in lane.bars"
          :key="`${lane.group}-${bar.label}`"
          class="lane-bar"
          :class="`lane-bar--${bar.type}`"
          :style="barStyle(bar)"
        >
          <strong>{{ bar.label }}</strong>
          <span>{{ bar.output }}</span>
        </div>
      </div>
    </article>
  </div>
  <div class="swimlane-legend">
    <span><i class="legend-work"></i>部门执行</span>
    <span><i class="legend-ai"></i>AI 辅助</span>
    <span><i class="legend-review"></i>人工审核</span>
    <span><i class="legend-data"></i>数据回收</span>
    <span><i class="legend-decision"></i>经营决策</span>
  </div>
</template>

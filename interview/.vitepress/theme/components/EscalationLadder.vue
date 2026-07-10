<script setup lang="ts">
const levels = [
  {
    num: '第一级',
    title: '人工导出 Excel',
    cost: '零成本',
    note: '人点一下，每天几分钟。第一版采用，稳定、无需额外审批。',
    trigger: '启动即用',
    active: true,
  },
  {
    num: '第二级',
    title: '浏览器插件',
    cost: '低',
    note: '跑在已登录的浏览器里，无需资质审批，比无头 RPA 稳定。实测可行。',
    trigger: '当导出频次高、手动扛不住时升级',
    active: false,
  },
  {
    num: '第三级',
    title: '无头 RPA',
    cost: '中',
    note: '需要维护脚本，稳定性低于插件，适合插件覆盖不了的边缘场景。',
    trigger: '插件覆盖不了的场景',
    active: false,
  },
  {
    num: '第四级',
    title: '开放平台 API + 服务商资质',
    cost: '高',
    note: '实时数据流，最强，但需要申请资质，有审批周期。业务真正做大时才值得投。',
    trigger: '业务规模化，实时性有硬需求',
    active: false,
  },
]
</script>

<template>
  <div class="el-wrap">
    <div class="el-track">
      <div
        v-for="(level, i) in levels"
        :key="i"
        :class="['el-rung', { 'el-rung--active': level.active }]"
        :style="{ '--rung-indent': `${i * 28}px` }"
      >
        <div class="el-rung-inner">
          <div class="el-left">
            <div class="el-num">{{ level.num }}</div>
            <div class="el-title-row">
              <span class="el-title">{{ level.title }}</span>
              <span :class="['el-cost', `el-cost--${i}`]">成本：{{ level.cost }}</span>
              <span v-if="level.active" class="el-active-badge">当前</span>
            </div>
            <p class="el-note">{{ level.note }}</p>
          </div>
          <div class="el-trigger">
            <span class="el-trigger-label">触发条件</span>
            <span class="el-trigger-text">{{ level.trigger }}</span>
          </div>
        </div>
        <!-- 向上箭头（非最后一级） -->
        <div v-if="i < levels.length - 1" class="el-arrow" aria-hidden="true">↑</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-wrap {
  margin: 2em 0;
}

.el-track {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.el-rung {
  margin-left: var(--rung-indent);
  border: 1px solid var(--hqq-rule);
  border-radius: 8px;
  padding: 0.9em 1.1em;
  background: var(--vp-c-bg);
  position: relative;
  transition: border-color 0.15s;
  margin-bottom: 8px;
}

.el-rung--active {
  border-color: var(--hqq-accent);
  background: rgba(204, 120, 92, 0.04);
}

.el-rung:hover {
  border-color: var(--hqq-accent);
}

.el-rung-inner {
  display: flex;
  gap: 1.5em;
  align-items: flex-start;
  flex-wrap: wrap;
}

.el-left {
  flex: 1;
  min-width: 200px;
}

.el-num {
  font-family: var(--hqq-font-mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hqq-ink-faint);
  margin-bottom: 4px;
}

.el-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.el-title {
  font-family: var(--hqq-font-sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--hqq-ink);
}

.el-cost {
  font-family: var(--hqq-font-sans);
  font-size: 11px;
  font-weight: 500;
  padding: 0.1em 0.5em;
  border-radius: 4px;
}

.el-cost--0 { background: rgba(74,124,111,0.12); color: var(--hqq-green); }
.el-cost--1 { background: rgba(74,124,111,0.08); color: var(--hqq-green); }
.el-cost--2 { background: rgba(184,125,58,0.12);  color: var(--hqq-amber); }
.el-cost--3 { background: rgba(184,125,58,0.2);   color: var(--hqq-amber); }

.el-active-badge {
  font-family: var(--hqq-font-sans);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--hqq-accent);
  background: rgba(204,120,92,0.12);
  padding: 0.15em 0.55em;
  border-radius: 4px;
}

.el-note {
  font-family: var(--hqq-font-sans);
  font-size: 13px;
  color: var(--hqq-ink-muted);
  line-height: 1.6;
  margin: 0;
}

.el-trigger {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0.5em 0.8em;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  border: 1px solid var(--hqq-rule);
  min-width: 160px;
  max-width: 240px;
  align-self: flex-start;
}

.el-trigger-label {
  font-family: var(--hqq-font-sans);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hqq-ink-faint);
}

.el-trigger-text {
  font-family: var(--hqq-font-sans);
  font-size: 12.5px;
  color: var(--hqq-ink-muted);
  line-height: 1.5;
}

.el-arrow {
  text-align: center;
  color: var(--hqq-rule);
  font-size: 14px;
  line-height: 1;
  margin: -4px 0 4px;
  display: block;
}

@media (max-width: 600px) {
  .el-rung {
    margin-left: 0 !important;
  }
  .el-trigger {
    max-width: 100%;
    min-width: unset;
    width: 100%;
  }
}
</style>

<script setup lang="ts">
interface Field {
  name: string
  isPK?: boolean   // 主键
  note?: string
}

interface TableDef {
  title: string
  rowMeaning: string
  fields: Field[]
}

const tables: TableDef[] = [
  {
    title: '素材资产库',
    rowMeaning: '一行 = 一条素材',
    fields: [
      { name: '素材编号', isPK: true, note: '跨两张表的主键' },
      { name: 'SKU' },
      { name: '素材链接' },
      { name: '卖点 / 人群 / 场景' },
      { name: '原始表现（CTR / 3s留存）' },
      { name: '来源 / 授权状态', note: '自有拍摄 / 达人授权可分发 / 仅限自营 / 需重新授权' },
      { name: '合规状态' },
    ],
  },
  {
    title: '分发回收表',
    rowMeaning: '一行 = 一次「某素材用在某个投放位」',
    fields: [
      { name: '素材编号', isPK: true, note: '与资产库关联的外键' },
      { name: '投放位置' },
      { name: '分发时间' },
      { name: '使用状态' },
      { name: '回收数据', note: '链接 / 咨询 / 成交截图' },
      { name: '异常标记' },
    ],
  },
]
</script>

<template>
  <div class="st-wrap">
    <div
      v-for="(table, ti) in tables"
      :key="ti"
      class="st-card"
    >
      <div class="st-header">
        <span class="st-title">{{ table.title }}</span>
        <span class="st-row-meaning">{{ table.rowMeaning }}</span>
      </div>

      <div class="st-fields">
        <div
          v-for="(field, fi) in table.fields"
          :key="fi"
          :class="['st-field', { 'st-field--pk': field.isPK }]"
        >
          <div class="st-field-name">
            <span v-if="field.isPK" class="st-pk-badge">PK</span>
            {{ field.name }}
          </div>
          <div v-if="field.note" class="st-field-note">{{ field.note }}</div>
        </div>
      </div>
    </div>

    <p class="st-footnote">
      素材编号贯穿两张表，是串起所有数据的主键。两张而不是三张：分发和回收是同一件事的两头，关系越简单越活得下去。
    </p>
  </div>
</template>

<style scoped>
.st-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 2em 0;
}

.st-card {
  border: 1px solid var(--hqq-rule);
  border-radius: 8px;
  overflow: hidden;
}

.st-header {
  background: var(--vp-c-bg-soft);
  padding: 0.7em 1em;
  border-bottom: 1px solid var(--hqq-rule);
}

.st-title {
  display: block;
  font-family: var(--hqq-font-serif);
  font-size: 0.95em;
  font-weight: 600;
  color: var(--hqq-ink);
}

.st-row-meaning {
  display: block;
  font-family: var(--hqq-font-sans);
  font-size: 11.5px;
  color: var(--hqq-ink-faint);
  margin-top: 2px;
}

.st-fields {
  padding: 0.4em 0;
}

.st-field {
  padding: 0.45em 1em;
  border-bottom: 1px solid transparent;
  transition: background 0.12s;
}

.st-field:last-child {
  border-bottom: none;
}

.st-field:hover {
  background: var(--vp-c-bg-soft);
}

.st-field--pk {
  background: rgba(204, 120, 92, 0.05);
}

.st-field--pk:hover {
  background: rgba(204, 120, 92, 0.1);
}

.st-field-name {
  font-family: var(--hqq-font-sans);
  font-size: 13px;
  color: var(--hqq-ink);
  display: flex;
  align-items: center;
  gap: 6px;
}

.st-pk-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--hqq-accent);
  background: rgba(204, 120, 92, 0.12);
  padding: 0.1em 0.45em;
  border-radius: 3px;
  flex-shrink: 0;
}

.st-field-note {
  font-family: var(--hqq-font-sans);
  font-size: 11.5px;
  color: var(--hqq-ink-faint);
  margin-top: 2px;
  line-height: 1.5;
}

.st-footnote {
  grid-column: 1 / -1;
  font-family: var(--hqq-font-sans);
  font-size: 13px;
  color: var(--hqq-ink-muted);
  border-top: 1px solid var(--hqq-rule);
  padding-top: 0.75em;
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .st-wrap {
    grid-template-columns: 1fr;
  }
}
</style>

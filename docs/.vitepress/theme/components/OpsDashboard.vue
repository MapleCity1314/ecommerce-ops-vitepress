<script setup lang="ts">
import { computed } from 'vue'
import { BookOpen, Boxes, GitBranch, Images, Layers3, Route } from '@lucide/vue'
import { categories, modules, totals } from '../data/modules'

const categoryRows = computed(() =>
  categories.map((category) => {
    const items = modules.filter((item) => item.category === category)
    return {
      category,
      count: items.length,
      images: items.reduce((sum, item) => sum + item.imageCount, 0),
      sections: items.reduce((sum, item) => sum + item.sectionCount, 0)
    }
  })
)

const chain = [
  '类目调研',
  '测款验证',
  '测图优化',
  '新品放量',
  '团队复制',
  '流程沉淀'
]
</script>

<template>
  <section class="ops-dashboard">
    <div class="ops-dashboard__header">
      <div>
        <p class="eyebrow">OPERATIONS COMMAND CENTER</p>
        <h2>运营资料总览</h2>
      </div>
      <p>把原始资料整理成可检索、可导航、可执行的内部知识库。</p>
    </div>

    <div class="metric-grid">
      <div class="metric-card">
        <BookOpen :size="24" />
        <strong>{{ totals.modules }}</strong>
        <span>知识模块</span>
      </div>
      <div class="metric-card">
        <Images :size="24" />
        <strong>{{ totals.images }}</strong>
        <span>素材图片</span>
      </div>
      <div class="metric-card">
        <Layers3 :size="24" />
        <strong>{{ totals.sections }}</strong>
        <span>章节节点</span>
      </div>
      <div class="metric-card">
        <Boxes :size="24" />
        <strong>{{ totals.categories }}</strong>
        <span>业务分类</span>
      </div>
    </div>

    <div class="ops-grid">
      <div class="panel">
        <div class="panel-title">
          <Route :size="18" />
          SOP 作战链路
        </div>
        <div class="chain">
          <span v-for="item in chain" :key="item">{{ item }}</span>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title">
          <GitBranch :size="18" />
          分类资料量
        </div>
        <div class="category-bars">
          <div v-for="row in categoryRows" :key="row.category" class="bar-row">
            <span>{{ row.category }}</span>
            <div class="bar-track">
              <i :style="{ width: `${Math.max(18, (row.images / totals.images) * 100)}%` }" />
            </div>
            <b>{{ row.count }} 篇</b>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

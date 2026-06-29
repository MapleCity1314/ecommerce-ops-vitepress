<script setup lang="ts">
import { computed } from 'vue'
import { AlertTriangle, CheckCircle2, FileText, Images, PackageCheck, Tag, Users } from '@lucide/vue'
import { moduleMap } from '../data/modules'

const props = defineProps<{
  moduleId: string
  imageCount: number
  sectionCount: number
}>()

const item = computed(() => moduleMap[props.moduleId])
</script>

<template>
  <section v-if="item" class="doc-hero">
    <div>
      <span class="doc-hero__category">{{ item.category }}</span>
      <h1>{{ item.title }}</h1>
      <p>{{ item.summary }}</p>
      <div class="audience-line">
        <Users :size="15" />
        <span>{{ item.audience }}</span>
      </div>
      <div class="tag-list">
        <span v-for="tag in item.tags" :key="tag">
          <Tag :size="13" />
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="doc-hero__lists">
      <div>
        <h2>
          <PackageCheck :size="16" />
          交付物
        </h2>
        <ul>
          <li v-for="deliverable in item.deliverables" :key="deliverable">
            <CheckCircle2 :size="14" />
            {{ deliverable }}
          </li>
        </ul>
      </div>
      <div>
        <h2>
          <AlertTriangle :size="16" />
          检查点
        </h2>
        <ul>
          <li v-for="checkpoint in item.checkpoints" :key="checkpoint">
            <CheckCircle2 :size="14" />
            {{ checkpoint }}
          </li>
        </ul>
      </div>
    </div>
    <div class="doc-stats">
      <div>
        <FileText :size="20" />
        <strong>{{ sectionCount }}</strong>
        <span>章节节点</span>
      </div>
      <div>
        <Images :size="20" />
        <strong>{{ imageCount }}</strong>
        <span>素材图片</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { modules } from '../data/modules'
</script>

<template>
  <section class="knowledge-map">
    <div class="section-heading">
      <p class="eyebrow">KNOWLEDGE MAP</p>
      <h2>知识地图</h2>
    </div>
    <div class="module-grid">
      <a v-for="item in modules" :key="item.id" class="module-card" :href="item.route">
        <span class="module-card__category">{{ item.category }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <div class="module-card__meta">
          <span>{{ item.sectionCount }} 节</span>
          <span>{{ item.imageCount }} 图</span>
          <ArrowRight :size="17" />
        </div>
      </a>
    </div>
  </section>
</template>

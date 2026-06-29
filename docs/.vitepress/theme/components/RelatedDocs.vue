<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight } from '@lucide/vue'
import { moduleMap } from '../data/modules'

const props = defineProps<{ moduleId: string }>()
const related = computed(() => {
  const item = moduleMap[props.moduleId]
  return item ? item.related.map((id) => moduleMap[id]).filter(Boolean) : []
})
</script>

<template>
  <section v-if="related.length" class="related-docs">
    <a v-for="item in related" :key="item.id" :href="item.route">
      <span>{{ item.category }}</span>
      <strong>{{ item.title }}</strong>
      <ArrowUpRight :size="16" />
    </a>
  </section>
</template>

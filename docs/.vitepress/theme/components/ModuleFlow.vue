<script setup lang="ts">
import { computed } from 'vue'
import { CheckCircle2 } from '@lucide/vue'
import { moduleMap } from '../data/modules'

const props = defineProps<{ moduleId: string }>()
const item = computed(() => moduleMap[props.moduleId])
</script>

<template>
  <section v-if="item" class="module-flow">
    <div class="section-heading compact">
      <p class="eyebrow">PROCESS</p>
      <h2>执行流程</h2>
    </div>
    <ol>
      <li v-for="(step, index) in item.flow" :key="step">
        <span>{{ index + 1 }}</span>
        <p>{{ step }}</p>
        <CheckCircle2 :size="16" />
      </li>
    </ol>
  </section>
</template>

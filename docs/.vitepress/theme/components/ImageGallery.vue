<script setup lang="ts">
import { computed, ref } from 'vue'
import { moduleMap } from '../data/modules'

const props = defineProps<{ moduleId: string }>()
const item = computed(() => moduleMap[props.moduleId])
const expanded = ref(false)
const visibleAssets = computed(() => {
  const assets = item.value?.assets ?? []
  return expanded.value ? assets : assets.slice(0, 12)
})
</script>

<template>
  <section v-if="item?.assets?.length" class="image-gallery">
    <div class="section-heading compact">
      <p class="eyebrow">REFERENCE</p>
      <h2>原始素材参考</h2>
    </div>
    <div class="image-gallery__grid">
      <figure v-for="(asset, index) in visibleAssets" :key="asset.url">
        <img :src="asset.url" :alt="`${item.title} 原始素材 ${index + 1}`" loading="lazy" />
        <figcaption>素材 {{ index + 1 }}</figcaption>
      </figure>
    </div>
    <button v-if="item.assets.length > 12" class="image-gallery__toggle" type="button" @click="expanded = !expanded">
      {{ expanded ? '收起素材' : `展开全部 ${item.assets.length} 张素材` }}
    </button>
  </section>
</template>

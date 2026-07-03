import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './styles.css'
import OpsDashboard from './components/OpsDashboard.vue'
import KnowledgeMap from './components/KnowledgeMap.vue'
import ModuleFlow from './components/ModuleFlow.vue'
import DocHero from './components/DocHero.vue'
import RelatedDocs from './components/RelatedDocs.vue'
import ImageGallery from './components/ImageGallery.vue'
import AIMaterialWarRoom from './components/AIMaterialWarRoom.vue'
import AIMaterialExecutionLoop from './components/AIMaterialExecutionLoop.vue'
import AIMaterialFinalBlueprint from './components/AIMaterialFinalBlueprint.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('OpsDashboard', OpsDashboard)
    app.component('KnowledgeMap', KnowledgeMap)
    app.component('ModuleFlow', ModuleFlow)
    app.component('DocHero', DocHero)
    app.component('RelatedDocs', RelatedDocs)
    app.component('ImageGallery', ImageGallery)
    app.component('AIMaterialWarRoom', AIMaterialWarRoom)
    app.component('AIMaterialExecutionLoop', AIMaterialExecutionLoop)
    app.component('AIMaterialFinalBlueprint', AIMaterialFinalBlueprint)
  }
} satisfies Theme

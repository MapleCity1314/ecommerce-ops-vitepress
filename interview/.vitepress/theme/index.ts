import DefaultTheme from 'vitepress/theme'
import './style.css'

import ThreeStepFlow from './components/ThreeStepFlow.vue'
import QuestionGrid from './components/QuestionGrid.vue'
import DeliveryTable from './components/DeliveryTable.vue'

import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ThreeStepFlow', ThreeStepFlow)
    app.component('QuestionGrid', QuestionGrid)
    app.component('DeliveryTable', DeliveryTable)
  },
} satisfies Theme

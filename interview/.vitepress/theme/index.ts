import DefaultTheme from 'vitepress/theme'
import './style.css'

import ThreeStepFlow from './components/ThreeStepFlow.vue'
import QuestionGrid from './components/QuestionGrid.vue'
import DeliveryTable from './components/DeliveryTable.vue'
import Timeline from './components/Timeline.vue'
import SchemaTable from './components/SchemaTable.vue'
import EscalationLadder from './components/EscalationLadder.vue'
import DecisionRule from './components/DecisionRule.vue'
import PushPull from './components/PushPull.vue'

import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ThreeStepFlow', ThreeStepFlow)
    app.component('QuestionGrid', QuestionGrid)
    app.component('DeliveryTable', DeliveryTable)
    app.component('Timeline', Timeline)
    app.component('SchemaTable', SchemaTable)
    app.component('EscalationLadder', EscalationLadder)
    app.component('DecisionRule', DecisionRule)
    app.component('PushPull', PushPull)
  },
} satisfies Theme

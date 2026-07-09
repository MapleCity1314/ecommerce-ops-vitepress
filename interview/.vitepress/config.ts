import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '昊七七 AI 素材方案',
  description: '入职后 30 天用 AI 重构昊七七素材生产与投放决策链路',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  lastUpdated: false,

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    // Source Serif 4 西文衬线
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=Inter:wght@400;500;600&display=swap',
      },
    ],
  ],

  markdown: {
    image: { lazyLoading: true },
  },

  themeConfig: {
    nav: [
      { text: '总览', link: '/overview' },
      {
        text: '七道题',
        items: [
          { text: 'Q1 第一周工具', link: '/q1' },
          { text: 'Q2 最小版本', link: '/q2' },
          { text: 'Q3 七天交付', link: '/q3' },
          { text: 'Q4 没 API', link: '/q4' },
          { text: 'Q5 一线不填表', link: '/q5' },
          { text: 'Q6 真需要 Agent', link: '/q6' },
          { text: 'Q7 30 天证明价值', link: '/q7' },
        ],
      },
      {
        text: '附录',
        items: [
          { text: '飞书能力全景', link: '/appendix/feishu' },
          { text: '代理模式两手准备', link: '/appendix/agent-modes' },
        ],
      },
    ],

    sidebar: [
      {
        text: '方案概览',
        items: [
          { text: '首页', link: '/' },
          { text: '总览与背景', link: '/overview' },
        ],
      },
      {
        text: '七道题详解',
        items: [
          { text: 'Q1 · 第一周工具', link: '/q1' },
          { text: 'Q2 · 最小可执行版本', link: '/q2' },
          { text: 'Q3 · 七天交付', link: '/q3' },
          { text: 'Q4 · 后台没 API', link: '/q4' },
          { text: 'Q5 · 一线不愿填表', link: '/q5' },
          { text: 'Q6 · 哪些真需要 Agent', link: '/q6' },
          { text: 'Q7 · 30 天证明价值', link: '/q7' },
        ],
      },
      {
        text: '技术附录',
        items: [
          { text: '飞书能力全景', link: '/appendix/feishu' },
          { text: '代理模式两手准备', link: '/appendix/agent-modes' },
        ],
      },
    ],

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    docFooter: {
      prev: '上一题',
      next: '下一题',
    },

    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    socialLinks: [],
    footer: {
      message: '昊七七 AI 岗位四面材料',
      copyright: '赵宇航 · 2026',
    },
  },
})

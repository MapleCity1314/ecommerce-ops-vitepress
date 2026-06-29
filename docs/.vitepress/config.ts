import { defineConfig } from 'vitepress'
import { nav, sidebar } from './theme/data/sidebar'

export default defineConfig({
  lang: 'zh-CN',
  title: '电商运营 SOP 作战台',
  description: '从测款、测图到组织流程的内部运营知识库',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: `${process.env.VITEPRESS_BASE || '/'}logo.svg`,
    nav,
    sidebar,
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索资料',
            buttonAriaLabel: '搜索资料'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdated: {
      text: '最近更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    socialLinks: []
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['link', { rel: 'icon', href: `${process.env.VITEPRESS_BASE || '/'}favicon.svg` }]
  ]
})

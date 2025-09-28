import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'KidStudy',
  description: 'KidStudy · 小童学伴是一个温馨的教育小项目，专注于用有趣的方式记录和陪伴孩子的学习成长。',
  lang: 'zh-CN',
  base: '/KidStudy/',
  srcDir: './src',
  lastUpdated: true,
  themeConfig: {

    // 增强的本地搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
        // detailedView: true // 显示详细搜索结果
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    // 增强的社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhycn/KidStudy' }],

    // 新增功能配置
    editLink: {
      pattern: 'https://github.com/zhycn/KidStudy/edit/main/docs/src/:path',
      text: '在 GitHub 上编辑此页',
    },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一节',
      next: '下一节',
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2025-${new Date().getFullYear()} KidStudy`,
    },

    darkModeSwitchLabel: '主题切换',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '最后更新',
    sidebarMenuLabel: '菜单',
  },

  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
    toc: { level: [2, 3] },
  },
});


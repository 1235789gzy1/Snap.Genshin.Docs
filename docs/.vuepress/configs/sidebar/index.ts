import type { SidebarConfig } from '@vuepress/theme-default'

export const main: SidebarConfig = {
  '/':[
    {
      text: '开始使用',
      collapsible: false,
      children: [
        '/documents/',
        '/documents/features-overview',
      ]
    },

    {
      text: '功能指南',
      collapsible: false,
      children: [
        '/documents/features/game-launcher.md',
        '/documents/features/account-switch.md',
        '/documents/features/mhy-account-switch.md',
        '/documents/features/unlock-framerate.md',
        '/documents/features/wish-export.md',
        '/documents/features/customize-webpage.md'
      ],
    },

    {
      text: '常见问题',
      collapsible: false,
      children: [
        '/documents/FAQ/Dell-AWCC-error.md',
        '/documents/FAQ/dotNET-env.md',
        '/documents/FAQ/how-to-quit-program.md',
        '/documents/FAQ/launcher-path-error.md',
        '/documents/FAQ/transfer-from-other-wish-export.md',
        '/documents/FAQ/WebView2-env.md',
        '/documents/FAQ/failed-load.md',
      ],
    },

    {
      text: '声明文档',
      collapsible: false,
      children: [
        '/documents/statement/user-privacy-notice.md',
        '/documents/statement/sponsor.md',
      ],
    }
  ],
  
  '/development': [
    {
      text: "开发指南",
      collapsible: false,
      children: [
        '/development/StandardFormat',
        '/development/DeveloperGuide',
        '/development/PluginTutorial',
      ]
    }
  ],
}
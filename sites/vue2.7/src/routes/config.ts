// ! zhangpaopao 挪动了位置
export const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'doc',
    children: [
      {
        title: '快速开始',
        titleEn: 'Getting Started',
        name: 'getting-started',
        path: '/vue/getting-started',
        component: () => import('@/docs/getting-started.md'),
        componentEn: () => import('@/docs/getting-started.en-US.md'),
      },
      {
        title: '最佳实践',
        titleEn: 'Starter Kit',
        name: 'quick-start',
        path: '/vue/quick-start',
        component: () => import('@/docs/starter.md'),
        componentEn: () => import('@/docs/starter.en-US.md'),
      },
      {
        title: '更新日志',
        titleEn: 'CHANGELOG',
        name: 'changelog',
        path: '/vue/changelog',
        // component: () => import('@/CHANGELOG.md'),
      },
      {
        title: '组件概览',
        titleEn: 'Overview',
        name: 'overview',
        path: '/vue/overview',
        component: () => import('@td/shared/_common/docs/web/overview.md'),
        componentEn: () => import('@td/shared/_common/docs/web/overview.en-US.md'),
      },
    ],
  },
  {
    title: '全局配置',
    titleEn: 'Global Config',
    type: 'doc',
    children: [
      {
        title: '全局特性配置',
        titleEn: 'Global Configuration',
        name: 'config',
        path: '/vue/global-configuration',
        component: () => import('@td/intel/components/config-provider/config-provider.md'),
        componentEn: () => import('@td/intel/components/config-provider/config-provider.en-US.md'),
      },
      {
        title: '自定义主题',
        titleEn: 'Theme Customization',
        name: 'custom-theme',
        path: '/vue/custom-theme',
        component: () => import('@td/shared/_common/theme.md'),
        componentEn: () => import('@td/shared/_common/theme.en-US.md'),
      },
      {
        title: '暗黑模式',
        titleEn: 'Dark Mode',
        name: 'dark-mode',
        path: '/vue/dark-mode',
        component: () => import('@td/shared/_common/dark-mode.md'),
        componentEn: () => import('@td/shared/_common/dark-mode.en-US.md'),
      },
    ],
  },
  {
    title: '基础',
    titleEn: 'Base',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Button 按钮',
        titleEn: 'Button',
        name: 'button',
        path: '/vue/components/button',
        component: () => import('@td/intel/components/button/button.md'),
        componentEn: () => import('@td/intel/components/button/button.en-US.md'),
      },
      {
        title: 'Icon 图标',
        titleEn: 'Icon',
        name: 'icon',
        path: '/vue/components/icon',
        component: () => import('@td/intel/components/icon/icon.md'),
        componentEn: () => import('@td/intel/components/icon/icon.en-US.md'),
      },
      {
        title: 'Link 链接',
        titleEn: 'Link',
        name: 'link',
        path: '/vue/components/link',
        component: () => import('@td/intel/components/link/link.md'),
        componentEn: () => import('@td/intel/components/link/link.en-US.md'),
      },
    ],
  },
  {
    title: '布局',
    titleEn: 'Layout',
    type: 'component',
    children: [
      {
        title: 'Divider 分割线',
        titleEn: 'Divider',
        name: 'divider',
        path: '/vue/components/divider',
        component: () => import('@td/intel/components/divider/divider.md'),
        componentEn: () => import('@td/intel/components/divider/divider.en-US.md'),
      },
      {
        title: 'Grid 栅格',
        titleEn: 'Grid',
        name: 'grid',
        path: '/vue/components/grid',
        component: () => import('@td/intel/components/grid/grid.md'),
        componentEn: () => import('@td/intel/components/grid/grid.en-US.md'),
      },
      {
        title: 'Layout 布局',
        titleEn: 'Layout',
        name: 'layout',
        path: '/vue/components/layout',
        component: () => import('@td/intel/components/layout/layout.md'),
        componentEn: () => import('@td/intel/components/layout/layout.en-US.md'),
      },
      {
        title: 'Space 间距',
        titleEn: 'Space',
        name: 'space',
        path: '/vue/components/space',
        component: () => import('@td/intel/components/space/space.md'),
        componentEn: () => import('@td/intel/components/space/space.en-US.md'),
      },
    ],
  },
  {
    title: '导航',
    titleEn: 'Navigation',
    type: 'component',
    children: [
      {
        title: 'Affix 固钉',
        titleEn: 'Affix',
        name: 'affix',
        path: '/vue/components/affix',
        component: () => import('@td/intel/components/affix/affix.md'),
        componentEn: () => import('@td/intel/components/affix/affix.en-US.md'),
      },
      {
        title: 'Anchor 锚点',
        titleEn: 'Anchor',
        name: 'anchor',
        path: '/vue/components/anchor',
        component: () => import('@td/intel/components/anchor/anchor.md'),
        componentEn: () => import('@td/intel/components/anchor/anchor.en-US.md'),
      },
      {
        title: 'BackTop 回到顶部',
        titleEn: 'BackTop',
        name: 'back-top',
        path: '/vue/components/back-top',
        component: () => import('@td/intel/components/back-top/back-top.md'),
        componentEn: () => import('@td/intel/components/back-top/back-top.en-US.md'),
      },
      {
        title: 'Breadcrumb 面包屑',
        titleEn: 'Breadcrumb',
        name: 'breadcrumb',
        path: '/vue/components/breadcrumb',
        component: () => import('@td/intel/components/breadcrumb/breadcrumb.md'),
        componentEn: () => import('@td/intel/components/breadcrumb/breadcrumb.en-US.md'),
      },
      {
        title: 'Dropdown 下拉菜单',
        titleEn: 'Dropdown',
        name: 'dropdown',
        path: '/vue/components/dropdown',
        component: () => import('@td/intel/components/dropdown/dropdown.md'),
        componentEn: () => import('@td/intel/components/dropdown/dropdown.en-US.md'),
      },
      {
        title: 'Menu 导航菜单',
        titleEn: 'Menu',
        name: 'menu',
        path: '/vue/components/menu',
        component: () => import('@td/intel/components/menu/menu.md'),
        componentEn: () => import('@td/intel/components/menu/menu.en-US.md'),
      },
      {
        title: 'Pagination 分页',
        titleEn: 'Pagination',
        name: 'pagination',
        path: '/vue/components/pagination',
        component: () => import('@td/intel/components/pagination/pagination.md'),
        componentEn: () => import('@td/intel/components/pagination/pagination.en-US.md'),
      },
      {
        title: 'Steps 步骤条',
        titleEn: 'Steps',
        name: 'steps',
        path: '/vue/components/steps',
        component: () => import('@td/intel/components/steps/steps.md'),
        componentEn: () => import('@td/intel/components/steps/steps.en-US.md'),
      },
      {
        title: 'StickyTool 侧边栏',
        titleEn: 'StickyTool',
        name: 'StickyTool',
        path: '/vue/components/sticky-tool',
        component: () => import('@td/intel/components/sticky-tool/sticky-tool.md'),
        componentEn: () => import('@td/intel/components/sticky-tool/sticky-tool.en-US.md'),
      },
      {
        title: 'Tabs 选项卡',
        titleEn: 'Tabs',
        name: 'tabs',
        path: '/vue/components/tabs',
        component: () => import('@td/intel/components/tabs/tabs.md'),
        componentEn: () => import('@td/intel/components/tabs/tabs.en-US.md'),
      },
    ],
  },
  {
    title: '输入',
    titleEn: 'Form',
    type: 'component',
    children: [
      {
        title: 'AutoComplete 自动填充',
        titleEn: 'AutoComplete',
        name: 'auto-complete',
        path: '/vue/components/auto-complete',
        component: () => import('@td/intel/components/auto-complete/auto-complete.md'),
        componentEn: () => import('@td/intel/components/auto-complete/auto-complete.en-US.md'),
      },
      {
        title: 'Cascader 级联组件',
        titleEn: 'Cascader',
        name: 'cascader',
        path: '/vue/components/cascader',
        component: () => import('@td/intel/components/cascader/cascader.md'),
        componentEn: () => import('@td/intel/components/cascader/cascader.en-US.md'),
      },
      {
        title: 'Checkbox 多选框',
        titleEn: 'Checkbox',
        name: 'checkbox',
        path: '/vue/components/checkbox',
        component: () => import('@td/intel/components/checkbox/checkbox.md'),
        componentEn: () => import('@td/intel/components/checkbox/checkbox.en-US.md'),
      },
      {
        title: 'ColorPicker 颜色选择器',
        titleEn: 'ColorPicker',
        name: 'color-picker',
        path: '/vue/components/color-picker',
        component: () => import('@td/intel/components/color-picker/color-picker.md'),
        componentEn: () => import('@td/intel/components/color-picker/color-picker.en-US.md'),
      },
      {
        title: 'DatePicker 日期选择器',
        titleEn: 'DatePicker',
        name: 'date-picker',
        path: '/vue/components/date-picker',
        component: () => import('@td/intel/components/date-picker/date-picker.md'),
        componentEn: () => import('@td/intel/components/date-picker/date-picker.en-US.md'),
      },
      {
        title: 'Form 表单',
        titleEn: 'Form',
        name: 'form',
        path: '/vue/components/form',
        component: () => import('@td/intel/components/form/form.md'),
        componentEn: () => import('@td/intel/components/form/form.en-US.md'),
      },
      {
        title: 'Input 输入框',
        titleEn: 'Input',
        name: 'input',
        path: '/vue/components/input',
        component: () => import('@td/intel/components/input/input.md'),
        componentEn: () => import('@td/intel/components/input/input.en-US.md'),
      },
      {
        title: 'InputAdornment 输入装饰器',
        titleEn: 'InputAdornment',
        name: 'input-adornment',
        path: '/vue/components/input-adornment',
        component: () => import('@td/intel/components/input-adornment/input-adornment.md'),
        componentEn: () => import('@td/intel/components/input-adornment/input-adornment.en-US.md'),
      },
      {
        title: 'InputNumber 数字输入框',
        titleEn: 'InputNumber',
        name: 'input-number',
        path: '/vue/components/input-number',
        component: () => import('@td/intel/components/input-number/input-number.md'),
        componentEn: () => import('@td/intel/components/input-number/input-number.en-US.md'),
      },
      {
        title: 'TagInput 标签输入框',
        titleEn: 'TagInput',
        name: 'tag-input',
        docType: 'form',
        path: '/vue/components/tag-input',
        component: () => import('@td/intel/components/tag-input/tag-input.md'),
        componentEn: () => import('@td/intel/components/tag-input/tag-input.en-US.md'),
      },
      {
        title: 'Radio 单选框',
        titleEn: 'Radio',
        name: 'radio',
        path: '/vue/components/radio',
        component: () => import('@td/intel/components/radio/radio.md'),
        componentEn: () => import('@td/intel/components/radio/radio.en-US.md'),
      },
      {
        title: 'RangeInput 范围输入框',
        titleEn: 'RangeInput',
        name: 'range-input',
        path: '/vue/components/range-input',
        component: () => import('@td/intel/components/range-input/range-input.md'),
        componentEn: () => import('@td/intel/components/range-input/range-input.en-US.md'),
      },
      {
        title: 'Select 选择器',
        titleEn: 'Select',
        name: 'select',
        path: '/vue/components/select',
        component: () => import('@td/intel/components/select/select.md'),
        componentEn: () => import('@td/intel/components/select/select.en-US.md'),
      },
      {
        title: 'SelectInput 筛选器输入框',
        titleEn: 'SelectInput',
        name: 'select-input',
        docType: 'form',
        path: '/vue/components/select-input',
        component: () => import('@td/intel/components/select-input/select-input.md'),
        componentEn: () => import('@td/intel/components/select-input/select-input.en-US.md'),
      },
      {
        title: 'Slider 滑块',
        titleEn: 'Slider',
        name: 'slider',
        path: '/vue/components/slider',
        component: () => import('@td/intel/components/slider/slider.md'),
        componentEn: () => import('@td/intel/components/slider/slider.en-US.md'),
      },
      {
        title: 'Switch 开关',
        titleEn: 'Switch',
        name: 'switch',
        path: '/vue/components/switch',
        component: () => import('@td/intel/components/switch/switch.md'),
        componentEn: () => import('@td/intel/components/switch/switch.en-US.md'),
      },
      {
        title: 'Textarea 多行文本框',
        titleEn: 'Textarea',
        name: 'textarea',
        path: '/vue/components/textarea',
        component: () => import('@td/intel/components/textarea/textarea.md'),
        componentEn: () => import('@td/intel/components/textarea/textarea.en-US.md'),
      },
      {
        title: 'Transfer 穿梭框',
        titleEn: 'Transfer',
        name: 'transfer',
        path: '/vue/components/transfer',
        component: () => import('@td/intel/components/transfer/transfer.md'),
        componentEn: () => import('@td/intel/components/transfer/transfer.en-US.md'),
      },
      {
        title: 'TimePicker 时间选择器',
        titleEn: 'TimePicker',
        name: 'time-picker',
        path: '/vue/components/time-picker',
        component: () => import('@td/intel/components/time-picker/time-picker.md'),
        componentEn: () => import('@td/intel/components/time-picker/time-picker.en-US.md'),
      },
      // {
      //   title: 'TreeSelect 树选择',
      //   titleEn: 'TreeSelect',
      //   name: 'tree-select',
      //   path: '/vue/components/tree-select',
      //   component: () => import('@td/intel/components/tree-select/tree-select.md'),
      //   componentEn: () => import('@td/intel/components/tree-select/tree-select.en-US.md'),
      // },
      {
        title: 'Upload 上传',
        titleEn: 'Upload',
        name: 'upload',
        path: '/vue/components/upload',
        component: () => import('@td/intel/components/upload/upload.md'),
        componentEn: () => import('@td/intel/components/upload/upload.en-US.md'),
      },
    ],
  },
  {
    title: '数据展示',
    titleEn: 'Data Display',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Avatar 头像',
        titleEn: 'Avatar',
        name: 'avatar',
        path: '/vue/components/avatar',
        component: () => import('@td/intel/components/avatar/avatar.md'),
        componentEn: () => import('@td/intel/components/avatar/avatar.en-US.md'),
      },
      {
        title: 'Badge 徽标',
        titleEn: 'Badge',
        name: 'badge',
        path: '/vue/components/badge',
        component: () => import('@td/intel/components/badge/badge.md'),
        componentEn: () => import('@td/intel/components/badge/badge.en-US.md'),
      },
      {
        title: 'Calendar 日历',
        titleEn: 'Calendar',
        name: 'calendar',
        path: '/vue/components/calendar',
        component: () => import('@td/intel/components/calendar/calendar.md'),
        componentEn: () => import('@td/intel/components/calendar/calendar.en-US.md'),
      },
      {
        title: 'Card 卡片',
        titleEn: 'Card',
        name: 'card',
        docType: 'data',
        path: '/vue/components/card',
        component: () => import('@td/intel/components/card/card.md'),
        componentEn: () => import('@td/intel/components/card/card.en-US.md'),
      },
      {
        title: 'Collapse 折叠面板',
        titleEn: 'Collapse',
        name: 'collapse',
        docType: 'data',
        path: '/vue/components/collapse',
        component: () => import('@td/intel/components/collapse/collapse.md'),
        componentEn: () => import('@td/intel/components/collapse/collapse.en-US.md'),
      },
      {
        title: 'Comment 评论',
        titleEn: 'Comment',
        name: 'comment',
        path: '/vue/components/comment',
        component: () => import('@td/intel/components/comment/comment.md'),
        componentEn: () => import('@td/intel/components/comment/comment.en-US.md'),
      },
      {
        title: 'Descriptions 描述',
        titleEn: 'Descriptions',
        name: 'descriptions',
        path: '/vue/components/descriptions',
        component: () => import('@td/intel/components/descriptions/descriptions.md'),
        componentEn: () => import('@td/intel/components/descriptions/descriptions.en-US.md'),
      },
      {
        title: 'Image 图片',
        titleEn: 'Image',
        name: 'image',
        path: '/vue/components/image',
        component: () => import('@td/intel/components/image/image.md'),
        componentEn: () => import('@td/intel/components/image/image.en-US.md'),
      },
      {
        title: 'ImageViewer 图片预览',
        titleEn: 'ImageViewer',
        name: 'image-viewer',
        path: '/vue/components/image-viewer',
        component: () => import('@td/intel/components/image-viewer/image-viewer.md'),
        componentEn: () => import('@td/intel/components/image-viewer/image-viewer.en-US.md'),
      },
      {
        title: 'List 列表',
        titleEn: 'List',
        name: 'list',
        path: '/vue/components/list',
        component: () => import('@td/intel/components/list/list.md'),
        componentEn: () => import('@td/intel/components/list/list.en-US.md'),
      },
      {
        title: 'Loading 加载',
        titleEn: 'Loading',
        name: 'loading',
        path: '/vue/components/loading',
        component: () => import('@td/intel/components/loading/loading.md'),
        componentEn: () => import('@td/intel/components/loading/loading.en-US.md'),
      },
      {
        title: 'Progress 进度条',
        titleEn: 'Progress',
        name: 'progress',
        path: '/vue/components/progress',
        component: () => import('@td/intel/components/progress/progress.md'),
        componentEn: () => import('@td/intel/components/progress/progress.en-US.md'),
      },
      {
        title: 'Skeleton 骨架屏',
        titleEn: 'Skeleton',
        name: 'skeleton',
        path: '/vue/components/skeleton',
        component: () => import('@td/intel/components/skeleton/skeleton.md'),
        componentEn: () => import('@td/intel/components/skeleton/skeleton.en-US.md'),
      },
      {
        title: 'Statistic 统计数值',
        titleEn: 'Statistic',
        name: 'statistic',
        path: '/vue/components/statistic',
        component: () => import('@td/intel/components/statistic/statistic.md'),
        componentEn: () => import('@td/intel/components/statistic/statistic.en-US.md'),
      },
      {
        title: 'Swiper 轮播框',
        titleEn: 'Swiper',
        name: 'swiper',
        path: '/vue/components/swiper',
        component: () => import('@td/intel/components/swiper/swiper.md'),
        componentEn: () => import('@td/intel/components/swiper/swiper.en-US.md'),
      },
      {
        title: 'Table 表格',
        titleEn: 'Table',
        name: 'table',
        path: '/vue/components/table',
        component: () => import('@td/intel/components/table/table.md'),
        componentEn: () => import('@td/intel/components/table/table.en-US.md'),
      },
      {
        title: 'Tag 标签',
        titleEn: 'Tag',
        name: 'tag',
        path: '/vue/components/tag',
        component: () => import('@td/intel/components/tag/tag.md'),
        componentEn: () => import('@td/intel/components/tag/tag.en-US.md'),
      },
      {
        title: 'Timeline 时间轴',
        titleEn: 'Timeline',
        name: 'timeline',
        path: '/vue/components/timeline',
        component: () => import('@td/intel/components/timeline/timeline.md'),
        componentEn: () => import('@td/intel/components/timeline/timeline.en-US.md'),
      },
      {
        title: 'Tooltip 文字提示',
        titleEn: 'Tooltip',
        name: 'tooltip',
        path: '/vue/components/tooltip',
        component: () => import('@td/intel/components/tooltip/tooltip.md'),
        componentEn: () => import('@td/intel/components/tooltip/tooltip.en-US.md'),
      },
      // {
      //   title: 'Tree 树',
      //   titleEn: 'Tree',
      //   name: 'tree',
      //   path: '/vue/components/tree',
      //   component: () => import('@td/intel/components/tree/tree.md'),
      //   componentEn: () => import('@td/intel/components/tree/tree.en-US.md'),
      // },
      {
        title: 'Watermark 水印',
        titleEn: 'Watermark',
        name: 'watermark',
        path: '/vue/components/watermark',
        component: () => import('@td/intel/components/watermark/watermark.md'),
        componentEn: () => import('@td/intel/components/watermark/watermark.en-US.md'),
      },
      {
        title: 'Rate 评分',
        titleEn: 'Rate',
        name: 'rate',
        docType: 'data',
        path: '/vue/components/rate',
        component: () => import('@td/intel/components/rate/rate.md'),
        componentEn: () => import('@td/intel/components/rate/rate.en-US.md'),
      },
    ],
  },
  {
    title: '消息提醒',
    titleEn: 'Notifications',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Alert 警告提醒',
        titleEn: 'Alert',
        name: 'alert',
        path: '/vue/components/alert',
        component: () => import('@td/intel/components/alert/alert.md'),
        componentEn: () => import('@td/intel/components/alert/alert.en-US.md'),
      },
      {
        title: 'Dialog 对话框',
        titleEn: 'Dialog',
        name: 'dialog',
        path: '/vue/components/dialog',
        component: () => import('@td/intel/components/dialog/dialog.md'),
        componentEn: () => import('@td/intel/components/dialog/dialog.en-US.md'),
      },
      {
        title: 'Drawer 抽屉',
        titleEn: 'Drawer',
        name: 'drawer',
        path: '/vue/components/drawer',
        component: () => import('@td/intel/components/drawer/drawer.md'),
        componentEn: () => import('@td/intel/components/drawer/drawer.en-US.md'),
      },
      {
        title: 'Guide 引导',
        titleEn: 'Guide',
        name: 'guide',
        path: '/vue/components/guide',
        component: () => import('@td/intel/components/guide/guide.md'),
        componentEn: () => import('@td/intel/components/guide/guide.en-US.md'),
      },
      {
        title: 'Message 全局提示',
        titleEn: 'Message',
        name: 'message',
        path: '/vue/components/message',
        component: () => import('@td/intel/components/message/message.md'),
        componentEn: () => import('@td/intel/components/message/message.en-US.md'),
      },
      {
        title: 'Notification 消息通知',
        titleEn: 'Notification',
        name: 'notification',
        path: '/vue/components/notification',
        component: () => import('@td/intel/components/notification/notification.md'),
        componentEn: () => import('@td/intel/components/notification/notification.en-US.md'),
      },
      {
        title: 'Popconfirm 气泡确认框',
        titleEn: 'Popconfirm',
        name: 'popconfirm',
        path: '/vue/components/popconfirm',
        component: () => import('@td/intel/components/popconfirm/popconfirm.md'),
        componentEn: () => import('@td/intel/components/popconfirm/popconfirm.en-US.md'),
      },
      {
        title: 'Popup 弹出层',
        titleEn: 'Popup',
        name: 'popup',
        path: '/vue/components/popup',
        component: () => import('@td/intel/components/popup/popup.md'),
        componentEn: () => import('@td/intel/components/popup/popup.en-US.md'),
      },
    ],
  },
];

const enDocs = docs.map((doc) => {
  return {
    ...doc,
    title: doc.titleEn,
    children: doc?.children?.map((child) => {
      return {
        title: child.titleEn,
        name: `${child.name}-en`,
        path: `${child.path}-en`,
        meta: { lang: 'en' },
        component: child.componentEn || child.component,
      };
    }),
  };
});

export default { docs, enDocs };
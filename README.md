# mowan-portfolio

> mowanyy 的个人作品集网站 — 展示项目、博客与学习路线

![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![UnoCSS](https://img.shields.io/badge/UnoCSS-333333?style=flat-square&logo=unocss&logoColor=white)

## 🌟 功能

- **项目展示** — 分类筛选、GitHub 集成、项目卡片
- **学习路线** — 交互式时间线，展示成长历程
- **博客系统** — Markdown 驱动，标签筛选
- **暗色/亮色** — 一键切换主题
- **响应式设计** — PC / 平板 / 手机

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| Vue 3 + Composition API | 前端框架 |
| Vite | 构建工具 |
| TypeScript | 类型安全 |
| Vue Router 4 (hash mode) | 路由 |
| Pinia | 状态管理 |
| UnoCSS | 原子化 CSS |
| Marked | Markdown 渲染 |
| GitHub Pages | 部署 |

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
src/
├── components/       # 组件
│   ├── layout/       # 布局组件（Header, Footer, ThemeToggle）
│   ├── home/         # 首页组件
│   ├── projects/     # 项目组件
│   ├── blog/         # 博客组件
│   ├── learning/     # 学习路线组件
│   └── common/       # 通用组件
├── views/            # 页面视图
├── data/             # 项目/学习路线数据
├── content/blog/     # Markdown 博客文章
├── router/           # 路由配置
├── stores/           # Pinia 状态
├── composables/      # 组合式函数
└── styles/           # 全局样式
```

## 🌐 部署

推送到 `main` 分支会自动触发 GitHub Actions 构建并部署到 GitHub Pages。

## 📄 许可证

MIT
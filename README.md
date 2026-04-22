<div align="center">

<img src="public/penguin.svg" alt="TKU-B212 penguin mascot" width="140" />

# TKU-B212 維修工讀生手冊

**淡江大學 B212 實習室維修工讀生的線上手冊。**

內容停留於 2018 年，2026 年以 Astro 完整翻新介面與架構。

[**🌐 線上瀏覽**](https://b212-1a27b.firebaseapp.com) ・ [**🎨 Design System**](DESIGN.md) ・ [**📝 Changelog**](CHANGELOG.md)

[![Astro](https://img.shields.io/badge/Astro-6.1-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Hosted on Firebase](https://img.shields.io/badge/Hosted_on-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/products/hosting)

</div>

---

## 為什麼做 v2

2018 年的版本用 **Gulp 4 + Webpack 4 + Pug + jQuery + Materialize CSS**，所有套件多半早已停更。2026 年以 **Astro + Markdown** 全面重寫，同時一字不改地保留 15 份當年的內容。

- 📄 **單一內容來源** — Markdown + zod schema，改一個地方全站生效
- ⚡ **零 JS by default** — 首頁跟所有內頁不需要任何 runtime JS
- 🌓 **深淺雙主題** — 三態切換、無 FOUC、OKLCH 色彩獨立調校
- 🐧 **企鵝回歸** — 原本的吉祥物升級為 hero 視覺錨點
- ♿ **無障礙 & SEO** — 語意化 HTML、`aria-current`、sitemap、OG tags 全部就位
- 🔗 **URL 相容** — Firebase `cleanUrls`，舊的 `/notice.html` 連結不會斷

## Tech stack

| Layer | Tool |
|---|---|
| Framework | [Astro 6](https://astro.build) |
| Content | Markdown + [Content Collections](https://docs.astro.build/en/guides/content-collections/) (zod) |
| Language | TypeScript (strict) |
| Styling | CSS custom properties（詳見 [DESIGN.md](DESIGN.md)） |
| Typography | [Noto Sans TC](https://fonts.google.com/noto/specimen/Noto+Sans+TC) — self-hosted via `@fontsource-variable` |
| Icons | [@lucide/astro](https://lucide.dev) |
| Hosting | [Firebase Hosting](https://firebase.google.com/products/hosting) |

## Quick start

> 需要 **Node 20+**。

```bash
git clone https://github.com/crazycat836/TKUB212Doc.git
cd TKUB212Doc
npm install
npm run dev
```

開啟 <http://localhost:4321>。

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | 本地開發（HMR） |
| `npm run build` | 產出 `dist/` |
| `npm run preview` | 預覽 build 結果 |
| `npm run typecheck` | Astro + TypeScript 型別檢查 |
| `npm run serve:firebase` | `firebase serve`（套用 hosting 設定） |
| `npm run deploy` | 建置並 `firebase deploy` |

## Project layout

```
src/
├── content/
│   └── docs/                 15 頁 Markdown — 單一內容來源
├── content.config.ts         Content collection schema (zod)
├── components/               Sidebar · TOC · ThemeToggle · MobileNav · SkipLink
├── layouts/                  BaseLayout · DocLayout
├── lib/
│   └── nav.ts                側邊欄結構（type-safe）
├── pages/
│   ├── index.astro           首頁
│   └── [...slug].astro       所有內頁從 content collection 產生
├── assets/images/            build 時自動優化成 WebP
└── styles/
    ├── tokens.css            Design tokens（色、字、間距、圓角、motion）
    └── global.css            Reset + prose 規則
```

## 新增 / 修改內容

每一份文件住在 `src/content/docs/*.md`，需要以下 frontmatter：

```yaml
---
title: 頁面標題
description: 一句話摘要（用於 meta description）
order: 10
group: general | printer | repair | copy | other
---
```

若要新增一頁：

1. 於 `src/content/docs/` 建立 `<slug>.md`
2. 於 `src/lib/nav.ts` 將 slug 加入對應群組
3. `npm run dev` 即可看到

## 部署

Firebase Hosting。`firebase.json` 配置：

- Public directory：`dist/`
- `cleanUrls: true` — `/notice.html` ↔ `/notice`
- 圖片 / JS / CSS 使用長效 `Cache-Control: public, max-age=31536000, immutable`
- HTML 則為 `no-cache`

```bash
npx firebase login     # 第一次才需要
npm run deploy          # = npm run build && firebase deploy
```

## 文件

- **[DESIGN.md](DESIGN.md)** — design tokens、字型、間距、元件準則、a11y 規範
- **[CHANGELOG.md](CHANGELOG.md)** — 版本紀錄

## License

[MIT](LICENSE) © [crazycat836](https://github.com/crazycat836)

---

<div align="center">
<sub>內容 © 2016–2018 · 介面 2026 重新設計 · Built with <a href="https://astro.build">Astro</a></sub>
</div>

# TKU-B212 維修工讀生手冊

一份給淡江大學 B212 實習室維修工讀生的線上手冊，整理自輪班期間的工作筆記，共 15 個主題。內容最後更新於 2018 年，現以歷史版本保留。

**Live**: <https://b212-1a27b.firebaseapp.com>

## Stack

- [Astro 6](https://astro.build/) — static site
- Markdown + [Content Collections](https://docs.astro.build/en/guides/content-collections/) — 單一內容來源，schema 驗證
- 純 CSS + CSS custom properties — design tokens 驅動
- [Noto Sans TC](https://fonts.google.com/noto/specimen/Noto+Sans+TC)（self-hosted via `@fontsource-variable/noto-sans-tc`）
- [@lucide/astro](https://lucide.dev/) — 圖示
- TypeScript（strict）
- Firebase Hosting — 靜態部署

## Getting started

需要 **Node 20+**。

```bash
npm install
npm run dev           # http://localhost:4321
```

## Scripts

| 指令 | 用途 |
| --- | --- |
| `npm run dev` | 本地開發（熱更新） |
| `npm run build` | 產出 `dist/` |
| `npm run preview` | 預覽 build 結果 |
| `npm run typecheck` | Astro / TypeScript 型別檢查 |
| `npm run serve:firebase` | `firebase serve`（套用 hosting config） |
| `npm run deploy` | 建置 + `firebase deploy` |

## Project layout

```
src/
├── content/
│   └── docs/                 # 每一頁一份 Markdown（單一內容來源）
├── content.config.ts         # zod schema
├── components/               # Sidebar, TOC, ThemeToggle, MobileNav, SkipLink
├── layouts/                  # BaseLayout, DocLayout
├── lib/
│   └── nav.ts                # 側邊欄結構（type-safe）
├── pages/
│   ├── index.astro           # 首頁
│   └── [...slug].astro       # 所有內頁從 content collection 產生
├── assets/images/            # Markdown 圖片（Astro 自動優化成 WebP）
└── styles/
    ├── tokens.css            # Design tokens（顏色、字、間距、圓角、motion）
    └── global.css            # Reset + prose 規則
```

## 新增 / 修改內容

編輯 `src/content/docs/*.md`。每份檔案需要下列 frontmatter：

```yaml
---
title: 頁面標題
description: 一句話摘要（給 meta description 用）
order: 10
group: general | printer | repair | copy | other
---
```

若要新增一頁：

1. 於 `src/content/docs/` 建立 `.md` 檔
2. 於 `src/lib/nav.ts` 將 slug 加入對應群組
3. `npm run dev` 即可看到

## 設計系統

見 [`DESIGN.md`](./DESIGN.md) — 色彩、字型、間距、元件原則、a11y 規範。所有 CSS 變數的正典來源在 `src/styles/tokens.css`。

## 部署

Firebase Hosting。`firebase.json` 已配置：

- Public: `dist/`
- `cleanUrls: true` — `/notice.html` ↔ `/notice`
- 圖片 / JS / CSS 使用長效 Cache-Control

一鍵部署：

```bash
npm run deploy
```

## License

MIT — see [LICENSE](./LICENSE).

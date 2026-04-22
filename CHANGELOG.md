# Changelog

本專案遵循 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.1.0/)，版本號採用 [Semantic Versioning](https://semver.org/lang/zh-TW/)。

## [2.0.0] — 2026-04-22

完整重寫。2018 年的 Gulp / Webpack / Pug / jQuery / Materialize 技術棧全面汰換為 Astro + Markdown，但 15 份內容一字未改。URL 透過 Firebase `cleanUrls` 保持相容（舊的 `/notice.html` 仍可訪問）。

### Added
- Astro 6 + TypeScript (strict)
- Markdown Content Collections（zod schema 驗證）—— 內容成為單一來源
- 自訂 CSS design token 系統（OKLCH 色彩、流體字級、4px 間距）—— 見 [`DESIGN.md`](DESIGN.md)
- 深色 / 淺色 / 系統 三態主題切換（無 FOUC 閃爍）
- 右側 scroll-spy 目錄
- 手機版 `<dialog>` 側拉選單
- `skip-to-content` 連結、`aria-current` 狀態、`:focus-visible` ring
- `@astrojs/sitemap` 自動產生，含 Open Graph + canonical
- Hero 企鵝吉祥物回歸，暗色模式加 halo 輪廓
- 首頁兩枚版本 pill：區分內容年代（2016–2018）與介面年代（2026）
- `firebase.json` 加入長 cache header

### Changed
- 內容改以 Markdown 撰寫（取代 Pug + HTML 雙重結構）
- Noto Sans TC 改為 self-hosted variable font（不打 Google Fonts）
- Material Icons 換成 `@lucide/astro`（tree-shake 過的 SVG）
- Canonical URL 去除 `.html` 後綴

### Removed
- Gulp 4、Webpack 4 以及所有相關 plugin（UglifyJS、optimize-css-assets 等）
- jQuery、Materialize CSS、`jquery.lazyload.js`
- `gulpfile.js`、`webpack.config.js`
- `server.js`、`index.js`（Firebase Hosting 靜態託管不需要）
- `src/pugs/`、`src/page-contents/`、`src/views/`、`src/js/`、`src/styles/{app,materialize}.css`
- `src/imgs back/`（備份目錄）
- `changlog.md`（原檔名 typo，併入本檔）

### Fixed
- 正確宣告 `<html lang="zh-Hant">`
- Heading 階層不再跳級
- 所有圖片帶 `width` / `height`（CLS = 0）

## [1.1.0] — 2018-10-01

傳統 Gulp / Webpack / Pug 技術棧的最後一版。

## [1.0.0] — 2016

首次公開版本。

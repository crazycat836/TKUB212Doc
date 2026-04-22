# TKU-B212 Docs · Design System

> 這份文件記錄整個站的設計決策與 token 結構。所有 CSS 變數的正典來源是 [`src/styles/tokens.css`](src/styles/tokens.css)。修改 token 前請先更新這份文件。

---

## 1. 設計原則 Principles

1. **以閱讀為核心 (Reading-first)**
   文字排版、行高、字距優先於裝飾。任何 UI 裝飾不能干擾長篇閱讀。

2. **零裝飾 (Clarity over decoration)**
   不使用多餘的漸層、光暈、假立體。需要層次時，先用 **typographic scale** 與**間距**解決。

3. **語意化階層 (Scale contrast)**
   透過字級 + 重量差距建立視覺重點；避免用顏色暗示階層。

4. **雙主題對等 (Light ≡ Dark)**
   深色不是 light 模式反色，而是獨立設計過的主題。兩邊對比度、色溫、景深都重新調校。

5. **尊重無障礙與使用者偏好**
   `prefers-reduced-motion`、`prefers-color-scheme`、鍵盤導航、focus ring、heading 階層都要做到位。

---

## 2. 色彩系統 Color

色彩全部以 **OKLCH** 表達，確保深淺模式的感知亮度對齊、色相穩定。

### 2.1 Semantic tokens

| Token | Light | Dark | 用途 |
|---|---|---|---|
| `--color-bg` | `oklch(99% 0.003 250)` | `oklch(16% 0.012 260)` | 頁面底色 |
| `--color-surface` | `oklch(100% 0 0)` | `oklch(19% 0.014 260)` | 卡片、側欄面板 |
| `--color-surface-elevated` | `oklch(98% 0.005 250)` | `oklch(22% 0.015 260)` | 懸浮層、下拉選單 |
| `--color-surface-sunken` | `oklch(96.5% 0.006 250)` | `oklch(14% 0.01 260)` | 內陷背景（code block、table header） |
| `--color-text` | `oklch(18% 0.015 260)` | `oklch(96% 0.005 250)` | 主要文字 |
| `--color-text-muted` | `oklch(46% 0.012 260)` | `oklch(72% 0.012 250)` | 次要文字、圖說 |
| `--color-text-subtle` | `oklch(62% 0.01 260)` | `oklch(56% 0.01 250)` | 占位、meta |
| `--color-border` | `oklch(91% 0.008 260)` | `oklch(28% 0.016 260)` | 元件邊線、分隔線 |
| `--color-border-strong` | `oklch(84% 0.012 260)` | `oklch(36% 0.018 260)` | 強調邊線 |
| `--color-accent` | `oklch(58% 0.12 200)` | `oklch(74% 0.13 200)` | 主色（teal/青綠） |
| `--color-accent-hover` | `oklch(52% 0.13 200)` | `oklch(80% 0.12 200)` | hover 狀態 |
| `--color-accent-soft` | `oklch(95% 0.03 200)` | `oklch(28% 0.04 200)` | 柔色背景（selection、blockquote） |
| `--color-ring` | `oklch(58% 0.12 200)` | `oklch(74% 0.13 200)` | focus ring |

### 2.2 對比度

所有 text/background 組合須達到 **WCAG AA（正文 4.5:1，大字 3:1）起跳**，目標 AAA。

| 組合 | Light | Dark |
|---|---|---|
| `text` on `bg` | ~16:1 | ~15:1 |
| `text-muted` on `bg` | ~7:1 | ~7:1 |
| `accent` on `bg` | ~4.8:1 | ~7.5:1 |

> 當更動 accent 或 text 任一色時，須重新以 `apca` / `oklch.com` 驗證。

### 2.3 色彩使用規則

- 不用 `--color-danger` 等語意色做主要 CTA；它們僅用於狀態。
- 色彩**不能是資訊唯一載體**（例：active nav item 用顏色 **+** 粗體 **+** 左邊條）。

---

## 3. 字型系統 Typography

### 3.1 Families

```
--font-sans: "Noto Sans TC Variable", ui-sans-serif, system-ui, ...
--font-mono: ui-monospace, SFMono-Regular, Menlo, ...
```

- **Sans：Noto Sans TC Variable**（自架 via `@fontsource-variable`），不打 Google Fonts 請求。
- **Mono**：走系統堆疊；不額外載字型。此站內容以中文為主，幾乎不需要。

### 3.2 Type scale（流體）

| Token | 範圍 | 用途 |
|---|---|---|
| `--text-xs` | 12px | badge、caption |
| `--text-sm` | 14px | meta、table、TOC |
| `--text-base` | 15–16px（clamp） | 正文 |
| `--text-lg` | 17–18px（clamp） | lede、引言 |
| `--text-xl` | 19–21px（clamp） | h3 |
| `--text-2xl` | 23–26px（clamp） | h2 |
| `--text-3xl` | 30–34px（clamp） | h1（內頁） |
| `--text-4xl` | 38–48px（clamp） | 首頁 h1 |
| `--text-hero` | 44–68px（clamp） | Hero 標題 |

### 3.3 Line-height / tracking / weight

| Token | 值 |
|---|---|
| `--leading-tight` | 1.25（標題） |
| `--leading-snug` | 1.4（副標題） |
| `--leading-normal` | 1.6（一般區塊） |
| `--leading-relaxed` | 1.8（正文、中文長篇） |
| `--tracking-tight` | -0.01em（大標題） |
| `--tracking-normal` | 0 |
| `--tracking-wide` | 0.04em（標籤、all-caps） |
| `--weight-regular` | 400 |
| `--weight-medium` | 500 |
| `--weight-bold` | 700 |

### 3.4 中文排版守則

- 正文 `line-height` **不得低於 1.7**。
- `word-break: keep-all` + `overflow-wrap: anywhere` — 中文照詞斷行，長英文單字 / URL 可斷。
- `text-wrap: pretty` — 改善寡字問題。
- `font-feature-settings: "palt", "kern"` — 啟用日文/中文比例字距。
- 不壓縮 `letter-spacing`；中文字型普遍已含適當字寬。

---

## 4. 間距 Spacing

4px base unit。所有間距用 token，**不允許寫死 px**（boxing 例外僅限一次性 micro-adjustments）。

| Token | 值 |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-24` | 96px |
| `--space-section` | `clamp(48px, ..., 96px)` — 區塊/區塊間 |

**節奏規則**：同層級元素用相同 space token；跨層級用 +2 級跳（例：同段落內 `space-2`，段間 `space-4`，區塊間 `space-section`）。

---

## 5. Radius / Shadow / Border

### Radius

| Token | 值 | 用途 |
|---|---|---|
| `--radius-sm` | 4px | inline code、badge、input |
| `--radius-md` | 8px | 按鈕、卡片（預設） |
| `--radius-lg` | 12px | 大卡片、對話框 |
| `--radius-xl` | 16px | 極少用 |
| `--radius-full` | 9999px | pill、圓形頭像 |

### Shadow

淺色模式走細緻雙層陰影；深色模式改以 **邊框 + 輕陰影** 製造層次。

- `--shadow-xs`：最輕；用於 hover elevation
- `--shadow-sm`：卡片預設
- `--shadow-md`：懸浮 menu
- `--shadow-lg`：對話框、側拉

**深色模式不得使用 light 的陰影**。若需要層次，優先用 `border` + `--color-surface-elevated`。

---

## 6. Motion

| Token | 值 | 用途 |
|---|---|---|
| `--duration-instant` | 100ms | 色彩切換、active press |
| `--duration-fast` | 160ms | hover、focus |
| `--duration-normal` | 240ms | 開關、fade |
| `--duration-slow` | 400ms | 側拉、panel |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | 進場 |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | 持續互動 |

**規則**

- 只動 `transform` / `opacity` / `color` / `background-color` / `border-color`。
- 不動 `width` / `height` / `top` / `left` / `margin` / `padding`。
- `prefers-reduced-motion: reduce` 一律關閉所有動畫。

---

## 7. 元件原則 Components

### 7.1 Header

固定高度 `--layout-header`（56px）；桌機顯示 logo 左、theme toggle + mobile menu 右。滾動時 `backdrop-filter: blur(12px)` + 半透明底色。

### 7.2 Sidebar（左）

- 寬度 `--layout-sidebar`（288px）。
- 分組可折疊；**當前頁所在群組預設展開**。
- 活躍項（`aria-current="page"`）視覺特徵（缺一不可）：
  1. 色彩：`--color-accent` 文字
  2. 字重：`var(--weight-medium)`
  3. 左邊條：2px `--color-accent`
- 桌機固定顯示；手機收進漢堡選單。

### 7.3 TOC（右）

- 寬度 `--layout-toc`（224px）。
- 只顯示 `h2` / `h3`。
- `IntersectionObserver` 實作 scroll spy；活躍 heading 顯示 `--color-accent` + 粗體。
- 只在 `lg` breakpoint (1024px+) 顯示；平板以下隱藏。

### 7.4 ThemeToggle

三態：**system / light / dark**。

- 初始化時 inline script 於 `<head>` 內執行，避免 FOUC。
- 選擇寫入 `localStorage["theme"]`。
- UI 上用三圖示切換：`Monitor` / `Sun` / `Moon`（@lucide/astro）。

### 7.5 MobileNav

- 僅 `md` breakpoint (768px) 以下顯示觸發按鈕。
- 開啟時 `<dialog>` 元素從右側滑入，蓋板用 `--color-overlay`。
- `Esc`、蓋板 click、inside link click 都關閉。

### 7.6 SkipLink

焦點進入時從頂端滑入。指向 `<main id="content">`。

### 7.7 Prose（Markdown render）

- `max-width: var(--layout-prose-max)`（704px）—— 中文閱讀最舒服寬度約 30–38 個中文字。
- 圖片自動加邊框 + 輕陰影 + 圓角。
- blockquote 左條用 accent 色。
- `h2` 上方加 `border-top` 作為視覺分段（不用大留白，資訊密度較高的文件更適合這種方式）。

---

## 8. Breakpoints

| 別名 | 寬度 | 主要差異 |
|---|---|---|
| `sm` | ≥ 640px | 兩欄 index feature |
| `md` | ≥ 768px | 顯示左側 Sidebar（隱藏漢堡） |
| `lg` | ≥ 1024px | 顯示右側 TOC（三欄 layout） |
| `xl` | ≥ 1280px | 內容區最大寬 |

Layout 模式：

- **< md (mobile)**：單欄 + 漢堡 nav。
- **md – lg (tablet)**：左 Sidebar + 主欄（無 TOC）。
- **≥ lg (desktop)**：三欄（Sidebar / Main / TOC）。

---

## 9. 無障礙 Accessibility

- `<html lang="zh-Hant">`
- `skip-to-content` link（見 `SkipLink.astro`）
- 導航有 `aria-label="Primary"` / `aria-label="Table of contents"`
- 活躍頁面用 `aria-current="page"`，不僅靠視覺
- 所有圖片有 `alt`；裝飾圖 `alt=""` + `aria-hidden="true"`
- Heading 階層不跳級（每頁 1 × h1、若干 h2、h3 屬於 h2 下）
- Focus ring 使用 `:focus-visible`，寬度 2px，偏移 2px
- 色彩對比驗證 AA 起跳（見 §2.2）
- 所有互動元件 Tab 可達；`<button>` / `<a>` 區分正確（跳轉用 a、切換用 button）
- `prefers-reduced-motion` 自動關閉動畫

---

## 10. SEO

- 每頁 `<title>` 格式：`{page} — TKU-B212 維修工讀生手冊`
- 每頁 `meta[name=description]` 由 Markdown frontmatter 的 `description` 驅動
- Open Graph：`og:title` / `og:description` / `og:type` / `og:url` / `og:image`
- `sitemap.xml` 自動產生（via `@astrojs/sitemap`）
- 同一語言版本，`<link rel="canonical">` 指向自己的 production URL

---

## 11. 維護守則

1. **不新增 token 不能解決的值**：若要加色/字/間距，先思考是否可以複用現有 token。
2. **新增 token 必須同步更新本文件**。
3. **所有元件必須支援 light + dark 兩主題**。不能只在 light 測試。
4. **變動前先跑 Lighthouse**；變動後若 Accessibility / Performance 分數下降必須修復。

# 如何開始...

## 前言

這個網站，從發想、構思、到成品花了大約一個禮拜，但網站內容是在一年前便開始寫的

從一開始的 Google 文件、HackPad、GitBook 到現在的 WebSite，中間經歷過數次的平台轉換，內容修正不下數百次，希望在看完後，會對工作內容有更加全面的認識

下面列出了此網站的頁面架構

```
- 上班注意事項
- 電話禮儀
- 辦公室常見狀況
- 事件申請系統
- 印表機
  - 修改 IP
  - 耗材更換
- 維修常見狀況
  - 電腦
  - 印表機
- 對拷
  - 硬碟對拷
  - 網路對拷
- 硬碟掃描
- RHD
- 關前後棟
```

## 事前準備

在本機安裝 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。

網站使用到 [ES2015+](http://es6.ruanyifeng.com/)、[pug](https://pugjs.org/api/getting-started.html)、[webpack](https://webpack.js.org)、[firebase](https://firebase.google.com)、[Materialize](https://materializecss.com)，提前瞭解和學習這些知識會非常有幫助。

### 後端

使用 Node.JS + Express 在本機測試

用 Google Firebase 做 Hosting

### 前端

採用 HTML + CSS + JavaScript 去建構整個頁面

HTML：Pug 模板

CSS：Materialize

JavaScript：Jquery

Google Font API：Material icons、中文字型－思源黑體

Gulp：Pug 模板 轉成 HTML

Webpack：將 CSS, img, JavaScript 打包，壓縮 JavaScript, CSS，加速載入速度，產生靜態內容 



## 安裝

從 GitHub 直接抓取最新的程式碼。

```bash
$ git clone https://github.com/crazycat836/TKUB212Doc.git my-project
$ cd my-project
```

## 目錄結構

下面是整個專案的目錄結構，dist 資料夾在編譯過後才會出現

```bash
├── LICENSE
├── README.md
├── changlog.md
├── dist                   # 建置完之後的檔案存放位置
├── firebase.json
├── getting-started.md     
├── gulpfile.js            # gulp 設定檔
├── app.js               # webpack entry point                 
├── package-lock.json
├── package.json
├── server.js
├── src                    
│   ├── imgs               # 壓縮過後的圖片
│   ├── imgs back          # 原始圖片
│   ├── js
│   │   ├── init.js        # 初始化 Materialize Javascript
│   │   └── jquery.lazyload.js 
│   ├── page-contents      # 網頁主要內容
│   ├── pugs               
│   │   ├── common         # 網頁通用模板
│   ├── styles
│   │   ├── app.css
│   │   └── materialize.css
│   └── views              # pug 模版產生出的網頁，最終檔案皆放在 dist
└── webpack.config.js
```

## 本機開發

安装套件。

```bash
$ npm install
```

進入 page-contents 修改或新增網頁內容。

```bash
$ npm start
```

修改完成後執行下列指令，建置網頁。

```bash
$ npm run build
```
![](https://user-images.githubusercontent.com/4694414/46293225-6e074700-c5c5-11e8-84e5-600885dc7878.png)


```bash
$ npm run test
```
啟動完成打開瀏覽器 [http://localhost:5000](http://localhost:5000)，看到下列頁面代表成功建置。

![](https://user-images.githubusercontent.com/4694414/46293316-b9215a00-c5c5-11e8-8e33-eaf4e7ddefcd.png)

最後部屬網頁到 firebase 

```bash
$ npm run deploy
```
![](https://user-images.githubusercontent.com/4694414/46293481-38169280-c5c6-11e8-94a5-6309f315cda0.png)
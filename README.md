# TKU B212 維修工讀生教學 - 1.0.5
------------
B212 維修工讀生的維修教學文件

> 這是一份參考文件，所有事情以工讀生手冊上，或是辦公室大哥大姐說的為準

##更新紀錄
------------
`2017/07/29 更新`

### 更新
* 更新 node package
* 網頁模版 jade -> pug

### 其他
* 內容修正
* 新增 LOGO

`2017/05/18 更新`

### 更新
* 更新 node package
* webpack 升級到 V2

### 其他
* 內容修正
* CSS 壓縮處理，加快網頁載入速度

`2016/11/6 更新`

### bug修正
* 修正導覽列位置不正常的問題
* 修正字型載入時頁面會閃爍

### 其他
* 縮小 CSS 體積
* 修正圖片連結
* 文字修正

`2016/11/3 更新`

* 網頁效能調校、文字修正

`2016/10/29 更新`

* 第一個版本發佈

## 架構

使用 WebStorm 作為編輯器

git 作為版本控制

### 後端
------------

使用 Node.JS + Express 在本機測試

測試沒問題後，用 Google Firebase 做 Hosting

### 前端
------------

採用 HTML + CSS + JavaScript 去建構整個頁面

HTML：Pug 模板

CSS：Materialize

JavaScript：Jquery

Google Font API：Material icons、中文字型－思源黑體

Gulp：Pug 模板 轉成 HTML

Webpack：將 CSS, img, JavaScript 打包，壓縮 JavaScript, CSS，加速載入速度，產生靜態內容 


## 想要幫忙?
------------

如果有任何錯誤或是遺漏，請大家多多回報，我會盡快修改

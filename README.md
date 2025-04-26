# Frontend Demo

這是一個使用 [Vite](https://vitejs.dev/)、[Vue 3](https://vuejs.org/)、[Element Plus](https://element-plus.org/) 建立的簡單互動式前端範例。  
主要展示基礎的 UI 元件互動與專案架構，證明可以獨立完成前端環境搭建與開發。

## Overview

畫面示意：

- 一個按鈕
- 點擊後顯示歡迎訊息

## Environment

- Node.js 18.x or up
- npm 9.x or up

## Install and Run

1. **Download Project**

```bash
git clone https://github.com/reshine710/FrontendDemo.git
```

2. **Go into Project Folder**

```bash
cd FrontendDemo
```

3. **Install Dependency Packages**

```bash
npm install
```

4. **Run Development Server**

```bash
npm run dev
```

5. **Open Website and Check**

```
http://localhost:5173/
```

即可看到畫面！

## Tech Stack

- [Vite 4](https://vitejs.dev/)
- [Vue 3 Composition API](https://vuejs.org/)
- [Element Plus UI 元件庫](https://element-plus.org/)

## Structure

```
frontend-demo/
├── public/            # 靜態資源
├── src/
│   ├── assets/        # 圖片、樣式檔
│   ├── components/    # 共用元件（可擴充）
│   ├── views/         # 頁面（可擴充）
│   ├── router/        # 路由（尚未使用）
│   ├── store/         # 狀態管理（尚未使用）
│   ├── App.vue        # 主組件
│   ├── main.js        # 程式入口
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Contact Me

如需更多資訊或合作洽談，歡迎聯絡：
- Email: regain.sunshine@gmail.com

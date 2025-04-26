import React from 'react';

/**
 * 首頁，說明專案用途與導覽。
 */
const Home: React.FC = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-2xl font-bold">Frontend Demo Project</h1>
    <p className="text-base text-gray-700">
      這是一個展示現代前端互動式 UI 的範例專案。<br />
      請透過左側選單切換各個功能頁面：
    </p>
    <ul className="list-disc list-inside text-gray-600 space-y-1">
      <li>首頁：簡介與導覽</li>
      <li>碼表：Start/Pause/Reset，精確到毫秒</li>
      <li>項目列表：可排序表格，展示假資料</li>
      <li>放煙火：動畫展示，並有按鈕禁用機制</li>
    </ul>
    <p className="text-sm text-gray-500 mt-4">
      請從左側選單體驗各功能。
    </p>
  </div>
);

export default Home;

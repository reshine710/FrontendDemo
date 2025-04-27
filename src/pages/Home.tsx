import React from 'react';
import { Card, Typography, List as AntdList } from 'antd';

const { Title, Paragraph, Text } = Typography;

/**
 * 首頁，說明專案用途與導覽。
 */
const Home: React.FC = () => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <Card
      style={{
        width: '100%',
        maxWidth: 600,
        minWidth: 320,
        margin: '0 auto',
        whiteSpace: 'normal', 
        wordBreak: 'break-word', 
      }}
    >
      <Title level={2}>Frontend Demo Project</Title>
      <Paragraph>
        這是一個展示現代前端互動式 UI 的範例專案。<br />
        請透過左側選單切換各個功能頁面：
      </Paragraph>
      <AntdList
        size="small"
        dataSource={[
          '首頁：簡介與導覽',
          '碼表：Start/Pause/Reset，精確到毫秒',
          '項目列表：可排序表格，展示假資料',
          '放煙火：動畫展示，並有按鈕禁用機制',
        ]}
        renderItem={item => <AntdList.Item><Text>{item}</Text></AntdList.Item>}
        style={{ marginBottom: 16 }}
      />
      <Paragraph type="secondary" style={{ marginTop: 16 }}>
        請從左側選單體驗各功能。
      </Paragraph>
    </Card>
  </div>
);

export default Home;

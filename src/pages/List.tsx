import React from 'react';
import SortableTable from '../components/SortableTable';
import { Card } from 'antd';

/**
 * 項目列表頁面，展示可排序的假資料表格。
 */
const List: React.FC = () => {
  return (
    <Card title="項目列表 List" style={{ margin: 0 }}>
      <SortableTable />
    </Card>
  );
};

export default List;

import React from 'react';
import SortableTable from '../components/SortableTable';

/**
 * 項目列表頁面，展示可排序的假資料表格。
 */
const List: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">項目列表 List</h2>
      <SortableTable />
    </div>
  );
};

export default List;

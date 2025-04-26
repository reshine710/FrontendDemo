import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  value: number;
}

const FAKE_ITEMS: Item[] = [
  { id: 1, name: 'Alpha', value: 23 },
  { id: 2, name: 'Bravo', value: 17 },
  { id: 3, name: 'Charlie', value: 42 },
  { id: 4, name: 'Delta', value: 5 },
  { id: 5, name: 'Echo', value: 31 },
  { id: 6, name: 'Foxtrot', value: 14 },
  { id: 7, name: 'Golf', value: 28 },
  { id: 8, name: 'Hotel', value: 36 },
  { id: 9, name: 'India', value: 9 },
  { id: 10, name: 'Juliet', value: 50 },
];

/**
 * 排序型表格元件，點擊表頭可切換升/降序。
 */
const SortableTable: React.FC = () => {
  const [sortKey, setSortKey] = useState<'id' | 'name' | 'value'>('id');
  const [ascending, setAscending] = useState(true);

  // 切換排序欄位與方向
  const handleSort = (key: 'id' | 'name' | 'value') => {
    if (sortKey === key) {
      setAscending(!ascending);
    } else {
      setSortKey(key);
      setAscending(true);
    }
  };

  // 排序後的資料
  const sortedItems = [...FAKE_ITEMS].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return ascending ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return ascending ? 1 : -1;
    return 0;
  });

  // 箭頭符號
  const arrow = (key: 'id' | 'name' | 'value') => {
    if (sortKey !== key) return '';
    return ascending ? '▲' : '▼';
  };

  return (
    <table className="min-w-full bg-white rounded shadow overflow-hidden">
      <thead>
        <tr>
          <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('id')}>
            ID {arrow('id')}
          </th>
          <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('name')}>
            Name {arrow('name')}
          </th>
          <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('value')}>
            Value {arrow('value')}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map(item => (
          <tr key={item.id} className="even:bg-gray-50">
            <td className="px-4 py-2 text-center">{item.id}</td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2 text-right">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;

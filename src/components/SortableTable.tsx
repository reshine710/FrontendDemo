import React from 'react';
import { Table } from 'antd';

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

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: (a: Item, b: Item) => a.id - b.id,
    defaultSortOrder: 'ascend' as const,
    width: 80,
    align: 'center' as const,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a: Item, b: Item) => a.name.localeCompare(b.name),
  },
  {
    title: 'Value',
    dataIndex: 'value',
    sorter: (a: Item, b: Item) => a.value - b.value,
    align: 'right' as const,
  },
];

/**
 * 排序型表格元件，點擊表頭可切換升/降序。
 */
const SortableTable: React.FC = () => (
  <Table
    dataSource={FAKE_ITEMS}
    columns={columns}
    rowKey="id"
    pagination={false}
    bordered
    size="middle"
  />
);

export default SortableTable;

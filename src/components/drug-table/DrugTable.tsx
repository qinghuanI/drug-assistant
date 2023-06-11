import type { ReactElement } from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from './typings.ts';
import { data } from './data.ts';
import { useStyles } from './styles.ts';

const columns: ColumnsType<DataType> = [
  {
    title: '序号',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: '药品名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: '类别',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '参考价格（元）',
    dataIndex: 'price',
    key: 'price',
    render: (text) => <span>{text || '暂无价格'}</span>,
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '用途',
    key: 'application',
    dataIndex: 'application',
    render: (text) => <span>{text || '暂无用途'}</span>,
  },
];

const DrugTable = (): ReactElement => {
  const classes = useStyles();

  return <Table className={classes.tableWrapper} columns={columns} dataSource={data} />;
};

export default DrugTable;

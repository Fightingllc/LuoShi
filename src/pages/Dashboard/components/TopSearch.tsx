import { InfoCircleOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Card, Col, Row, Table, Tooltip } from 'antd';
import numeral from 'numeral';
import React from 'react';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import NumberInfo from './NumberInfo';
import Trend from './Trend';
import ReactEcharts from "echarts-for-react"

const TopSearch = ({
  loading,
  visitData2,
  searchData,
  dropdownGroup,
}: {
  loading: boolean;
  visitData2: DataItem[];
  dropdownGroup: React.ReactNode;
  searchData: DataItem[];
}) => {
  const { styles } = useStyles();
  const columns = [
    {
      title: '排名',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '搜索关键词',
      dataIndex: 'keyword',
      key: 'keyword',
      render: (text: React.ReactNode) => <a href="/">{text}</a>,
    },
    {
      title: '用户数',
      dataIndex: 'count',
      key: 'count',
      sorter: (
        a: {
          count: number;
        },
        b: {
          count: number;
        },
      ) => a.count - b.count,
    },
    {
      title: '周涨幅',
      dataIndex: 'range',
      key: 'range',
      sorter: (
        a: {
          range: number;
        },
        b: {
          range: number;
        },
      ) => a.range - b.range,
      render: (
        text: React.ReactNode,
        record: {
          status: number;
        },
      ) => (
        <Trend flag={record.status === 1 ? 'down' : 'up'}>
          <span
            style={{
              marginRight: 4,
            }}
          >
            {text}%
          </span>
        </Trend>
      ),
    },
  ];

 const getOption = ()=>{
  let option = {
    // title: {
    //   text: '合同趋势'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['合同签订', '合同续约', '合同变更', '合同执行']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value',
      interval: 100,
      max:1200
    },
    series: [
      {
        name: '合同签订',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210, 220, 182, 191, 234, 290]
      },
      {
        name: '合同续约',
        type: 'line',
        stack: 'Total',
        data: [100, 112, 91, 124, 80, 200, 190, 180, 162, 171, 204, 250]
      },
      {
        name: '合同变更',
        type: 'line',
        stack: 'Total',
        data: [80, 92, 71, 104, 70, 180, 170, 160, 142, 151, 184, 220]
      },
      {
        name: '合同执行',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320, 350, 362, 351, 384, 410]
      }
    ]
  };
  
  
  
    return option;
};
  return (
    <Card
      loading={loading}
      bordered={false}
      title="合同趋势"
      extra={dropdownGroup}
      style={{
        height: '90%',

      }}
    >
     <ReactEcharts style={{marginTop:-10}} option={getOption()} />
    </Card>
  );
};
export default TopSearch;

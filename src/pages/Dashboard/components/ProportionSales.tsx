import { Pie } from '@ant-design/plots';
import { Card, Radio, Typography } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';
import numeral from 'numeral';
import React from 'react';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
const { Text } = Typography;
import ReactEcharts from "echarts-for-react"
const ProportionSales = ({
  dropdownGroup,
  salesType,
  loading,
  salesPieData,
  handleChangeSalesType,
}: {
  loading: boolean;
  dropdownGroup: React.ReactNode;
  salesType: 'all' | 'online' | 'stores';
  salesPieData: DataItem[];
  handleChangeSalesType?: (e: RadioChangeEvent) => void;
}) => {
  const { styles } = useStyles();
  const getOption = ()=>{
    let option = {
      // title: {
      //   text: '合同类型分布',
      //   subtext: 'Fake Data',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['标准采购合同', '非标采购合同', '服务合同', '租赁合同', '销售合同']
      },
      series: [
        {
          name: '合同类型',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 80, name: '标准采购合同' },
            { value: 45, name: '非标采购合同' },
            { value: 30, name: '服务合同' },
            { value: 20, name: '租赁合同' },
            { value: 60, name: '销售合同' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    
    
    
      return option;
  };
  return (
    <Card
      loading={loading}
      // className={styles.salesCard}
      bordered={false}
      title="合同类型分布"
      style={{
        height: '90%',
      }}
      // extra={
        
      // }
    >
       <ReactEcharts style={{marginTop:20}} option={getOption()} />
    </Card>
  );
};
export default ProportionSales;

import { InfoCircleOutlined } from '@ant-design/icons';
import { Area, Column } from '@ant-design/plots';
import { Col, Progress, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import Yuan from '../utils/Yuan';
import { ChartCard, Field } from './Charts';
import Trend from './Trend';
import { StatisticCard } from '@ant-design/pro-components';
import Icon from '@ant-design/icons/lib/components/Icon';
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};
const imgStyle = {
  display: 'block',
  width: 40,
  height: 40,
};
const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title=""
          action={
            <Tooltip title="显示系统中总共的合同数量" >
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          // total={() => <Yuan>126560</Yuan>}
          footer={<Field label="日合同数量" value={`16`} />}
          contentHeight={92}
        >
          <StatisticCard
                statistic={{
                  title: '合同总数',
                  value: 200,
                  icon: (
                    
                    <img
                      style={imgStyle}
                      src="https://img.icons8.com/?size=256&id=IMzgNpFETs1t&format=png"
                      alt="icon"
                    />
                  ),
                }}
              />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title=""
          action={
            <Tooltip title="已签合同数量" >
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          // total={() => <Yuan>126560</Yuan>}
          footer={<Field label="已签合同百分比" value={`23%`} />}
          contentHeight={92}
        >
          <StatisticCard
                statistic={{
                  title: '已签合同数量',
                  value: 46,
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://img.icons8.com/?size=256&id=48003&format=png"
                      alt="icon"
                    />
                  ),
                }}
              />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title=""
          action={
            <Tooltip title="显示当前用户需要处理的待办合同审批数量" >
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          // total={() => <Yuan>126560</Yuan>}
          footer={<Field label="待办合同百分比" value={`12.5%`} />}
          contentHeight={92}
        >
          <StatisticCard
                statistic={{
                  title: '待办合同审批数量',
                  value: 25,
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://img.icons8.com/?size=256&id=48215&format=png"
                      alt="icon"
                    />
                  ),
                }}
              />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title=""
          action={
            <Tooltip title="显示即将到期的合同数量，提醒用户及时处理" >
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          // total={() => <Yuan>126560</Yuan>}
          footer={<Field label="即将到期合同百分比" value={`9%`} />}
          contentHeight={92}
        >
          <StatisticCard
                statistic={{
                  title: '即将到期合同数量',
                  value: 18,
          
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://img.icons8.com/?size=256&id=52534&format=png"
                      alt="icon"
                    />
                  ),
                }}
              />
        </ChartCard>
      </Col>

     
    </Row>
  );
};
export default IntroduceRow;

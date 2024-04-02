/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-04-02 21:04:28
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-04-03 00:03:48
 */
import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '罗氏合同管理平台',
  pwa: true,
  logo: 'https://i.52112.com/icon/jpg/256/20201202/101189/4110059.jpg',
  iconfontUrl: '//at.alicdn.com/t/c/font_4493112_7saln1y6eri.js',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;

/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-04-02 21:04:28
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-04-03 00:12:03
 */
/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       component: './Admin',
  //     },
  //   ],
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'icon-yibiaobans',
    component: './Dashboard',
  },
  {
    name: '合同管理',
    icon: 'icon-hetongguanli4',
    path: '/contract',
    routes: [
      {
        name: '合同列表',
        // icon: 'table',
        path: '/contract/list',
        component: './Contract/List',
      },
      {
        name: '合同起草/创建',
        path: '/contract/create',
        routes: [
          {
            name: '标准采购合同创建',
            path: '/contract/create/standard',
            component: './Contract/Create/CreateStandard',
          },
          {
            name: '非标准采购合同创建',
            path: '/contract/create/non-standard',
            component: './Contract/Create/CreateNonStandard',
          },
          {
            name: '销售与折扣优惠合同',
            path: '/contract/create/sales-discounts',
            component: './Contract/Create/CreateSalesDiscounts',
          },
          {
            name: '其他合同',
            path: '/contract/create/other',
            component: './Contract/Create/CreateOther',
          },
        ],
      },
    ],
  },
  {
    name: '审批流程',
    icon: 'icon-shenpiliucheng',
    path: '/approval',
    routes: [
      {
        name: '我的待办',
        path: '/approval/todo',
        component: './Approval/Todo',
      },
      {
        name: '我的已办',
        path: '/approval/done',
        component: './Approval/Done',
      },
      {
        name: '到期提醒',
        path: '/approval/expiration',
        component: './Approval/Expiration',
      },
      {
        name: '流程报表',
        path: '/approval/report',
        component: './Approval/Report',
      },
    ],
  },
  {
    name: '合同存档',
    icon: 'icon-cundangyewu',
    path: '/archive',
    routes: [
      {
        name: '合同存档记录',
        path: '/archive/record',
        component: './Archive/Record',
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];

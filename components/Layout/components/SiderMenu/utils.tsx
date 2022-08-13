import React from 'react';
import {
  TeamOutlined,
  DesktopOutlined,
  DashboardOutlined,
} from '@ant-design/icons';

export type MenuItem = {
  label: string,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
};

export const menuItems: MenuItem[] = [
  {
    label: '首页',
    key: '/',
    icon: <DashboardOutlined />,
    children: [
      {
        label: '工作台',
        key: '/workplace',
      },
      {
        label: '分析页面',
        key: '/analysis',
      },
    ],
  },
  {
    label: '项目',
    key: '/projects',
    icon: <DesktopOutlined />,
    children: [],
  },
  {
    label: '团队',
    key: '/teams',
    icon: <TeamOutlined />,
    children: [],
  },
];

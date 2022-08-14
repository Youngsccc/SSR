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
    key: '/workplace',
    icon: <DashboardOutlined />,
  },
  {
    label: '项目',
    key: '/',
    icon: <DesktopOutlined />,
    children: [
      {
        label: '项目',
        key: '/project',
      },
    ],
  },
  {
    label: '团队',
    key: '/teams',
    icon: <TeamOutlined />,
    children: [],
  },
];

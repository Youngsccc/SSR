import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { PageHeader } from 'antd';
import { prefix } from '@/constant/index';
import styles from './index.module.scss';

const routes = [
  {
    path: '/',
    breadcrumbName: '首页',
  },
  {
    path: '/workplace',
    breadcrumbName: '工作台',
  },
];

const CardHeader: NextPage<NextPageProps> = () => {
  return (
    <PageHeader
      breadcrumb={{ routes }}
      className={styles[`${prefix}-workplace-header`]}
    />
  );
};

export default CardHeader;

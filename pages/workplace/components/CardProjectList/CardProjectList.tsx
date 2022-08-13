import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { Card, Empty } from 'antd';

const CardProjectList: NextPage<NextPageProps> = () => {
  return (
    <Card title="最近项目" extra="查看全部">
      <Empty description="暂无项目" />
    </Card>
  );
};

export default CardProjectList;

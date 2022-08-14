import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { Card, Empty } from 'antd';

const Project: NextPage<NextPageProps> = () => {
  return (
    <div>
      <Card title="项目列表">
        <Empty description="暂无" />
      </Card>
    </div>
  );
};

export default Project;

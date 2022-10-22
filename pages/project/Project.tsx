import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { Card, Empty, PageHeader, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { prefix } from '@/constant/index';
import { routes } from '@/constant/constant.routes';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const Project: NextPage<NextPageProps> = () => {
  const { push } = useRouter();

  const onLinkToCreate = useCallback(() => {
    push('/project/create');
  }, []);

  return (
    <div className={styles[`${prefix}-project-container`]}>
      <PageHeader
        className={styles[`${prefix}-project-header`]}
        breadcrumb={{ routes }}
        extra={[
          <Button
            type="link"
            key="button"
            icon={<PlusSquareOutlined />}
            onClick={onLinkToCreate}
          >
            新建项目
          </Button>,
        ]}
      />
      <Card title="项目列表">
        <Empty description="暂无" />
      </Card>
    </div>
  );
};

export default Project;

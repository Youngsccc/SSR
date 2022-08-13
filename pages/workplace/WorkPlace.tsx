import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import CardHeader from '@/pages/workplace/components/CardHeader';
import { Row, Col, Card, Empty } from 'antd';
import CardProjectList from '@/pages/workplace/components/CardProjectList';
import NoticeSwiper from '@/components/NoticeSwiper';
import { prefix } from '@/constant/index';
import styles from './index.module.scss';

const WorkPlace: NextPage<NextPageProps> = () => {
  return (
    <div>
      <CardHeader />
      <Row gutter={12} className={styles[`${prefix}-workplace-content`]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
          <Card title="待办列表">
            <Empty description="暂无" />
          </Card>
          <CardProjectList />
          <Card title="动态">
            <Empty description="暂无" />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
          <Card title="快捷导航">
            <Empty description="暂无" />
          </Card>
          <NoticeSwiper data={[12, 1]} />
          <Card title="团队">
            <Empty description="暂无" />
          </Card>
          <Card title="消息中心">
            <Empty description="暂无" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WorkPlace;

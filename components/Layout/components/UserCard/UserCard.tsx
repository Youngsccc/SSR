import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { Card, Avatar, Skeleton } from 'antd';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { useStore } from '../../../../store';

const UserCard: NextPage<NextPageProps> = () => {
  const store = useStore();

  const { avatar } = store?.user.userInfo || {};
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={!avatar} avatar active>
        <Card.Meta
          avatar={<Avatar src={avatar} />}
          title="人员卡片"
          description="描述"
        />
      </Skeleton>
    </Card>
  );
};

export default UserCard;

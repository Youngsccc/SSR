import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { Popover, Avatar } from 'antd';
import UserCard from '@/components/Layout/components/UserCard/UserCard';
import { useStore } from '../../../../store';

const UserAvatar: NextPage<NextPageProps> = () => {
  const store = useStore();

  const { avatar = '' } = store?.user.userInfo || {};

  const renderCard = () => {
    return <UserCard />;
  };

  return (
    <Popover arrowPointAtCenter placement="bottomRight" content={renderCard}>
      <Avatar src={avatar} />
    </Popover>
  );
};

export default UserAvatar;

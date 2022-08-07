import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { Popover, Avatar } from 'antd';
import UserCard from '@/components/NavBar/components/UserCard';

const UserAvatar: NextPage<NextPageProps> = () => {
  const renderCard = () => {
    return <UserCard />;
  };

  return (
    <Popover arrowPointAtCenter placement="bottomRight" content={renderCard}>
      <Avatar />
    </Popover>
  );
};

export default UserAvatar;

import dynamic from 'next/dynamic';

const UserAvatar = dynamic(() => import('./UserAvatar'));

export default UserAvatar;

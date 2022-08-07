import dynamic from 'next/dynamic';

const UserCard = dynamic(() => import('./UserCard'));

export default UserCard;

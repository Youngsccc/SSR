import dynamic from 'next/dynamic';

const CardHeader = dynamic(() => import('./CardHeader'));

export default CardHeader;

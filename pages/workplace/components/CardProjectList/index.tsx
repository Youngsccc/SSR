import dynamic from 'next/dynamic';

const CardProjectList = dynamic(() => import('./CardProjectList'));

export default CardProjectList;

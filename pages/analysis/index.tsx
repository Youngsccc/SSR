import dynamic from 'next/dynamic';

const Analysis = dynamic(() => import('./Analysis'));

export default Analysis;

import dynamic from 'next/dynamic';

const PageLayout = dynamic(() => import('./Layout'));

export default PageLayout;

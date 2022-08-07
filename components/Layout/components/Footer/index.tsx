import dynamic from 'next/dynamic';

const PageFooter = dynamic(() => import('./PageFooter'));

export default PageFooter;

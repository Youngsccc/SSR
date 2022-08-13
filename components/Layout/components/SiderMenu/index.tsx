import dynamic from 'next/dynamic';

const SiderMenu = dynamic(() => import('./SiderMenu'));

export default SiderMenu;

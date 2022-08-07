import dynamic from 'next/dynamic';

const dynamicNavBar = dynamic(() => import('./NavBar'));

dynamicNavBar.displayName = 'NavBar';

export default dynamicNavBar;

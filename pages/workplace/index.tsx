import dynamic from 'next/dynamic';

const Workplace = dynamic(() => import('./WorkPlace'));

export default Workplace;

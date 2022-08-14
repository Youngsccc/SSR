import dynamic from 'next/dynamic';

const Project = dynamic(() => import('./Project'));

export default Project;

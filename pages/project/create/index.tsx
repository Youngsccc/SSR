import dynamic from 'next/dynamic';

const ProjectCreate = dynamic(() => import('./ProjectCreate'));

export default ProjectCreate;

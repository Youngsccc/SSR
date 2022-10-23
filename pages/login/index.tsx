import dynamic from 'next/dynamic';

const Login = dynamic(() => import('./Login'));

export default Login;

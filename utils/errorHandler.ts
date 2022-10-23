import { message } from 'antd';

const errorHandler = (error: any) => {
  console.log(error);
  message.error(error?.message || '请求失败');
};

export default errorHandler;

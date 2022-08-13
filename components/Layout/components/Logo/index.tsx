import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { prefix } from '@/constant/index';
import styles from './index.module.scss';

const Logo: NextPage<NextPageProps> = () => {
  return (
    <div className={styles[`${prefix}-side-header`]}>
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        alt="logo"
      />
    </div>
  );
};

export default Logo;

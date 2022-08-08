import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { prefix } from '@/constant/index';
import styles from './index.module.scss';

const PageFooter: NextPage<NextPageProps> = () => {
  return (
    <div className={styles[`${prefix}-footer`]}>
      <span className={styles[`${prefix}-footer-content`]}>
        施工单位 ©️orange-web
      </span>
    </div>
  );
};

export default PageFooter;

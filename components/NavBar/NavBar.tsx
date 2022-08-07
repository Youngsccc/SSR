import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { prefix } from '@/constant/index';
import UserAvatar from '@/components/NavBar/components/UserAvatar';
import styles from './index.module.scss';

const NavBar: NextPage<NextPageProps> = () => {
  return (
    <div className={styles[`${prefix}-nav-bar`]}>
      <div className={styles[`${prefix}-nav-logo`]}>Logo</div>
      <div className={styles[`${prefix}-nav-content`]} />
      <div className={styles[`${prefix}-nav-avatar`]}>
        <UserAvatar />
      </div>
    </div>
  );
};

export default NavBar;

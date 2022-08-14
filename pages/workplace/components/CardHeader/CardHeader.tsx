import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { PageHeader, Statistic } from 'antd';
import { prefix } from '@/constant/index';
import styles from './index.module.scss';
import { useStore } from '../../../../store';

const CardHeader: NextPage<NextPageProps> = () => {
  const store = useStore();
  const { avatar, nickName } = store?.user?.userInfo || {};
  return (
    <PageHeader
      // breadcrumb={{ routes }}
      avatar={{
        src: avatar,
        alt: 'avatar',
        size: 72,
      }}
      title={nickName || '测试用户'}
      subTitle="开发测试人员"
      extra={[
        <Statistic title="团队" value="10" key="12321" />,
        <Statistic title="参与项目" value="50" key="12222221" />,
      ]}
      className={styles[`${prefix}-workplace-header`]}
    />
  );
};

export default CardHeader;

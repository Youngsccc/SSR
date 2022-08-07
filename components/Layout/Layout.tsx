import type { NextPage } from 'next';
import { ReactNode } from 'react';
import { Layout } from 'antd';
import NavBar from './components/NavBar';
import { prefix } from '@/constant/index';
import PageFooter from '@/components/Layout/components/Footer';
import styles from './index.module.scss';

const { Content, Footer } = Layout;

export interface LayoutProps {
  children?: ReactNode;
}

const PageLayout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <Layout>
      <header className={styles[`${prefix}-header`]}>
        <NavBar />
      </header>
      <Content className={styles[`${prefix}-content`]}>{children}</Content>
      <Footer>
        <PageFooter />
      </Footer>
    </Layout>
  );
};

export default PageLayout;

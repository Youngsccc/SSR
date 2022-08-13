import type { NextPage } from 'next';
import { ReactNode, useState, useCallback } from 'react';
import { Layout } from 'antd';
import NavBar from './components/NavBar';
import { prefix } from '@/constant/index';
import Logo from '@/components/Layout/components/Logo';
import PageFooter from '@/components/Layout/components/Footer';
import SiderMenu from '@/components/Layout/components/SiderMenu';
const { Sider, Content, Footer } = Layout;
import styles from './index.module.scss';

export interface LayoutProps {
  children?: ReactNode;
}

const PageLayout: NextPage<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapsed = useCallback((value: boolean) => {
    setCollapsed(value);
  }, []);

  return (
    <Layout>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapsed}
      >
        <Logo />
        <SiderMenu />
      </Sider>
      <Layout>
        <header className={styles[`${prefix}-header`]}>
          <NavBar />
        </header>
        <main className={styles[`${prefix}-main`]}>
          <div className={styles[`${prefix}-scroller`]}>
            <Content className={styles[`${prefix}-content`]}>
              {children}
            </Content>
            <Footer>
              <PageFooter />
            </Footer>
          </div>
        </main>
      </Layout>
    </Layout>
  );
};

export default PageLayout;

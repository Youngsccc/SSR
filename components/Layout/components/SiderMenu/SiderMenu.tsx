import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { Menu } from 'antd';
import { useCallback } from 'react';
import { menuItems } from './utils';
import { useMenuRouter } from '@/components/Layout/components/SiderMenu/hooks/useMenuRouter';

const SiderMenu: NextPage<NextPageProps> = () => {
  const { openKeys, activeKeys, push } = useMenuRouter();
  const onMenuItemClick = useCallback(({ key }: { key: string }) => {
    if (key) {
      push(key);
    }
  }, []);
  return (
    <Menu
      defaultOpenKeys={openKeys}
      selectedKeys={activeKeys}
      mode="inline"
      items={menuItems}
      onSelect={onMenuItemClick}
    />
  );
};

export default SiderMenu;

import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { menuItems } from '../utils';
import { Url, TransitionOptions } from '@/types/common';

export interface MenuRouter {
  /**
   * 选中的菜单
   */
  activeKeys: string[];

  /**
   * 打开的菜单
   */
  openKeys: string[];

  /**
   * 路由条转发方法
   */
  push: (url: Url, as?: Url, options?: TransitionOptions) => Promise<boolean>;
}

export const useMenuRouter: () => MenuRouter = () => {
  const { pathname, push } = useRouter();

  return useMemo(() => {
    let activeKeys: string[] = [];
    let openKeys: string[] = [];
    menuItems.forEach((menuInfo) => {
      if (menuInfo?.key === pathname) {
        activeKeys = [pathname];
        openKeys = [pathname];
      } else if (
        menuInfo?.children &&
        menuInfo.children.some((menu) => menu.key === pathname)
      ) {
        activeKeys = [pathname];
        openKeys = [menuInfo?.key || pathname];
      }
    });

    return {
      activeKeys,
      openKeys,
      push,
    };
  }, [pathname]);
};

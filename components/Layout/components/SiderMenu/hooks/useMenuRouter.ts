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
    // 路由的形式：/一级路由/二级路由
    const [firstRoute = '', secRoute = ''] = pathname.slice(1).split('/');
    let activeKeys: string[] = [];
    let openKeys: string[] = [];
    menuItems.forEach((menuInfo) => {
      const { key, children } = menuInfo;
      if (key.includes(firstRoute)) {
        openKeys = [key];
        activeKeys = [key];
        const childrenInfo = children?.find((secMenuInfo) => {
          const { key: secKey } = secMenuInfo;
          return secKey?.includes(secRoute);
        });
        if (childrenInfo) {
          activeKeys = [childrenInfo?.key];
        }
      }
    });

    return {
      activeKeys,
      openKeys,
      push,
    };
  }, [pathname]);
};

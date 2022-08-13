import { NextPage } from 'next';
import React from 'react';
import { NextPageProps } from '@/types/common';
import { Carousel, CarouselProps, Card } from 'antd';
import { AlertOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import styles from './index.module.scss';
import { prefix } from '@/constant/index';

export interface NoticeSwiperProps extends NextPageProps, CarouselProps {
  /** 数据源 */
  data: any[];

  /** 自定义渲染 */
  renderItem?: (item: any) => React.ReactNode;
}

const NoticeSwiper: NextPage<NoticeSwiperProps> = (props) => {
  const { data, renderItem: renderItemProps, ...restProps } = props;

  const renderItem = useCallback(
    (item: any) => {
      if (typeof renderItemProps === 'function') {
        return renderItemProps(item);
      }
      return (
        <div className={styles[`${prefix}-notice-content`]}>
          <AlertOutlined />
          <span>通知:</span>
          <span>通知内容</span>
        </div>
      );
    },
    [renderItemProps]
  );

  if (!Array.isArray(data) || !data?.length) {
    return null;
  }

  return (
    <Card title={false} bodyStyle={{ padding: 6 }}>
      <Carousel
        autoplay
        infinite
        dots={false}
        dotPosition="right"
        className={styles[`${prefix}-notice`]}
        {...restProps}
      >
        {data?.map((item) => renderItem(item))}
      </Carousel>
    </Card>
  );
};

export default NoticeSwiper;

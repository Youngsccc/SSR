import { NextPage } from 'next';
import { NextPageProps } from '@/types/common';
import { PageHeader, Card, Form, Input, Select, Button } from 'antd';
import { useCallback } from 'react';

const ProjectCreate: NextPage<NextPageProps> = () => {
  const onFinish = useCallback(() => {
    console.log('Finish');
  }, []);

  const onFinishFailed = useCallback(() => {
    console.log('ff');
  }, []);

  return (
    <div>
      <PageHeader title="创建项目" />
      <Card>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="所属团队"
            name="team"
            rules={[{ required: true, message: '请选择所属团队' }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="项目类型"
            name="type"
            rules={[{ required: true, message: '请选择项目类型' }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="项目名称"
            name="name"
            rules={[{ required: true, message: '请输入项目名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="">
            <Button type="primary">提交</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ProjectCreate;

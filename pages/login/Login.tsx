import { NextPage } from 'next';
import { Card, Form, Input, Row, Col, Button } from 'antd';

const Login: NextPage = () => {
  const onFinish = () => {};

  const onFinishFailed = () => {};

  return (
    <Row gutter={12} align="middle" justify="center">
      <Col span={6}>
        <Card>
          <Form
            name="loginForm"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名:"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary">提交</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;

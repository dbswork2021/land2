import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { HomeApi, HomeEditApi } from 'utils/api';

const Home = () => {
  const [from] = Form.useForm();

  useEffect(() => {
    HomeApi().then((res) => {
      from.setFieldsValue(res.data);
    });
  });
  const onFinish = (values) => {
    HomeEditApi(values).then((res) => {
      from.setFieldsValue(res.data.data);
    });
  };
  return (
    <div>
      <Form
        wrapperCol={{ span: 14 }}
        form={from}
        name="basic"
        onFinish={onFinish}
      >
        <Form.Item style={{ display: 'none' }} name="_id">
          <Input disabled />
        </Form.Item>
        <Form.Item label="跳转链接" name="url">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;

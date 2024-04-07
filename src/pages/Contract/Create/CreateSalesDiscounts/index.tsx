

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-04-02 22:18:21
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-04-02 22:37:14
 */

import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Upload,
  message,
} from 'antd';

const { RangePicker } = DatePicker;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const contractType: string = '销售与折扣优惠合同'

const CreateSalesDiscounts: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
  };
  const init = () => {
    form.setFieldsValue({
      ContractType: contractType,
    });
  };


  useEffect(() => {
    init()
  },[])
  return (
    <>
      <h2>{contractType + '起草'}</h2>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // layout="horizontal"
        variant="filled"
        // disabled={componentDisabled}
        style={{ maxWidth: 1000 }}
        onFinish={onFinish}
      >
        <Row>
          <Col span={11}>
            <Form.Item
              label="合同名称"
              name="contractName"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <Form.Item
              label="版本号"
              name="version"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Divider orientation="left" orientationMargin="0" style={{ fontSize: 14 }}>
              甲方公司信息
            </Divider>
            <Form.Item
              label="公司名称"
              name="A"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="地址" name="A" rules={[{ required: true, message: 'Please input!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="联系人"
              name="A"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="联系方式"
              name="A"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Divider
              type="vertical"
              style={{ background: '#ebebeb', height: '60%', marginTop: 70, marginLeft: 90 }}
            />
          </Col>
          <Col span={11}>
            <Divider orientation="left" orientationMargin="0" style={{ fontSize: 14 }}>
              {' '}
              乙方公司信息
            </Divider>
            <Form.Item
              label="公司名称"
              name="A"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="地址" name="A" rules={[{ required: true, message: 'Please input!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="联系人"
              name="A"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="联系方式"
              name="A"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Divider orientation="left" orientationMargin="0" style={{ fontSize: 14 }}>
          合同内容
        </Divider>
        <Row>
          <Col span={8}>
            <Form.Item
              label="合同条款"
              name="C"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="金额" name="C" rules={[{ required: true, message: 'Please input!' }]}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="财务" name="C" rules={[{ required: true, message: 'Please input!' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={8}>
            <Form.Item
              label="生效日期"
              name="C"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="到期日期"
              name="C"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="起止日期"
              name="C"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <RangePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="合同类型"
              name="ContractType"
              rules={[{ required: true, message: 'Please input!' }]}
            >
            <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="下拉框"
              name="2"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="上传附件:" valuePropName="fileList" getValueFromEvent={normFile}>
              <Upload action="/upload.do" listType="picture-card">
                <button style={{ border: 0, background: 'none' }} type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end">
          <Space size="middle">
            <Button type="primary" htmlType="submit">
              保存草稿
            </Button>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button type="dashed">取消</Button>
          </Space>
        </Row>
      </Form>
    </>
  );
};


export default CreateSalesDiscounts;

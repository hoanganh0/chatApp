import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import { COLOR } from "../../../config/commom/color";

interface IProps {
  statusForm: boolean;
}

export const FormAuth: React.FC<IProps> = (props) => {
  const { statusForm } = props;
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrap>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="custom-form"
      >
        <P>Tên đăng nhập</P>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Vui lòng không để trống!" }]}
          style={{ marginTop: 5 }}
        >
          <Input style={InputItem} />
        </Form.Item>
        <P>Mật khẩu</P>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng không để trống!" }]}
          style={{ marginTop: 5 }}
        >
          <Input.Password style={InputItem} />
        </Form.Item>
        {statusForm && (
          <div>
            <P>Nhập lại mật khẩu</P>
            <Form.Item
              name="repassword"
              rules={[{ required: true, message: "Vui lòng không để trống!" }]}
              style={{ marginTop: 5 }}
            >
              <Input.Password style={InputItem} />
            </Form.Item>
          </div>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit" style={Submit}>
            {statusForm ? "Đăng nhập" : "Đăng ký"}
          </Button>
        </Form.Item>
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: auto;

  // @media(min-width: 768px){
  //   min-width: 600px
  // }

  background-color: ${COLOR.HEXffffff};
  background-clip: border-box;
  border: 0 solid ${COLOR.HEXf5f7fb};
  border-radius: 0.25rem;
  padding: 2.5rem;
  max-width: 456px;
`;
const P = styled.label`
  color: #495057;
  font-size: 0.9375rem;
`;
const Submit = {
  width: "100%",
  backgroundColor: COLOR.HEX7269ef,
  borderColor: COLOR.HEX7269ef,
  borderRadius: 3,
};
const InputItem = {
  backgroundColor: "rgba(230,235,245,.25)",
  borderColor: COLOR.HEXe6ebf5,
  padding: "8px 16px",
};

// React
import { useState } from "react";

// Third Part
import { Form, Input, Button, Typography } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Icons
import {
  UserOutlined,
  LockOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

// Services
import { autUser } from "../../api/services";
import { openNotification } from "../../components/custom/notification";

const LoginPage = () => {
  let navigate = useNavigate();
  // State
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (params) => {
    try {
      //   setIsSubmit(true);
      //   autUser(params);
      navigate("app");
      //   setIsSubmit(false);
    } catch (error) {
      console.log(error);
      openNotification("Tizim Xatoligi", "error");
    }
  };

  return (
    <LoginPageContainer className="flex flex-col justify-center h-screen items-center animate__animated animate__fadeIn animate__delay-1s ">
      <Typography.Title level={2} className="pb-4">
        OX Dasturiga Xush Kelibsiz
      </Typography.Title>
      <Form
        className="w-96"
        requiredMark={false}
        onFinish={handleSubmit}
        autoComplete="off">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Iltimos foydalanuvchi ismini kiriting!",
            },
          ]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Foydalanuvchi Ismi"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Iltimos parolni kiriting!" }]}>
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Parol"
          />
        </Form.Item>
        <Form.Item
          name="subdomain"
          rules={[
            {
              required: true,
              message: "Iltimos kampaniya nomini kiriting!",
            },
          ]}>
          <Input placeholder="Kompaniya nomi" prefix={<DatabaseOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isSubmit}>
            Tizimga kirish
          </Button>
        </Form.Item>
      </Form>
    </LoginPageContainer>
  );
};

export default LoginPage;

const LoginPageContainer = styled.div`
  background: rgb(229, 229, 229, 0.2);
`;

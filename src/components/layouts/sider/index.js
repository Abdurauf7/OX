// React
import { useState } from "react";

// Third Part
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

// Icons
import { AppstoreOutlined, SearchOutlined } from "@ant-design/icons";

import logo from "../../../assets/img/logo.png";

const AppSider = () => {
  // Navigation
  const navigation = useNavigate();

  // Location
  const location = useLocation();

  // state
  const [collapsed, setCollapsed] = useState(false);

  // onCollapsed
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  // handle MenuClick

  const handleNavigate = (params) => {
    return navigation(`${params.key}`);
  };
  return (
    <Layout.Sider
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
      <CustomLogo className="logo">
        <img
          src={logo}
          alt=""
          srcSet=""
          height={140}
          width={140}
          className="ml-3"
        />
      </CustomLogo>
      <Menu
        theme="dark"
        defaultSelectedKeys={
          location.pathname === "/app/products"
            ? "/app/products"
            : "/app/search"
        }
        mode="inline"
        onClick={handleNavigate}>
        <Menu.Item key="/app/products" icon={<AppstoreOutlined />}>
          Products
        </Menu.Item>
        <Menu.Item key="/app/search" icon={<SearchOutlined />}>
          Search Products
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default AppSider;

const CustomLogo = styled.div`
  height: 130px;
  margin: 16px;
`;

// Third part
import { Layout, Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";

// Icon
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const AppHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Layout.Header className="" style={{ padding: 0 }}>
      <div className="flex justify-end m-3 mr-20">
        <Avatar shape="square" size={40}>
          User
        </Avatar>
        <Button
          icon={<LogoutOutlined style={{ fontSize: 16 }} className="" />}
          type="primary"
          danger
          className="mt-1 ml-2"
          onClick={handleLogout}></Button>
      </div>
    </Layout.Header>
  );
};

export default AppHeader;

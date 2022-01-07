// Third part
import { Layout } from "antd";

// Custom
import Header from "../header/";
import Footer from "../footer/";
import Sider from "../sider/";
import Content from "../content/";

const MainApp = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainApp;

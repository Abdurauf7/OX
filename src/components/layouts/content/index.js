// Third part
import { Layout } from "antd";
import { Route, Routes, Navigate } from "react-router-dom";

// Routes
import Products from "../../../routes/Products/index";
import SearchProducts from "../../../routes/SearchProduct/index";

const AppContent = () => {
  return (
    <Layout.Content className="px-4">
      <div
        style={{ minHeight: "calc(100vh - 185px)" }}
        className="bg-white border-2  mt-4  p-5 ">
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="*" element={<Navigate to="/app/products" replace />} />
        </Routes>
      </div>
    </Layout.Content>
  );
};

export default AppContent;

// Third part
import { Table } from "antd";
import moment from "moment";
const Products = () => {
  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      key: "supplier",
    },
    {
      title: "Barcode",
      dataIndex: "barcode",
      key: "barcode",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];
  const data = [
    {
      id: "143",
      supplier: "Fruits&Passion",
      barcode: "776288670944",
      date: moment().format("DD-MM-YYYY"),
    },
    {
      id: "144",
      supplier: "Passion",
      barcode: "776288670944",
      date: moment().format("DD-MM-YYYY"),
    },
    {
      id: "145",
      supplier: "Passion",
      barcode: "776288670944",
      date: moment().format("DD-MM-YYYY"),
    },
  ];

  return (
    <div className="h-full">
      <h1 className="text-center text-orange-700 font-mono text-5xl antialiased">
        Products
      </h1>
      <Table
        className="pt-5"
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Products;

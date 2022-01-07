// Third part
import { Input, Table } from "antd";
import moment from "moment";
import { useState } from "react";
const SearchProduct = () => {
  const fakeData = [
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
      sorter: (a, b) => a.supplier.length - b.supplier.length,
    },
    {
      title: "Barcode",
      dataIndex: "barcode",
      key: "barcode",
      sorter: (a, b) => a.barcode - b.barcode,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];
  const [data, setData] = useState([
    {
      id: "143",
      supplier: "Fruits&Passion",
      barcode: "776288670945",
      date: moment().format("DD-MM-YYYY"),
    },
    {
      id: "144",
      supplier: "Passion",
      barcode: "776288670941",
      date: moment().format("DD-MM-YYYY"),
    },
    {
      id: "145",
      supplier: "Passion",
      barcode: "776288670944",
      date: moment().format("DD-MM-YYYY"),
    },
  ]);

  const handleSearchProduct = (e) => {
    const productName = e.target.value;
    if (productName.length !== 0) {
      const filteredData = data.filter((r) =>
        r.supplier.toLocaleLowerCase().includes(productName)
      );
      setData(filteredData);
    } else {
      return setData(fakeData);
    }
  };
  return (
    <div className="h-full">
      <h1 className="text-center text-orange-700 font-mono text-5xl antialiased">
        Search Products
      </h1>
      <Input placeholder="Enter Product name" onChange={handleSearchProduct} />
      <Table
        className="pt-5"
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default SearchProduct;

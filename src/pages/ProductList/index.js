import { Button, Row, Typography, Table, Col } from "antd";
import { BaseLayout } from "../../components";
import {
  PlusCircleOutlined,
  FormOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import { NewProductModal } from "../../containers";
import { useState } from "react";

export default function ProductList() {
  const Title = Typography;
  const [newProductModalVisible, setNewProductModalVisible] = useState(false);

  const dataSource = [
    {
      key: "1",
      nameProduct: "Produto do Cleinte",
      cost: 25.0,
      value: 35.0,
    },
    {
      key: "2",
      nameProduct: "Produto do Cleinte",
      cost: 25.0,
      value: 35.0,
    },
    {
      key: "3",
      nameProduct: "Produto do Cleinte",
      cost: 25.0,
      value: 35.0,
    },
    {
      key: "4",
      nameProduct: "Produto do Cleinte",
      cost: 25.0,
      value: 35.0,
    },
    {
      key: "5",
      nameProduct: "Produto do Cleinte",
      cost: 25.0,
      value: 35.0,
    },
    {
      key: "6",
      nameProduct: "Produto do Cleinte",
      cost: 25.0,
      value: 35.0,
    },
  ];

  const columns = [
    {
      title: "Nome do Produto",
      dataIndex: "nameProduct",
      key: "nameProduct",
      align: "center",
    },
    {
      title: "Custo de Produção",
      dataIndex: "cost",
      key: "cost",
      align: "center",
      render: (cost) => `R$ ${cost.toFixed(2)}`,
    },
    {
      title: "Valor de Venda",
      dataIndex: "value",
      key: "value",
      align: "center",
      render: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      title: "Lucro",
      dataIndex: "",
      key: "profit",
      align: "center",
      render: (object) => `R$ ${(object.value - object.cost).toFixed(2)}`,
    },
    {
      title: "",
      dataIndex: "",
      key: "actions",
      align: "center",
      render: () => {
        return (
          <>
            <Button>
              <FormOutlined />
            </Button>
            <Button>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <BaseLayout>
        <div className="page-product-list-content">
          <Row>
            <Title className="product-list-title">Lista de Produtos</Title>
          </Row>
          <Row className="product-list-table-row">
            <Col span={24}>
              <Row justify="end">
                <Button
                  className="product-list-new-product-button"
                  onClick={() => setNewProductModalVisible(true)}
                >
                  <PlusCircleOutlined /> Novo produto
                </Button>
              </Row>
              <Table
                className="product-list-table"
                dataSource={dataSource}
                columns={columns}
              />
            </Col>
          </Row>
        </div>
      </BaseLayout>
      <NewProductModal
        isModalVisible={newProductModalVisible}
        handleCancel={() => setNewProductModalVisible(!newProductModalVisible)}
        handleOk={() => {}}
      />
    </>
  );
}

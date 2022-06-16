import { Button, Row, Typography, Table, Col } from "antd";
import { BaseLayout } from "../../components";
import {
  PlusCircleOutlined,
  FormOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import { NewProductModal } from "../../containers";
import { useState, useEffect } from "react";
import { getProducts } from "../../connection/products";

export default function ProductList() {
  const Title = Typography;
  const [newProductModalVisible, setNewProductModalVisible] = useState(false);
  const [productsList, setProductsList] = useState([]);

  async function fetchProducts() {
    const response = await getProducts();
    console.log(response);
    setProductsList(response.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    {
      title: "Id do Produto",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Nome do Produto",
      dataIndex: "nome",
      key: "nome",
      align: "center",
    },
    {
      title: "Custo de Produção",
      dataIndex: "custoProduto",
      key: "custoProduto",
      align: "center",
    },
    {
      title: "Valor de Venda",
      dataIndex: "vlVenda",
      key: "vlVenda",
      align: "center",
    },
    {
      title: "Lucro",
      dataIndex: "lucroProduto",
      key: "lucroProduto",
      align: "center",
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
                dataSource={productsList}
                columns={columns}
              />
            </Col>
          </Row>
        </div>
      </BaseLayout>
      <NewProductModal
        isModalVisible={newProductModalVisible}
        handleCancel={() => setNewProductModalVisible(!newProductModalVisible)}
      />
    </>
  );
}

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
import { deleteProduct, getProducts } from "../../connection/products";

export default function ProductList() {
  const Title = Typography;
  const [newProductModalVisible, setNewProductModalVisible] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [loadingTable, setLoadingTable] = useState(false);

  async function fetchProducts() {
    setLoadingTable(true);
    setTimeout(async () => {
      try {
        const response = await getProducts();
        setProductsList(response.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingTable(false);
      }
    }, 300)
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
      sorter: (a, b) => a.custoProduto - b.custoProduto,
      render: (custoProduto) =>
        custoProduto ? `R$ ${custoProduto?.toFixed(2)}` : "-",
    },
    {
      title: "Valor de Venda",
      dataIndex: "vlVenda",
      key: "vlVenda",
      align: "center",
      sorter: (a, b) => a.vlVenda - b.vlVenda,
      render: (vlVenda) => (vlVenda ? `R$ ${vlVenda.toFixed(2)}` : "-"),
    },
    {
      title: "Lucro",
      dataIndex: "lucroProduto",
      key: "lucroProduto",
      align: "center",
      sorter: (a, b) => a.vlVenda - b.vlVenda,
      render: (lucroProduto) =>
        lucroProduto ? `R$ ${lucroProduto?.toFixed(2)}` : "-",
    },
    {
      title: "",
      dataIndex: "",
      key: "actions",
      align: "center",
      render: (product) => {
        return (
          <>
            <Button>
              <FormOutlined />
            </Button>
            <Button
              onClick={async () => {
                await deleteProduct(product.id);
                fetchProducts();
              }}
            >
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
                pagination={{ pageSize: 5 }}
                loading={loadingTable}
              />
            </Col>
          </Row>
        </div>
      </BaseLayout>
      <NewProductModal
        isModalVisible={newProductModalVisible}
        handleCancel={() => setNewProductModalVisible(!newProductModalVisible)}
        fetchProducts={fetchProducts}
      />
    </>
  );
}

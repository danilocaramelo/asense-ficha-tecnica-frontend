import { Button, Row, Typography, Table, Col } from "antd";
import { BaseLayout } from "../../components";
import {
  PlusCircleOutlined,
  FormOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import { NewProductModal } from "../../containers";
import { useEffect, useState } from "react";
import SupplyRegister from "../../containers/SupplyRegister";
import { getSupplies } from "../../connection/supplies";

export function SupplyList() {
  const Title = Typography;
  const [newSupplyModalVisible, setNewSupplyModalVisible] = useState(false);
  const [suplies, setSupplies] = useState([]);

  async function fetchSupplies() {
    const response = await getSupplies();
    setSupplies(response.data);
  }
  useEffect(() => {
    fetchSupplies();
  }, []);

  const columns = [
    {
      title: "Nome do Insumo",
      dataIndex: "nome",
      key: "nome",
      align: "center",
    },
    {
      title: "Quantidade",
      dataIndex: "quantidade",
      key: "quantidade",
      align: "center",
    },
    {
      title: "Medida",
      dataIndex: "medida",
      key: "medida",
      align: "center",
    },
    {
      title: "Valor de compra",
      dataIndex: "vlCompra",
      key: "vlCompra",
      align: "center",
    },
    {
      title: "Custo por medida",
      dataIndex: "custoPorMedida",
      key: "custoPorMedida",
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
            <Title className="product-list-title">Lista de Insumos</Title>
          </Row>
          <Row className="product-list-table-row">
            <Col span={24}>
              <Row justify="end">
                <Button
                  className="product-list-new-product-button"
                  onClick={() => setNewSupplyModalVisible(true)}
                >
                  <PlusCircleOutlined /> Novo insumo
                </Button>
              </Row>
              <Table
                className="product-list-table"
                dataSource={suplies}
                columns={columns}
              />
            </Col>
          </Row>
        </div>
      </BaseLayout>
      <SupplyRegister
        isModalVisible={newSupplyModalVisible}
        handleCancel={() => setNewSupplyModalVisible(!newSupplyModalVisible)}
        handleOk={() => {}}
      />
    </>
  );
}

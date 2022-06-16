import { Modal, Form, Input, Row, Button, Col } from "antd";
import { postProducts } from "../../connection/products";
import DynamicField from "../DynamicFields";
import "./styles.scss";

export default function NewProductModal({
  isModalVisible,
  handleCancel,
  handleOk,
}) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    postProducts(values);
  };
  return (
    <Modal
      className="product-register-modal"
      title="Registro do Produto"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={() => {
        handleCancel();
        form.resetFields();
      }}
      centered
      footer={null}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          label="Nome do Produto"
          name="nome"
          rules={[{ required: true, message: "campo obrigatório" }]}
        >
          <Input />
        </Form.Item>
        <DynamicField />
        <Row justify="center">
          <Col span={12}>
            <Form.Item
              label="Valor de venda"
              name="vlVenda"
              rules={[{ required: true, message: "campo obrigatório" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Button className="submit-button" htmlType="submit">
            Criar
          </Button>
        </Row>
      </Form>
    </Modal>
  );
}

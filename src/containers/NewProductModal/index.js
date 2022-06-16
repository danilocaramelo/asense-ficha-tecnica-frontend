import { Modal, Form, Input, Row, Button } from "antd";
import DynamicField from "../DynamicFields";
import "./styles.scss";

export default function NewProductModal({
  isModalVisible,
  handleCancel,
  handleOk,
}) {
  const [form] = Form.useForm();

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
      <Form
        form={form}
        onFinish={(values) => {
          console.log(values);
          handleCancel();
          form.resetFields();
        }}
      >
        <Form.Item label="Nome do Insumo" name="name">
          <Input />
        </Form.Item>
        <DynamicField />
        {/* <Form.Item initialValue={0} label="Custo Total" name="cost">
          <Input disabled />
        </Form.Item> */}
        <Form.Item label="Valor de venda" name="saleValue">
          <Input />
        </Form.Item>
        <Row justify="center">
          <Button className="submit-button" htmlType="submit">
            Criar
          </Button>
        </Row>
      </Form>
    </Modal>
  );
}

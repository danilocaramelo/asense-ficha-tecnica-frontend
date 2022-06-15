import { Button, Form, Input, Modal, Select } from "antd";
import "./styles.scss";

export default function SupplyRegister({
  isModalVisible,
  handleOk,
  handleCancel,
}) {
  const { Option } = Select;
  const [form] = Form.useForm();
  return (
    <Modal
      className="supply-register-modal"
      title="Registro de Insumo"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
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
        <Form.Item label="Medida" name="mensure">
          <Select>
            <Option value="grama">grama</Option>
            <Option value="mililitro">mililitro</Option>
            <Option value="unidade">unidade</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Quantidade" name="amount">
          <Input />
        </Form.Item>
        <Form.Item label="Preço" name="price">
          <Input />
        </Form.Item>
        <Button htmlType="submit">Criar</Button>
      </Form>
    </Modal>
  );
}

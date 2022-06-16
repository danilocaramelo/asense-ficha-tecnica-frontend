import { Button, Form, Input, Modal, Select } from "antd";
import { postSupply  } from "../../connection/supplies";
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
          postSupply(values);
          handleCancel();
          form.resetFields();
        }}
      >
        <Form.Item label="Nome do Insumo" name="nome">
          <Input />
        </Form.Item>
        <Form.Item label="Medida" name="medida">
          <Select>
            <Option value={0}>grama</Option>
            <Option value={1}>mililitro</Option>
            <Option value={2}>unidade</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Quantidade" name="quantidade">
          <Input />
        </Form.Item>
        <Form.Item label="Preço" name="vlCompra">
          <Input />
        </Form.Item>
        <Button htmlType="submit">Criar</Button>
      </Form>
    </Modal>
  );
}

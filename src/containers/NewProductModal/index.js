import { Modal, Row, Form, Input, Typography } from "antd";
import "./styles.scss";

export default function NewProductModal({ isModalVisible, setModalVisible }) {

    const Title = Typography;
  return (
    <div className="containter-new-product-modal">
      <Modal
        visible={isModalVisible}
        onCancel={() => setModalVisible(false)}
        footer={false}
        closable={false}
      >
        <Form>
          <Row>
            <Form.Item name="productName" label="Nome do Produto">
              <Input></Input>
            </Form.Item>
          </Row>
          <Row>
            <Title></Title>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

import { Card, Col, Row, Form, Input, Button } from "antd";
import asenseIcon from "../../assets/asense-icon.png";
import "./styles.scss";

export default function RegisterCard() {
  return (
    <div className="container-register-card-content">
      <Card className="register-card" bordered={false}>
        <Row className="register-card-header" justify="center">
          <img
            className="register-card-header-logo"
            src={asenseIcon}
            alt="logo menor da Asense"
          />
        </Row>
        <Form>
          <Row className="register-card-row">
            <Col span={20} offset={2} lg={{ span: 11, offset: 2 }}>
              <Form.Item
                name="name"
                label="Nome Completo"
                labelCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={20} offset={2} lg={{ span: 6, offset: 2 }}>
              <Form.Item name="cpf" label="CPF" labelCol={{ span: 24 }}>
                <Input />
              </Form.Item>
              <Form.Item
                name="bornDate"
                label="Data de Nascimento"
                labelCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row className="register-card-row">
            <Col span={20} offset={2} lg={{ span: 11, offset: 2 }}>
              <Form.Item
                name="companyName"
                label="Nome da Empresa"
                labelCol={{ span: 24 }}
              >
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={20} offset={2} lg={{ span: 6, offset: 2 }}>
              <Form.Item
                name="port"
                label="Porte"
                labelCol={{ span: 24 }}
              >
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={20} offset={2} lg={{ span: 6, offset: 2 }}>
              <Form.Item
                name="segment"
                label="Segmento de atuação"
                labelCol={{ span: 24 }}
              >
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row className="register-card-row">
            <Col span={20} offset={2} lg={{ span: 11, offset: 2 }}>
              <Form.Item
                name="email"
                label="Email"
                labelCol={{ span: 24 }}
              >
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={20} offset={2} lg={{ span: 6, offset: 2 }}>
              <Form.Item
                name="password"
                label="Senha"
                labelCol={{ span: 24 }}
              >
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={20} offset={2} lg={{ span: 6, offset: 2 }}>
              <Form.Item
                name="confirmPassword"
                label="Confirmar senha"
                labelCol={{ span: 24 }}
              >
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={20} offset={2} lg={{ span: 4 }}>
              <Button className="register-card-button">Cadastre-se</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

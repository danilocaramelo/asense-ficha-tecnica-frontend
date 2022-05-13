import { Card, Row, Form, Button, Input, Col } from "antd";
import titleImage from "../../assets/title.png";
import { useDispatch } from "react-redux";
import * as fetchAuth from "../../store/fetchActions/fetchAuth";
import "./styles.scss";

export default function LoginCard() {
  const dispatch = useDispatch();

  function handleSubmit(values) {
    dispatch(fetchAuth.getToken(values));
  }

  return (
    <div className="login-card-container">
      <Card className="login-card" bordered={false}>
        <Row>
          <img
            className="login-card-logo"
            alt="logo da Asense"
            src={titleImage}
          />
        </Row>
        <Row justify="center" style={{ marginTop: 40 }}>
          <Col span={20}>
            <Form
              name="basic"
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
            >
              <Form.Item
                name="username"
                label="Email"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira o email cadastrado",
                  },
                ]}
              >
                <Input
                  placeholder={"username"}
                  style={{ borderRadius: "50px", height: "45px" }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Senha"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira sua senha",
                  },
                ]}
              >
                <Input.Password
                  placeholder={"********"}
                  style={{ borderRadius: "50px", height: "45px" }}
                />
              </Form.Item>
              <Form.Item>
                <Row justify="center" style={{ marginTop: 20 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-button"
                  >
                    Login
                  </Button>
                </Row>
              </Form.Item>
            </Form>
            <Row justify="center">
              <a href="">Esqueceu a senha?</a>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

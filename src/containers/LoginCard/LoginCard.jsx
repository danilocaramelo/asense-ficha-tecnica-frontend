import { Card, Row, Form, Button, Input, Col } from "antd";
import titleImage from "../../assets/title.png";
import { useDispatch } from "react-redux";
import * as fetchAuth from "../../store/fetchActions/fetchAuth";

export default function LoginCard() {

  const dispatch = useDispatch();

  function handleSubmit(values) {
    dispatch(fetchAuth.getToken(values));
  }

  return (
    <Card
      bordered={false}
      style={{
        height: 400,
        width: 600,
        background: "#4e2126",
        borderRadius: 17,
        boxShadow: "2px",
      }}
    >
      <Row>
        <img alt="logo da Asense" src={titleImage} style={{ height: 80 }} />
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
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder={"username"} style={{ borderRadius: 7 }} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder={"********"}
                style={{ borderRadius: 7 }}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  marginTop: 20,
                  backgroundColor: "#ee7330",
                  width: 200,
                  height: 35,
                  borderRadius: 7,
                  fontSize: 18,
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

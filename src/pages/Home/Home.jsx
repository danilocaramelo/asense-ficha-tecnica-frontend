import { Row, Col, Card, Typography } from "antd";
import { BaseLayout } from "../../components";
import "./styles.scss";

const Title = Typography;

export default function Home() {
  return (
    <div className="page-home-content">
      <BaseLayout>
        <Row style={{ height: "40%" }} align="middle">
          <Col span={24} lg={{ span: 7, offset: 1 }}>
            <Title className="home-title">Bem vindo user123</Title>
          </Col>
          <Col span={24} lg={{ span: 7, offset: 1 }}>
            <Card>Teste</Card>
          </Col>
          <Col span={24} lg={{ span: 7, offset: 1 }}>
            <Card>Teste</Card>
          </Col>
        </Row>
      </BaseLayout>
    </div>
  );
}

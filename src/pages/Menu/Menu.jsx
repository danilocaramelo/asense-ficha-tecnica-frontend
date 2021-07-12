import { Row, Col, Card } from "antd";
import { BaseLayout } from "../../components";

export default function Menu() {
  return (
    <BaseLayout>
      <Row style={{ marginTop: 100 }}>
        <Col span={5} offset={4}>
          <Card
            bordered={false}
            style={{
              height: 190,
              width: 300,
              marginTop: 25,
              backgroundColor: "#ee7330",
            }}
          ></Card>
          <Card
            bordered={false}
            style={{
              height: 190,
              width: 300,
              marginTop: 25,
              backgroundColor: "#ee7330",
            }}
          ></Card>
        </Col>
        <Col span={5} offset={1}>
          <Card
            bordered={false}
            style={{
              height: 190,
              width: 300,
              marginTop: 25,
              backgroundColor: "#ee7330",
            }}
          ></Card>
          <Card
            bordered={false}
            style={{
              height: 190,
              width: 300,
              marginTop: 25,
              backgroundColor: "#ee7330",
            }}
          ></Card>
        </Col>
        <Col span={5} offset={1}>
          <Card
            bordered={false}
            style={{
              height: 190,
              width: 300,
              marginTop: 25,
              backgroundColor: "#ee7330",
            }}
          ></Card>
          <Card
            bordered={false}
            style={{
              height: 190,
              width: 300,
              marginTop: 25,
              backgroundColor: "#ee7330",
            }}
          ></Card>
        </Col>
      </Row>
    </BaseLayout>
  );
}

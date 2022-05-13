import { Row, Col, Card, Typography, Button } from "antd";
import {
  ShopOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { BaseLayout } from "../../components";
import segmentIcon from "../../assets/segmento.svg";
import homeImage from "../../assets/home-image.svg";
import "./styles.scss";
import paths from "../../constants/paths";

const Title = Typography;

export default function Home() {
  return (
    <div className="page-home-content">
      <BaseLayout>
        <Row style={{ height: "40%" }} align="middle">
          <Col span={24} xl={{ span: 7, offset: 2 }}>
            <Title className="home-title">Bem vindo, user123</Title>
          </Col>
          <Col span={10} offset={1} xl={{ span: 4, offset: 3 }}>
            <Card className="home-card">
              <ShopOutlined className="home-card-company-icon" />
              <Title className="home-card-company-title">Nome da Empresa</Title>
            </Card>
          </Col>
          <Col span={10} offset={1} xl={{ span: 4, offset: 1 }}>
            <Card className="home-card">
              <Row justify="center">
                <Col span={24}>
                  <Row justify="center">
                    <TeamOutlined className="home-card-team-icon" />
                    <Title className="home-card-workers-number">57</Title>
                  </Row>
                </Col>
                <img
                  className="home-card-segment-image"
                  src={segmentIcon}
                  alt="desenho com duas pessoas segurando um gráfico"
                />
                <Col span={24}>
                  <Row justify="center">
                    <Title className="home-card-segment-title">
                      Segmento de atuação
                    </Title>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="home-second-row" align="middle">
          <Col span={22} offset={1} xl={{ span: 10, offset: 2 }}>
            <Button
              className="home-link-buttons"
              type="link"
              href={paths.PRODUCT_LIST}
            >
              {<PlusCircleOutlined className="home-buttons-icon" />} Novo
              Produto
            </Button>
            <Button
              type="link"
              href={paths.PRODUCT_LIST}
              className="home-link-buttons"
            >
              {<UnorderedListOutlined className="home-buttons-icon" />}Lista de
              Produtos
            </Button>
          </Col>
          <Col span={20} offset={2} xl={{ span: 7, offset: 2 }}>
            <img
              className="home-image"
              src={homeImage}
              alt="pessoa apontando para um quadro"
            ></img>
          </Col>
        </Row>
      </BaseLayout>
    </div>
  );
}

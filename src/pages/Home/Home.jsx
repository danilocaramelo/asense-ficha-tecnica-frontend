import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Row, Layout, Col, Button } from "antd";
import footerImage from "../../assets/2622.jpg";
import paths from "../../constants/paths";
import "./styles.scss";
import { MainHeader } from "../../components";

const { Content } = Layout;

export default function Login() {
  const history = useHistory();
  const { authorized } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authorized) {
      history.replace("/menu");
    }
  }, [authorized, history]);

  return (
    <div className="page-home-content">
      <Layout>
        <MainHeader />
        <Content>
          <Row align="middle" style={{ height: 540 }}>
            <Col span={24} lg={{ span: 8, offset: 3 }}>
              <div className="home-title">Projeto Ficha Tecnica</div>
            </Col>
            <Col span={24} lg={{ span: 8, offset: 2 }}>
              <Row align="middle" justify="center">
                <Link to={paths.REGISTER}>
                  <Button className="home-buttons">Cadastre-se Grátis</Button>
                </Link>
                <Link to={paths.LOGIN}>
                  <Button className="home-buttons">Entrar</Button>
                </Link>
              </Row>
            </Col>
          </Row>
          <Row align="middle" justify="space-between" className="home-footer">
            <Col span={24} lg={{ span: 4, offset: 3 }}>
              <div className="home-footer-highlight-text">
                Maior controle de seus custos e lucros
              </div>
              <div className="home-footer-text">
                Com a ficha técnica você pode listar o preço de custo dos seus
                produtos
              </div>
            </Col>
            <Col span={24} lg={{ span: 5 }}>
              <ul className="home-footer-list">
                <li>Férias pagas</li>
                <li>Serviço gratuito</li>
                <li>Cadastre quantos produtos quiser</li>
                <li>Mais controle do acesso de seus colaboradores</li>
                <li>Veja o lucro exato de cada produto</li>
                <li>Veja produtos com maior custo e benefício de venda</li>
              </ul>
            </Col>
            <Col style={{ height: "100%" }} span={24} lg={{ span: 6 }}>
              <img
                className="home-footer-image"
                alt={"cartoon de varios comércios"}
                src={footerImage}
              ></img>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

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
            <Col span={8} offset={3}>
              <div className="home-title">Projeto Ficha Tecnica</div>
            </Col>
            <Col span={8} offset={2}>
              <Row align="middle" justify="center">
                <Link to={paths.REGISTER}>
                  <Button
                    style={{
                      backgroundColor: "#EE7330",
                      color: "#fff",
                      borderRadius: 30,
                      height: 63,
                      width: 210,
                      fontSize: 18,
                      fontWeight: "bold",
                      fontFamily: "Roboto Slab",
                      marginRight: 40,
                    }}
                  >
                    Cadastre-se Grátis
                  </Button>
                </Link>
                <Link to={paths.LOGIN}>
                  <Button
                    style={{
                      backgroundColor: "#EE7330",
                      color: "#fff",
                      borderRadius: 30,
                      height: 63,
                      width: 210,
                      fontSize: 18,
                      fontWeight: "bold",
                      fontFamily: "Roboto Slab",
                    }}
                  >
                    Entrar
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>
          <Row
            align="middle"
            justify="space-between"
            style={{ backgroundColor: "#FC7C5F", height: 365 }}
          >
            <Col span={4} offset={3}>
              <div
                style={{
                  fontSize: 35,
                  fontWeight: "bold",
                  fontFamily: "Roboto Slab",
                  color: "#fff",
                  marginBottom: 20,
                }}
              >
                Maior controle de seus custos e lucros
              </div>
              <div
                style={{
                  fontSize: 19,
                  fontFamily: "Roboto Slab",
                  color: "#fff",
                }}
              >
                Com a ficha técnica você pode listar o preço de custo dos seus
                produtos
              </div>
            </Col>
            <Col span={5}>
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Roboto Slab",
                  color: "#fff",
                }}
              >
                * Férias pagas
                <br /> * Serviço gratuito
                <br /> * Cadastre quantos produtos quiser
                <br /> * Mais controle do acesso de seus colaboradores
                <br /> * Veja o lucro exato de cada produto
                <br /> * Veja produtos com maior custo e benefício de venda
              </div>
            </Col>
            <Col>
              <img
                alt={"cartoon de varios comércios"}
                src={footerImage}
                style={{ height: 360, width: 550 }}
              ></img>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

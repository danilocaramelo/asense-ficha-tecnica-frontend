import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Layout, Col, Button } from "antd";
import headerIcon from "../../assets/title.png";
import footerImage from "../../assets/2622.jpg";
import "./styles.css";

const { Header, Content, Footer } = Layout;

export default function Login() {
  const history = useHistory();
  const { authorized } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authorized) {
      history.replace("/menu");
    }
  }, [authorized, history]);

  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: "#73353b",
            height: 90,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img alt="logo da Asense" src={headerIcon} style={{ height: 70 }} />
        </Header>
        <Content>
          <Row align="middle" style={{ height: 540 }}>
            <Col span={8} offset={3}>
              <div className="teste-fonte">Projeto Ficha Tecnica</div>
            </Col>
            <Col span={8} offset={2}>
              <Row align="middle" justify="center">
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
              </Row>
            </Col>
          </Row>
          <Row
            align="middle"
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
                Salário alto e diversos benefícios
              </div>
              <div
                style={{
                  fontSize: 19,
                  fontFamily: "Roboto Slab",
                  color: "#fff",
                }}
              >
                Além do salário em dólar, a Revelo oferece contrato PJ com
                diversos benefícios:
              </div>
            </Col>
            <Col span={4} offset={3}>
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Roboto Slab",
                  color: "#fff",
                }}
              >
                * Férias pagas
                <br /> * Plano de saúde
                <br /> * Plano odontológico
                <br /> * Vale flexível
                <br /> * Cursos e treinamentos
                <br /> * Equipamentos Desconto em academias
                <br /> * Plataforma de saúde mental
              </div>
            </Col>
            <Col offset={3}>
              <img
                alt={"cartoon de varios comércios"}
                src={footerImage}
                style={{ height: 360, width: 550 }}
              ></img>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

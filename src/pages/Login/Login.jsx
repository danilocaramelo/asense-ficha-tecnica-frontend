import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Layout } from "antd";
import { LoginCard } from "../../containers/index";
import headerIcon from "../../assets/asense-icon.png";
import "./styles.scss";

export default function Login() {
  const history = useHistory();
  const { Header } = Layout;
  const { authorized } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authorized) {
      history.replace("/menu");
    }
  }, [authorized, history]);

  return (
    <div className="page-login-content">
      <div className="login-background">
        <div className="login-background-overlay" />
          <Header className="login-header-header">
            <div className="login-header-logo-background">
              <img
                className="login-header-logo"
                alt="logo da Asense"
                src={headerIcon}
              />
            </div>
          </Header>
        <Row justify="center" align="middle" style={{ height: "90%" }}>
          <LoginCard />
        </Row>
      </div>
    </div>
  );
}

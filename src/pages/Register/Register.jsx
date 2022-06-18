import { Row } from "antd";
import { RegisterCard } from "../../containers";
import { MainHeader } from "../../components";
import "./styles.scss";

export default function Register() {
  return (
    <>
      <div className="login-background">
        <div className="login-background-overlay"></div>
        <MainHeader />
        <Row
          justify="center"
          align="middle"
          className="page-register-register-card-container"
        >
          <RegisterCard />
        </Row>
      </div>
    </>
  );
}

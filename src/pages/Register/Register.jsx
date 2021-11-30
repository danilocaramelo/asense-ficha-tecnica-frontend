import { Row } from "antd";
import { RegisterCard } from "../../containers";
import { MainHeader } from "../../components";

export default function Register() {
  return (
    <>
      <div className="login-background">
        <div className="login-background-overlay">
        </div>
          <MainHeader />
          <Row justify="center" align="middle" style={{ height: "90%" }}>
            <RegisterCard />
          </Row>
      </div>
    </>
  );
}

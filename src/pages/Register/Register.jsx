import { Row } from "antd";
import { RegisterCard } from "../../containers";

export default function Register() {
  return (
    <>
      <div className="login-background">
        <div className="login-background-overlay">
          <Row justify="center" align="middle" style={{ height: "100%" }}>
            <RegisterCard />
          </Row>
        </div>
      </div>
    </>
  );
}

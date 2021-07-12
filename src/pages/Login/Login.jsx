import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row } from "antd";
import { LoginCard } from "../../containers/index";
import "./styles.css";

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
      <div className="login-background">
        <div className="login-background-overlay">
          <Row justify="center" align="middle" style={{ height: "100%" }}>
            <LoginCard />
          </Row>
        </div>
      </div>
    </>
  );
}

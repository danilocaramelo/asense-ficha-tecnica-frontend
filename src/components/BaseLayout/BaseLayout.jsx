import { Layout, Row, Tooltip, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import asenseIcon from "../../assets/asense-icon.png";
import { logout } from "../../store/fetchActions/fetchAuth";

const { Header, Content, Footer } = Layout;

export default function BaseLayout({ children }) {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout(history));
  }

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ backgroundColor: "#ffffff" }}>
        <Row justify="space-between" align="middle" style={{ marginTop: 10 }}>
          <img
            src={asenseIcon}
            alt="icone da asense"
            style={{ height: 40 }}
          ></img>
          <Tooltip title="Logout">
            <Button
              shape="circle"
              size="large"
              icon={<LogoutOutlined />}
              style={{ backgroundColor: "#ee7330", color: "#fff" }}
              onClick={handleLogout}
            />
          </Tooltip>
        </Row>
      </Header>
      <Content style={{ background: "#7b343c" }}>{children}</Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#4e2126",
          color: "#ffffff",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

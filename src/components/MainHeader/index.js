import { Layout, Button, Tooltip } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import headerIcon from "../../assets/title.png";
import { logout } from "../../store/fetchActions/fetchAuth";
import "./styles.scss";

export default function MainHeader({ logoutButton = false }) {
  const { Header } = Layout;
  const history = useHistory();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout(history));
  }

  return (
    <div className="component-main-header-content">
      <Header className="main-header-header">
        <img
          className="main-header-logo"
          alt="logo da Asense"
          src={headerIcon}
        />
        {logoutButton && (
          <Tooltip title="Logout">
            <Button
              shape="circle"
              size="large"
              icon={<LogoutOutlined />}
              style={{ backgroundColor: "#ee7330", color: "#fff" }}
              onClick={handleLogout}
            />
          </Tooltip>
        )}
      </Header>
    </div>
  );
}

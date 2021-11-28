import { Layout } from "antd";
import headerIcon from "../../assets/title.png";
import "./styles.scss";

export default function MainHeader() {
  const { Header } = Layout;
  return (
    <div className="component-main-header-content">
      <Header className="main-header-header">
        <img
          className="main-header-logo"
          alt="logo da Asense"
          src={headerIcon}
        />
      </Header>
    </div>
  );
}

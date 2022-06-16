import { Layout, Menu } from "antd";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { MainHeader } from "../../components";
import "./styles.scss";
import { Link } from "react-router-dom";
import paths from "../../constants/paths";

const { Sider, Content } = Layout;

export default function BaseLayout({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Layout className="component-base-layout-content">
      <MainHeader logoutButton />
      <Layout>
        {width >= 999 && (
          <Sider
            collapsible
            collapsed={collapsed}
            onMouseEnter={toggleCollapsed}
            onMouseLeave={toggleCollapsed}
            trigger={null}
          >
            <Menu className="base-layout-menu" mode="vertical" theme="dark">
              <Menu.Item
                className="base-layout-menu-item"
                key="1"
                icon={<HomeOutlined />}
              >
                <Link to={paths.HOME}>Home</Link>
              </Menu.Item>
              <Menu.Item
                className="base-layout-menu-item"
                key="2"
                icon={<UnorderedListOutlined />}
              >
                <Link to={paths.PRODUCT_LIST}>Lista de Produto</Link>
              </Menu.Item>
              <Menu.Item
                className="base-layout-menu-item"
                key="3"
                icon={<UnorderedListOutlined />}
              >
                <Link to={paths.SUPPLY_LIST}>Lista de Insumos</Link>
              </Menu.Item>
            </Menu>
          </Sider>
        )}
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

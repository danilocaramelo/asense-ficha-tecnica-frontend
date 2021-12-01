import { Layout, Menu } from "antd";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import { MainHeader } from "../../components";
import "./styles.scss";

const { Sider, Content } = Layout;

export default function BaseLayout({ children }) {
  const [collapsed, setCollapsed] = useState(true);

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout className="component-base-layout-content">
      <MainHeader logoutButton />
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onMouseEnter={toggleCollapsed}
          onMouseLeave={toggleCollapsed}
          trigger={null}
        >
          <Menu
            className="base-layout-menu"
            mode="vertical"
            theme="dark"
          >
            <Menu.Item
              className="base-layout-menu-item"
              key="1"
              icon={<HomeOutlined />}
            >
              Home
            </Menu.Item>
            <Menu.Item
              className="base-layout-menu-item"
              key="2"
              icon={<UnorderedListOutlined />}
            >
              Lista de Produto
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

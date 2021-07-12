import { Layout } from "antd";
import { Routers } from "./components";
import { addInterceptors } from "./config/interceptors";
import api from "./config/httpRequest";

const { Content } = Layout;

function App() {
  addInterceptors(api);
  return (
    <>
      <div className="App">
        <Layout>
          <Content>
            <Routers />
          </Content>
        </Layout>
      </div>
    </>
  );
}

export default App;

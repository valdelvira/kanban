import './App.css'
import Navigation from "./components/Navigation/Navigation";
import { Layout } from 'antd'
import KanbanPage from "./pages/KanbanPage";

const { Header, Content, Footer, Sider } = Layout

function App() {
  return (
    <Layout>
      <Sider>
        <Navigation />
      </Sider>
      <Layout>
        <h1>Hi!</h1>
        <Content>
          <KanbanPage />
        </Content>
        <Footer>
          2022 Created by Diego
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App

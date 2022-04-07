import './App.css'
import Navigation from "./components/Navigation/Navigation"
import { Layout } from 'antd'
import AppRoutes from './routes/AppRoutes'

const { Header, Content, Footer, Sider } = Layout

function App() {
  return (
    <Layout>
      <Sider>
        <Navigation />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <AppRoutes />
        </Content>
        <Footer>
          2022 Created by Diego
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App

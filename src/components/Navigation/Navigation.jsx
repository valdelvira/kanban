import {  Menu, Layout } from 'antd'

const {  Header, Content, Footer, Sider } = Layout


const Navigation = () => {
    return (  
        <Menu>
            <Menu.Item key='list'>
                Show my Kanban list
            </Menu.Item>
            <Menu.Item key='2'>
                Show my Kanban list
            </Menu.Item>
            <Menu.Item key='3'>
                Show my Kanban list
            </Menu.Item>                        
        </Menu>
    )
}

export default Navigation 
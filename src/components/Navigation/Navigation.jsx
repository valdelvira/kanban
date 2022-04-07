import {  Menu, Layout, Switch } from 'antd'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'



const Navigation = () => {

    const [theme, setTheme] = useState('dark')

    const changeTheme = value => setTheme(value ? 'light' : 'dark')


    return (  
        <>
            <Menu theme={theme} >
                <Switch
                    onChange={changeTheme}
                />Change Style
                <br/>
                <Menu.Item key='1'>
                   <NavLink to='/kanban'>Show my Kanban list</NavLink>
                </Menu.Item>
                <Menu.Item key='2'>
                    <NavLink to='/meme'>Meme Generator</NavLink>
                </Menu.Item>
                <Menu.Item key='3'>
                    Show my Kanban list
                </Menu.Item>                        
            </Menu>
        </>
    )
}

export default Navigation 
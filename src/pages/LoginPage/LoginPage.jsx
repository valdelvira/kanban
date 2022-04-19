import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import authService from '../../services/auth.service'

const LoginPage = () => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        debugger
        const { name, value } = e.target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const handleSubmit = e => {
        console.log(loginForm)
        authService
            .login(loginForm)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }



    return (
        <Form
            name="normal_login"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            autoComplete="off"
            onFinish={handleSubmit}
        >
            <Form.Item
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input
                    placeholder="email"
                    name='email'
                    onChange={handleInputChange}
                    value={loginForm.email}
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password
                    placeholder="Password"
                    name='password'
                    onChange={handleInputChange}
                    value={loginForm.password}
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginPage 
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import authService from '../../services/auth.service'


const SignInPage = () => {
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignup({
            ...signup,
            [name]: value
        })
    }

    const handleSubmit = e => {

        authService
            .signup(signup)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <Form
            onFinish={handleSubmit}
            name='signin'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            autoComplete='off'
        >
            <Form.Item
                name='name'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input
                    placeholder='Name'
                    name='name'
                    value={signup.name}
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item
                name='email'
                type='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input
                    placeholder='Email'
                    name='email'
                    value={signup.email}
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password
                    placeholder='Password'
                    name='password'
                    value={signup.password}
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SignInPage 
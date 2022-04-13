import { Button, Form, Input } from "antd"
import { Content } from "antd/lib/layout/layout"

const LoginPage = () => {
    return (
        <Form
            name="normal_login"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            autoComplete="off"
        >
            <Form.Item
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input placeholder="email" />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password placeholder="Password" />
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
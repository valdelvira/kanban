import { Button, Form, Input } from "antd"

const SignInPage = () => {
    return (
        <Form
            name="signin"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            autoComplete="off"
        >
            <Form.Item
                name='name'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input placeholder="Email" />
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

export default SignInPage 
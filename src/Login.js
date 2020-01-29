
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        return (
            <Layout>
                <div style={{ position: 'absolute', left: '50%', top: '50%', minWidth: 400, transform: 'translate(-50%, -50%)' }}>
                    <p>Welcome to Dr Rehab</p>
                    <Form onsubmit={this.handleSubmit} classname="login-form">
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" href='/Dashboard' htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <p><a href='/CreatePhysio'>Add a new user</a></p>
                        </Form.Item>

                    </Form>
                </div>
            </Layout>
        )
    }
}

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('container'));


import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
import axios from 'axios';



export default class CreatePhysio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createUser: {
                username: [],
                name: [],
                usertype: [],
                email_address: [],
                password: []
            },
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    };

    // inputdata = () => {
    //     axios.post('http://localhost:8000/api/CreateUser/Physiotherapist', {
    //         username: 'user1',
    //         name: 'name1',
    //         usertype: 'physio1',
    //         email_address: 'email1',
    //         password: 'password1'

    //     })
    // };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('http://localhost:8000/api/CreateUser/Physiotherapist', {
                    username: values.username,
                    name: values.name,
                    usertype: "Physiotherapist",
                    email_address: values.email_address,
                    password: values.password

                })
            }

        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout>
                <div style={{ position: 'absolute', left: '50%', top: '50%', minWidth: 400, transform: 'translate(-50%, -50%)' }}>
                    <p>Welcome to Dr Rehab</p>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Full Name"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('email_address', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="E-mail"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="password"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                                Create new user
                        </Button>
                        </Form.Item>

                    </Form>
                </div>
            </Layout>
        )
    }
}


CreatePhysio = Form.create({})(CreatePhysio);
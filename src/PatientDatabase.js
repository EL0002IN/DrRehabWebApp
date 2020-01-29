import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Icon, Layout } from 'antd';
import Navigator from './Navigator';

const { SubMenu } = Menu;

export default class PatientDatabase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Layout>
                <Navigator keys={['PatientDB']} />
                <p>Welcome to patient database</p>
            </Layout>
        )
    }
}
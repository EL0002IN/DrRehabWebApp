import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Icon, Layout } from 'antd';
import Navigator from './Navigator';

const { SubMenu } = Menu;

export default class Dashboard extends Component {

    render() {
        return (
            <Layout>
                <Navigator keys={['Dashboard']} />
                <p>Welcome to the dashboard</p>
            </Layout>
        )
    }
}
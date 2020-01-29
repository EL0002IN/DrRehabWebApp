import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Icon } from 'antd';
import CreatePatient from './CreatePatient';

const { SubMenu } = Menu;

export default class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: this.props.keys,
        }
    }

    // handleClick = e => {
    //     console.log('click ', e);
    //     this.setState({
    //         keys: e.key,
    //     });
    // };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={this.props.keys} mode="horizontal">
                <Menu.Item key="Dashboard" href='/Dashboard'>
                    <a href='/Dashboard'>
                        <Icon type="mail" />
                        Dashboard</a>
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="setting" />
                            Patient
            </span>
                    }
                >
                    <Menu.Item key="PatientDB"><a href='/PatientDatabase'>Patient Database</a></Menu.Item>
                    <Menu.Item key="CreatePatient">
                        <a href='/CreatePatient'>Create New Patient</a>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item key="logout">
                    <a href='/'>Logout</a>
                </Menu.Item>

            </Menu>
        )
    }
}
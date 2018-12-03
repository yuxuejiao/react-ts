import * as React from "react";
import {Link} from "react-router-dom";
import {Button, Menu, Row, Col} from "antd";
// import history from "../History";

export default class HeadMenu extends React.Component<any> {
    public logout = () => {
        localStorage.clear();
        // 获取history
        // 方案一： 从父组件传递
        this.props.history.push("/");
        // 方案二： 从外部引入history
        // history.push("/");
    }

    public render() {
        return <>
            <Row>
                <Col span={20}>
                    <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
                        <Menu.Item key={"home"}>
                            <Link to="/home">Home</Link>
                        </Menu.Item>
                        <Menu.Item key={"about"}>
                            <Link to="/about">About</Link>
                        </Menu.Item>
                        <Menu.Item key={"user"}>
                            <Link to="/user">User</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={4}>
                    <Button onClick={this.logout}>退出登录</Button>
                </Col>
            </Row>
        </>
    }
}
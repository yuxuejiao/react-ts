import * as React from "react";
import {Button} from "antd";
import {observer} from "mobx-react";
import LoginStore from "./LoginStore";
// import * as _ from "lodash";
@observer
export default class Login extends React.Component<any> {
    public loginStore = new LoginStore();
    public loginSuccess = () => {
        this.props.history.push("/home");
        localStorage.setItem("hasLogin", "true");
        console.log("test");
    }

    public render() {
        const {userName, setUserName} = this.loginStore;
        return <><Button onClick={this.loginSuccess}>Login</Button><span>{userName}</span><a
            onClick={() => setUserName("yyy")}>设置</a></>
    }
}

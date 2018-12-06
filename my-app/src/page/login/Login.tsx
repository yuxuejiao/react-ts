import * as React from "react";
import {Button} from "antd";
import {observer} from "mobx-react";
import LoginStore from "./LoginStore";
// import * as _ from "lodash";
import * as styles from "./Login.pcss"
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
        return <>
        <Button onClick={this.loginSuccess}>Login</Button>
        <span
            className={styles.test}>{userName}
            <i>222</i>
        </span>
        {/*<div className={styles.rect}>Hello World</div>*/}
        <a onClick={() => setUserName("yyy")}>设置</a>
        </>
    }
}

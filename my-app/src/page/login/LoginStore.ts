import {action, observable} from "mobx";

export default class LoginStore{
    @observable
    public userName: string = "111";

    @action
    public setUserName = (userName: string)=>{
        this.userName = userName;
    }
}
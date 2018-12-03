import {asyncComponent} from "./AsyncComponent";
export const routes = [
    {path: "/home",component: asyncComponent(()=>import("./home/index"))},
    {path: "/user", component: asyncComponent(()=>import("./user/index"))},
    {path: "/about", component: asyncComponent(()=>import("./about/index"))},
]


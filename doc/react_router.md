### 配置react-router-v4.3.1

    1、react-router VS react-router-dom VS react-router-native
       react-router 实现了路由的核心功能
       react-router-dom 基于react-router，加入了在浏览器运行环境下的一些功能，用于浏览器
       react-router-native 基于react-router， 加入了在react-native运行环境下的一些的功能，用于原生应用
       
    所以：
      react-router-dom依赖react-router，我们使用npm安装依赖的时候，只需要安装相应环境下的库即可，不用再显式安装react-router。
      基于浏览器环境的开发，只需要安装react-router-dom；基于react-native环境的开发，只需要安装react-router-native。
      npm会自动解析react-router-dom包中package.json的依赖并安装
       react-router-dom中package.json依赖:
       "dependencies": {
           "history": "^4.7.2",
           "invariant": "^2.2.2",
           "loose-envify": "^1.3.1",
           "prop-types": "^15.5.4",
           "react-router": "^4.2.0",
           "warning": "^3.0.0"
         }
       安装了react-router-dom，npm会解析并安装上述依赖包。可以看到，其中包括react-router。

    2、react-router4 路由跳转
       在之前的版本中，react-router模块会暴露browserHistory等API，可以使用browserHistory.push控制路由的跳转。
       但是在react-router4中不再提供。
       我们可以实例化一个history对象，然后传给 Router
       eg:
       创建History.ts
       import {createHashHistory} from 'history';
       export default createHashHistory();
       在Router中引入history
       <Router history={createHashHistory()}>

       在非组件的其他地方，该实例化history对象，也可以引入调用
       import history from "./History.ts";
       history.push();

    3、react-router4异步加载组件  [https://www.jianshu.com/p/dc867f5d28b1]
       利用高阶函数替代静态引入

       

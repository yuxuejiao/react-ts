### 项目搭建过程
- 1、首先升级了node版本，在官网上下载了node最新版本。从而Npm也更新到最新版本

- 2、使用脚手架 create-react-app-typescript，运行命令npx create-react-app my-app --scripts-version=react-scripts-ts
此时报错 Could not install from "Files\nodejs\node_cache\_npx\9476" as it does not contain a package.json file
参照[http://www.pianshen.com/article/541461726/] 可解决该问题。主要原因为node_cache所在的文件路径包含空格。

- 3、继续执行命令 cd my-app  npm start
              
- 4、安装需要的库 
  - react-router 
  - antd 
  - mobx 
  - postcss

- 5、配置react-router-v4.3.1
    [https://www.jianshu.com/p/548674270455]
    1、react-router 与 react-router-dom的区别
       react-router 实现了路由的核心功能
       react-router-dom 基于react-router，加入了在浏览器运行环境下的一些功能
       react-router-native 基于react-router， 加入了在react-native运行环境下的一些的功能
       
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
       
       npm install react-router-dom
       
       遇到错误  Could not find a declaration file for module 'react-router-dom'
       
       执行  npm install @types/react-router-dom
       
       取消tslint 规定了必须按顺序导入文件
        在tslint.json中配置 
        "rules": {
                    "ordered-imports": false
                  }
                  
                  
        嵌套路由 两种方式
        [https://reacttraining.com/react-router/web/example/route-config]
        [https://www.cnblogs.com/sylarmeng/p/6920903.html]
        
        [https://github.com/brickspert/blog/issues/3]
        
        [https://zhuanlan.zhihu.com/p/21629069]
        
- 6、配置antd 
     npm install antd --save
     在 App.css中引入antd的样式  @import '~antd/dist/antd.css';

       

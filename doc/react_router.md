配置react-router-v4.3.1
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


       

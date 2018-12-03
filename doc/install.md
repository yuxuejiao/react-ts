### 通过WebStorm导入Github项目
- 1、下载最新版本git
- 2、webstorm 中设置git地址
	settings -> Version Control -> Git -> Path to Git executable 填入 git.exe地址
- 3、webstorm中关联github账户
	settings -> Version Control -> Github -> Host: github.com Login: github用户名 Password: github密码
- 4、webstorm中import github项目
	VCS -> Git -> clone -> 填入 github项目地址

### 项目搭建过程
- 1、首先升级了node版本，在官网上下载了node最新版本。从而Npm也更新到最新版本

- 2、使用脚手架 create-react-app-typescript，运行命令npx create-react-app my-app --scripts-version=react-scripts-ts
此时报错 Could not install from "Files\nodejs\node_cache\_npx\9476" as it does not contain a package.json file
参照[http://www.pianshen.com/article/541461726/] 可解决该问题。主要原因为node_cache所在的文件路径包含空格。

- 3、继续执行命令 cd my-app  npm start

- 4、安装需要的库
    - 1、安装react-router-v4.3.1
         npm install react-router-dom
         遇到错误  Could not find a declaration file for module 'react-router-dom'
         执行  npm install @types/react-router-dom
         
    - 2、安装ant design
          npm install antd --save
          在 App.css中引入antd的样式  @import '~antd/dist/antd.css';

    - 3、安装lodash
          npm intall lodash --save
    
    - 4、css方案比较选择



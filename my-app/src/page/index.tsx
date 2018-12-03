import 'babel-polyfill'; // 一定要在第一行引入
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {configure} from "mobx";

// mobx的严格模式
configure({
    enforceActions: "observed"
})
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

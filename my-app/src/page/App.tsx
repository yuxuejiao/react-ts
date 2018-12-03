import * as React from 'react';
import './App.css';
import {Route, Switch, Router} from "react-router-dom";
import Login from "./login/index";
import {routes} from "./Route";
import HeadMenu from "./headMenu/HeadMenu";
import {createHashHistory} from "history";
class App extends React.Component<any> {
    public render() {
        return (
            <Router history={createHashHistory()}>
                <div>
                    {/*A <Switch> renders the first child <Route> that matches.
                     A <Route> with no path always matches.*/}
                    <Switch>
                        <Route path="/" exact={true} component={Login}/>
                        <>
                            <HeadMenu history={createHashHistory()}/>
                            {routes.map((value, index) => {
                                return <Route path={value.path} key={index}
                                              component={value.component}/>
                            })}
                        </>
                    </Switch>
                </div>
            </Router>

        );
    }
}
export default App;

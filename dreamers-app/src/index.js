import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import App from "./App";
import Dreams from './Components/Dreams.js';
import Settings from './Components/Settings.js'
import Log from './Components/Log.js';
import Main from './Components/Main.js'
import {BrowserRouter as Router, Route} from "react-router-dom";
const Root = () => (
    <MuiThemeProvider>
        <Router>
            <div>
                <Route path="/" component={App}/>
                <Route path="/Login" component={Main}/>
                <Route path="/Dreams" component={Dreams}/>
                <Route path="/Log" component={Log}/>
                <Route path="/Settings" component={Settings}/>
            </div>
        </Router>
    </MuiThemeProvider>
);
ReactDOM.render(<Root />, document.getElementById('root'));

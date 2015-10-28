/**
 * User: Anderlu
 * Date: 15/10/28
 * Time: 下午2:41
 */

import React, { PropTypes, Component } from "react";
import Home from "./components/pages/Home";

export default class App extends Component {

    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}

React.render(<App />, document.body);
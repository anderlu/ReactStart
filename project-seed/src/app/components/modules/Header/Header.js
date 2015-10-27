/**
 * User: Anderlu
 * Date: 15/10/27
 * Time: 下午3:30
 */

import React, { Component } from "react";
import styles from "Header.scss";

export default class Header extends Component{

    render() {
        return (
            <header>
                <div className="container">
                    <a className="Header-brand" href="/">
                        <span className="Header-brandTxt">Your Company</span>
                    </a>
                    <div className="Header-banner">
                        <h1 className="Header-bannerTitle">Demo</h1>
                        <p className="Header-bannerDesc">Complex web apps made easy</p>
                    </div>
                </div>
            </header>
        );
    }
}
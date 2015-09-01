/**
 * User: Anderlu
 * Date: 15/9/1
 * Time: 下午3:55
 */
/*var React = require('react');

var TodoList = React.createClass({
    render: function() {
        var createItem = function(itemText) {
            return <li>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

module.exports = TodoList;*/

import React from 'react';

export default class TodoList extends React.Component{
    render(){
        let createItem = (itemText) => {
            return <li key={itemText}>{itemText}</li>;
        };
        return (
            <ul>{this.props.items.map(createItem)}</ul>
        );
    }

}



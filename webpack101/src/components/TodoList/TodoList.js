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
import TodoItem from '../TodoItem';

export default class TodoList extends React.Component{

    render(){

        let createItem = (itemText) => {
            let _id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
            return <TodoItem key={_id} text={itemText}/>;
        };
        return (
            <div>
                <h3>To do List!!</h3>
                <ul>{this.props.items.map(createItem)}</ul>
            </div>
        );
    }

}



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

import React, { PropTypes } from 'react';

class TodoItem extends React.Component{

    static propTypes : {
        text: PropTypes.string
    };

    handleClick(e){
        console.dir(e.target.innerText);
    }
    render(){
        let _id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        return (
            <li id={_id} onClick={this.handleClick}>{this.props.text}</li>
        );
    }

}

export default TodoItem;

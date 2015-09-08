/**
 * User: Anderlu
 * Date: 15/9/1
 * Time: 下午3:56
 */
/*
var React = require('react');
var TodoList = require('../TodoList');
*/
import React, { PropTypes } from 'react';
import TodoList from '../TodoList';

var TodoApp = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        if(this.state.text){
            var nextItems = this.state.items.concat([this.state.text]);
            var nextText = '';
            this.setState({items: nextItems, text: nextText});
        }
    },
    render: function() {
        return (
            <div>
                <h3>TODO!</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

/*
import React, { PropTypes } from 'react';
import TodoList from '../TodoList';

class TodoApp extends React.Component{

    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here

        this.state = {items: [], text: ''};

        //this.handleSubmit = this.handleSubmit.bind(this);
        //this.onChange = this.onChange.bind(this);
        this.render = this.render.bind(this);

    }

    /!*getInitialState() {
        return {items: [], text: ''};
    }*!/

    /!*onChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit (e) {
        e.preventDefault();
        console.log(this);
        if (this.state.text) {
            var nextItems = this.state.items.concat([this.state.text]);
            var nextText = '';
            this.setState({items: nextItems, text: nextText});
        }
    }*!/

    onChange = (e) => {
        this.setState({text: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this);
        if (this.state.text) {
            var nextItems = this.state.items.concat([this.state.text]);
            var nextText = '';
            this.setState({items: nextItems, text: nextText});
        }
    }

    render(){
        return (
            <div>
                <h3>TODO!</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.onChange.bind(this)} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
}

export default TodoApp;*/

React.render(<TodoApp />, document.body);
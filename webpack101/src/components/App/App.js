/**
 * User: Anderlu
 * Date: 15/9/1
 * Time: 下午3:56
 */
var React = require('react');
var TodoList = require('../TodoList');

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
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

React.render(<TodoApp />, document.body);
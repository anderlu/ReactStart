/**
 * User: Anderlu
 * Date: 15/7/9
 * Time: 下午3:42
 */
//var div = React.createElement('div', null, "Hello React");
//
//// 使用 JSX
//var div = <div>Hello React</div> ;
//
//React.render(div, document.body);


var HelloMessage = React.createClass({
    render: function () {
        return <div>Hello {this.props.name}</div> ;
    }
});

React.render(<HelloMessage name="Anderlu" />, document.body);
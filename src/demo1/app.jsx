/**
 * User: Anderlu
 * Date: 15/7/9
 * Time: 下午3:42
 */
var HelloMessage = React.createClass({
    render: function () {
        return <div>Hello {this.props.name}</div> ;
    }
});

React.render(<HelloMessage name="Anderlu!" />, document.body);
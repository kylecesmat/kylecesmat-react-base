import React            from "react/addons";
import { RouteHandler } from "react-router";

require('normalize.css');
require('../scss/app.scss');

let Application = React.createClass({
    render() {
        return (
            <div className='app'>
                <RouteHandler key={name} {...this.props} />
            </div>
        );
    }
});

export default Application;

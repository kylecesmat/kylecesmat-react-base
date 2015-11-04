'use strict';
import React from "react";

require('normalize.css');
require('../scss/app.scss');

let Application = React.createClass({
    displayName : 'Application',

    render() {
        return (
            <div className='app'>
                {this.props.children}
            </div>
        );
    }
});

export default Application;

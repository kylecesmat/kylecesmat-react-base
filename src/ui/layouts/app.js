import React from "react/addons";
import { RouteHandler } from "react-router";

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

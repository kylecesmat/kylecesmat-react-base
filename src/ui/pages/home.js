import React from "react/addons";
let { PureRenderMixin } = React.addons;

let HomePage = React.createClass({
  mixins: [ PureRenderMixin ],

    render() {
        return (
            <div className='page--home'>Home</div>
        );
    }
});

export default HomePage;

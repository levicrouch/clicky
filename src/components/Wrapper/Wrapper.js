import React from "react";

const Wrapper = props => (
    <div className="images wrapper">
        <div className="row">
            <div className="col l8 image-row offset-l3">{props.children}</div>
        </div>
    </div>
);

export default Wrapper;

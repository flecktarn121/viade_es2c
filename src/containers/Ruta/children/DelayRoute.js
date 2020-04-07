import Delay from 'react-delay-render';
import React from "react";

const render = () => {
    console.log("Rendered");
};

const DelayRoute = () => {
    console.log("Rendering");
};

export default Delay({ delay: 2000,  onRender: render})(DelayRoute);
const React = require('react');
const ReactDom = require('react-dom');

const HelloWorld = require('./hello-world.jsx');

ReactDom.render(
    <HelloWorld/>,
    document.getElementById('content')
)
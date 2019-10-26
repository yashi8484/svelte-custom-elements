import React from 'react';
import ReactDOM from 'react-dom';

const HelloMessage = props => {
  return <div>This is Svelte x {props.name} page</div>;
};

var mountNode = document.getElementById('app');
ReactDOM.render(<HelloMessage name="React" />, mountNode);

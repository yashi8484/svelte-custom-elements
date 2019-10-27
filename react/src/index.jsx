import React from "react";
import ReactDOM from "react-dom";
import "../public/svelte-components";

const HelloMessage = props => {
  return (
    <>
      <div>This is Svelte x {props.name} page</div>
      <my-component />
    </>
  );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="React" />, mountNode);

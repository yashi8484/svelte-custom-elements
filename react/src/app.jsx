import React from "react";
import "./app.css";
import "../public/svelte-components";

export const App = props => {
  return (
    <div className="container">
      <h1>This is Svelte x {props.name} page</h1>
      <div className="content-wrapper">
        {[...Array(10)].map((_, i) => (
          <svelte-card
            title={`Card in React ${i + 1}`}
            message={`This is svelte-card element ${i + 1}`}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

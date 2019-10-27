import React from "react";
import "./app.css";
import "../public/svelte-components";

export const App = props => {
  function handleButtonOnClick() {
    console.log("button clicked!");
  }

  return (
    <div className="container">
      <h1>Svelte x {props.name}</h1>
      <div className="content-wrapper">
        {[...Array(10)].map((_, i) => (
          <svelte-card
            title={`Card in React ${i + 1}`}
            message={`svelte-card element ${i + 1}`}
            key={i}
          >
            <svelte-button
              slot="footer"
              onClick={handleButtonOnClick}
            ></svelte-button>
          </svelte-card>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import "./app.css";
import "../public/svelte-elements";

export const App = props => {
  // Vue側とコードを似せるために記述
  const cards = [...Array(10)].map((_, i) => ({
    title: `Card in React ${i + 1}`,
    message: `svelte-card element ${i + 1}`
  }));

  function handleButtonOnClick() {
    console.log("button clicked!");
  }

  return (
    <div className="container">
      <h1>Svelte x {props.name}</h1>
      <div className="content-wrapper">
        {cards.map((card, i) => (
          <svelte-card title={card.title} message={card.message} key={i}>
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

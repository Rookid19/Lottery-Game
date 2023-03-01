import React, {  useState } from "react";
import { prices } from "../utils/Data";

function Results({bets}) {
  const [price, setPrice] = useState(2);

  return (
    <div className="results_container">
      <div className="bet_amout">
        <span id="small_text">Each bet</span>
        
        {prices.map((amount) => (
          <button
            className="price_button"
            key={amount}
            style={{
              backgroundColor: price === amount ? "#5864e0" : null,
              color: price === amount ? "#fff" : null,
            }}
            onClick={() => setPrice(amount)}
          >
            {amount}
          </button>
        ))}

        <button className="cart_button">Add to cart</button>
      </div>
      <div>
        <div id="total_bets">
          <span id="red">{bets}</span> bets. Total <span id="red">{bets * price}</span>
        </div>
      </div>
    </div>
  );
}

export default Results;

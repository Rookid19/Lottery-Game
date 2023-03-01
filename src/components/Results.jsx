import React, { useEffect, useState } from "react";
import useRow from "../hooks/useRows";
import { prices } from "../utils/Data";
import { getCombinations } from "../utils/Formula";

function Results() {
  const { firstArray, secondArray, onSelect } = useRow();
  const [bets, setBets] = useState("");
  const [price, setPrice] = useState(2);

  const row1Combination = getCombinations(firstArray, 1);
  const row2Combination = getCombinations(secondArray, 2);

  const showResults = () => {
    let counter = 0;
    row1Combination.forEach((number) => {
      row2Combination.forEach((value) => {
        if (!value.includes(number[0])) {
          counter++;
        }
      });
    });

    setBets(counter);
  };

  useEffect(() => {
    showResults();
  }, [onSelect]);
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

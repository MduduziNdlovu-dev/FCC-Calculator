import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState(""); 

  function handleClick(e) {
    const value = e.target.textContent;
  
    setExpression((prev) => {
      // Prevent multiple leading zeros
      if (prev === "0" && value !== "." && !isNaN(value)) {
        return value;
      }
  
      // Prevent multiple decimals in a single number
      const lastNumber = prev.split(/[\+\-\*/]/).pop();
      if (value === "." && lastNumber.includes(".")) {
        return prev;
      }
  
      // Handle consecutive operators
      if ("+-*/".includes(value)) {
        // If the last character is an operator (excluding the negative sign), replace it with the current operator
        if ("+-*/".includes(prev.slice(-1)) && value !== "-") {
          return prev.slice(0, -1) + value;
        }
  
        // Handle the negative sign only if it is at the beginning or after an operator
        if (value === "-" && (prev === "" || "+-*/".includes(prev.slice(-1)))) {
          return prev + value;
        }
  
        // Special case: if there is a '+' after a '-' (should be interpreted as subtraction)
        if (value === "+" && prev.slice(-1) === "-") {
          return prev.slice(0, -1) + "-";
        }
      }
  
      return prev + value;
    });
  }
  

  function handleEqualsClick() {
    try {
      const result = eval(expression.replace(/x/g, "*").replace(/÷/g, "/")); 
      setExpression(result.toString()); 
    } catch (e) {
      setExpression("Error"); 
    }
  }

  // Clear everything
  function clear() {
    setExpression("");
  }

  return (
    <>
      <div>
        <div className="calculator">
          <div className="display">
            <div id="display">{expression || "0"}</div>
          </div>
          <div className="btn-section">
            <div id="history" className="operator">
              history
            </div>
            <div id="unitM" className="operator">
              Unit Calc
            </div>
            <div id="scientific" className="operator">
              Scientific
            </div>
            <div id="delete" className="operator red">
              Delete
            </div>

            {/* Row 5 */}
            <button id="clear" onClick={clear} className="num">
              AC
            </button>
            <button id="parentheses" onClick={handleClick} className="num">
              ()
            </button>
            <button id="percent" onClick={handleClick} className="num">
              %
            </button>
            <button id="divide" onClick={handleClick} className="btn">
              ÷
            </button>
            {/* Row 4 */}
            <button id="seven" onClick={handleClick} className="num">
              7
            </button>
            <button id="eight" onClick={handleClick} className="num">
              8
            </button>
            <button id="nine" onClick={handleClick} className="num">
              9
            </button>
            <button id="multiply" onClick={handleClick} className="btn">
              x
            </button>
            {/* Row 3 */}
            <button id="four" onClick={handleClick} className="num">
              4
            </button>
            <button id="five" onClick={handleClick} className="num">
              5
            </button>
            <button id="six" onClick={handleClick} className="num">
              6
            </button>
            <button id="subtract" onClick={handleClick} className="btn">
              -
            </button>
            {/* Row 2 */}
            <button id="one" onClick={handleClick} className="num">
              1
            </button>
            <button id="two" onClick={handleClick} className="num">
              2
            </button>
            <button id="three" onClick={handleClick} className="num">
              3
            </button>
            <button id="add" onClick={handleClick} className="btn">
              +
            </button>
            {/* Row 1 */}
            <button id="neg-op" onClick={handleClick} className="neg-op">
              +/- 
            </button>
            <button id="zero" onClick={handleClick} className="num">
              0
            </button>
            <button id="decimal" onClick={handleClick} className="num">
              .
            </button>
            <button id="equals" onClick={handleEqualsClick} className="btn equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

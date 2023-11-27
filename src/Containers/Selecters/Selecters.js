import "./selecters.css";
import { useState } from "react";

function Selecters() {

  const [selector, setSelector] = useState(null);


  return (
    <div className="Selecters">
      <div className="selectorContainer">

        <h1>Selecters</h1>


        <div className="sel3Container">
          <div
            onClick={() => {
              setSelector(0);
            }}
            className={selector === 0 ? "greenSq" : "orangeSq"}
          ></div>
          <div
            onClick={() => {
              setSelector(1);
            }}
            className={selector === 1 ? "greenSq" : "orangeSq"}
          ></div>
          <div
            onClick={() => {
              setSelector(2);
            }}
            className={selector === 2 ? "greenSq" : "orangeSq"}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Selecters;
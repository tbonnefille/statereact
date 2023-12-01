import "./converter.css";
import { useState } from "react";

const Converters = () => {
    const [euroValue, setEuroValue] = useState("");

    return (

        <div className="Converter">

            <div>
                <h1>converter</h1>
            </div>


            <div className="converterBox">
                <div className="inputBox">
                    <input
                    placeholder="entrez une valeur en €"
                        value={euroValue}
                        onChange={(event) => {
                            // console.log(event.target.value);
                            setEuroValue(event.target.value);
                        }}
                    />

                </div>
                <div className="resultBox"> Conversion en dollars $$$ = {euroValue * 1.1} $USD </div>

            </div>

        </div>
    );
};

export default Converters;
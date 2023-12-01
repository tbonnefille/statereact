import "./configurateur.css";
import { useState } from "react";

function Configurateur() {


    const [selector1, setSelector1] = useState(null);
    const [selector2, setSelector2] = useState(null);

    let [numb1, setNumb1] = useState(0);
    let [numb2, setNumb2] = useState(0);


    return (
        <div className="Configurateur">

            <h1>Configurateur</h1>

            <div className="configContainer">
                <div className="titleBar">CONFIGURE TON VELO</div>

                <div className="titleBar">1 choisis ton modèle</div>

                <div
                    onClick={() => {
                        setSelector1(0);
                        setNumb1(500);
                    }}
                    className={selector1 === 0 ? "configTabSelected" : "configTab"}
                >Vélo de ville (500€)
                </div>


                <div
                    onClick={() => {
                        setSelector1(1);
                        setNumb1(700);
                    }}
                    className={selector1 === 1 ? "configTabSelected" : "configTab"}
                >Mountain Bike (700€)
                </div>

                <div className="titleBar">2 choisis ta selle</div>

                <div
                    onClick={() => {
                        setSelector2(0);
                        setNumb2(20);
                    }}
                    className={selector2 === 0 ? "configTabSelected" : "configTab"}


                >Classique (20€)
                </div>

                <div
                    onClick={() => {
                        setSelector2(1);
                        setNumb2(80);
                    }}
                    className={selector2 === 1 ? "configTabSelected" : "configTab"}


                >Sur suspensions (80€)
                </div>


                <div className="titleBar">TOTAL : {numb1 + numb2}€</div>

            </div>
        </div>
    );

}
export default Configurateur;
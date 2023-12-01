import "./todoliste.css";
import { useState } from "react";

function Todoliste() {

    const [itemsArray, setitemsArray] = useState(["salade", "tomates", "oignons"]);
    let [inputTxt, setinputTxt] = useState("");



    return (
        <div className="Todoliste">

            <h1>To Do Liste</h1>

            <div className="todobox">

                <input className="searchInput" placeholder="SEARCH"></input>

                <div className="taskContainer">
                    {itemsArray.map((element,i) => {
                        return <div className="taskBox">

                            <div className="taskelement">{element}</div>

                            <div className="x"
                            
                            onClick={() => {
                        
                        const newArr2 = JSON.parse(JSON.stringify(itemsArray));
                            console.log(i)

                          newArr2.splice([i],1);
                            

                            
                        setitemsArray(newArr2);
                            
                    }}    
                            
                        >X</div>

                        </div>;

                    })}
                </div>


                <input className="taskInput"

                    type="text"
                    value={inputTxt}
                    onChange={(event) => {
                        setinputTxt(event.target.value);

                    }}

                ></input>


                <button
                    onClick={() => {
                        // 1 FAIRE UNE HARD COPY
                        const newArr = JSON.parse(JSON.stringify(itemsArray));

                        // 2 FAIRE DES OPERATIONS SUR MON TABLEAU OU MON OBJET
                        newArr.push(inputTxt);

                        // 3 REMPLACER LE STATE PAR LE NOUVEAU
                        setitemsArray(newArr);

                        setinputTxt("");

                    }}
                >
                    ADD TO LIST
                </button>







            </div>


        </div >
    );

}
export default Todoliste;
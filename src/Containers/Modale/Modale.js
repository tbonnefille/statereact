import "./modale.css";
import { useState } from "react";

const Modal = () => {
  const [modal, setModale] = useState(false);
  return (
    <>
      <div className="modalContainer">
       <div className="modaltitle">
        <h1>EXERICE - LE POP UP (modale)</h1>
        </div>
        {modal && (
          <div className="modale">
            <div>
              <div>VOUS ETES NOTRE 1.000.000ème client !</div>
              <div className="mille">Vous remportez la somme de 1000 euros</div>
              <div>
                Pour le recevoir, veuillez entrer votre numéro de carte
                banquaire ici
              </div>
              <input type="text" placeholder="votre numero" />
              <button
                onClick={() => {
                  setModale(false);
                }}
              >
                valider
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            setModale(true);
          }}
        >
          click here
        </button>

        
      </div>
    </>
  );
};

export default Modal;
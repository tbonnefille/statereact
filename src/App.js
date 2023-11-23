
import './App.css';
import { useState } from 'react';


function App() {

  const [number, setNumber] = useState(0)
  const [number2, setNumber2] = useState(0)




  return (
    <div className="App">
      <div className='divNumb1'>{number}</div>

      <button
        onClick={() => {

          if (number < 11 && number+number2<18) {


            setNumber(number + 1)

          }

        }}

      >+</button>



      <button
        onClick={() => {

          if (number > 0) {

          setNumber(number - 1);

          }

        }}


        
      >-</button>



      <div className='divNumb2'>{number2}</div>

      <button
        onClick={() => {

          if (number2 < 11 && number+number2<18) {


            setNumber2(number2 + 1)

          }

        }}
      >+</button>

      <button
        onClick={() => {

          if (number2 > 0) {

          setNumber2(number2 - 1);

          }

        }}


      >-</button>



      <div className="result">

        {number + number2}

      </div>



    </div>
  );
}

export default App;
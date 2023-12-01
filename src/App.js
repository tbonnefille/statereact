import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./Containers/Counters/Counters";
import Selecters from "./Containers/Selecters/Selecters";
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Configurateur from "./Containers/Configurateur/Configurateur";
import Converter from "./Containers/Converter/Converter";
import Modale from "./Containers/Modale/Modale";
import Todoliste from "./Containers/Todolist/Todoliste";


function App() {



return (
    <div className="App">

<BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/selecters" element={<Selecters />} />
        <Route path="/configurateur" element={<Configurateur />} />
        <Route path="/converter" element={<Converter/>} />
        <Route path="/modale" element={<Modale/>} />
        <Route path="/todoliste" element={<Todoliste/>} />
        
    </Routes>
</BrowserRouter>


</div>

);

}




export default App;
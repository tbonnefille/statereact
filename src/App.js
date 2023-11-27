import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./Containers/Counters/Counters";
import Selecters from "./Containers/Selecters/Selecters";
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";





function App() {



return (
    <div className="App">

<BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/selecters" element={<Selecters />} />
    </Routes>
</BrowserRouter>


</div>

);

}




export default App;
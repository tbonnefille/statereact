import "./nav.css";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className="Nav">

            <ul>
                <Link to="/">HOME </Link>
                <Link to="counters">COMPTEURS </Link>
                <Link to="selecters">SELECTERS </Link>
                <Link to="configurateur">CONFIGURATEUR </Link>
                <Link to="converter">CONVERTER </Link>
                <Link to="modale">MODALE </Link>
                <Link to="todoliste">TO DO LISTE </Link>
            </ul>

        </div>
    );

}
export default Nav;
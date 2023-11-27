import "./nav.css";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className="Nav">

            <ul>
                <Link to="/">Home </Link>
                <Link to="counters">COMPTEURS </Link>
                <Link to="selecters">SELECTERS </Link>
            </ul>

        </div>
    );

}
export default Nav;
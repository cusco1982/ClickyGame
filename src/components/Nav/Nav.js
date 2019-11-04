import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li //className="brand animated lightSpeenIn"
            >
                <a href="/clicky-game/">{props.title}</a>
            </li>

            {/* <li id="rw">{props.rightWrong}</li> */}

            <li id="nav-score"
            >Score: {props.score}</li>

            <li id="nav-top score"
            >Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;
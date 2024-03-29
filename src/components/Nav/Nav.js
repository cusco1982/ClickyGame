import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li //className="brand animated lightSpeenIn"
            >
                <a href="/clicky-game/">{props.title}</a>
            </li>

            <li id="errmsg">{props.errmsg}</li>

            <li id="nav-score"
            >Score: {props.score}</li>

            <li id="nav-topScore"
            >Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;
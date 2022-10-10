import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import logo512 from "../assets/images/logo-512.png";

const Header = () => {
    return (
        <div className="ui secondary pointing menu ">
            <Link to="/" className="item">
                <div className="ui horizontal list">
                    <div className="item">
                        <img
                            className="ui mini image"
                            src={logo512}
                            alt="streamling logo"
                        />
                        <div className="bottom aligned content">
                            <div className="header">
                                <h2>Streamling</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;

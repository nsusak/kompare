import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/users/new" className="item">Register</Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All users
                </Link>
            </div>
        </div>
    );
};

export default Header;
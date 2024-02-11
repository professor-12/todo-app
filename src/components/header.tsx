import React from "react";
import Logo from "./Logo";
import Profile from "./Profile";

const Header = () => {
    return (
        <div className="flex justify-between">
            <Logo />
            <Profile />
        </div>
    );
};

export default Header;

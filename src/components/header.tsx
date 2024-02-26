"use client"
import React from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import { useTodoContext } from "@/store/ToDoState";

const Header = () => {
    const { userProfile } = useTodoContext() as any;
    return (
        <div className="flex justify-between">
            <Logo />
            {userProfile?.name && <Profile name={userProfile?.name} />}
        </div>
    );
};

export default Header;

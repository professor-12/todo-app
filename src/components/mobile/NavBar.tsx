"use client";
import React from "react";
import { BsListTask } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoCheckboxOutline } from "react-icons/io5";
import clsx from "clsx";
import { CiSquarePlus } from "react-icons/ci";
import { useTabs } from "./store";

const NavBar = () => {
    const { tab, setTab } = useTabs();
    
    const isActive = (id: any) => {
        return tab === id;
    };
    return (
        <div className="fixed  flex z-50 md:hidden  bg-white items-center justify-between left-0 right-0 border-t border-muted/40 bottom-0 p-5 px-8">
            <span
                onClick={() => setTab("todo")}
                className={clsx(
                    "cursor-pointer font-[600]",
                    isActive("todo")? "text-lightblue" : "text-muted"
                )}
            >
                <BsListTask className="text-3xl" />
                <p className="text-sm text-center py-1 font-medium">Todo</p>
            </span>
            <span
                onClick={() => setTab("create")}
                className={clsx(
                    "cursor-pointer font-[600]",
                    isActive("create") ? "text-lightblue" : "text-muted"
                )}
            >
                <CiSquarePlus className="text-3xl" />
                <p className="text-sm text-center py-1 font-medium">Create</p>
            </span>
            <span
                onClick={() => setTab("search")}
                className={clsx(
                    "cursor-pointer font-[600]",
                    isActive("search") ? "text-lightblue" : "text-muted"
                )}
            >
                <CiSearch className="text-3xl" />
                <p className="text-sm text-center py-1 font-medium">Search</p>
            </span>
            <span
                onClick={() => setTab("done")}
                className={clsx(
                    "cursor-pointer font-[600]",
                    isActive("done") ? "text-lightblue" : "text-muted"
                )}
            >
                <IoCheckboxOutline className="text-3xl " />
                <p className="text-sm text-center py-1 font-medium">Done</p>
            </span>
        </div>
    );
};

export default NavBar;

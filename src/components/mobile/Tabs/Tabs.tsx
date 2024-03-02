import React from "react";
import Todo from "./Todo";
import Search from "./Search";
import Completed from "./Completed";
import { useTabs } from "../store";
import { AnimatePresence } from "framer-motion";

const Tabs = () => {
    const { tab, setTab } = useTabs();
    return (
        <div className="h-screen">
            {tab === "search" && <Search />}
            {tab === "todo" && <Todo />}
            <AnimatePresence>
                {tab == "create" && (
                    <>
                        <Todo />
                    </>
                )}
            </AnimatePresence>
            {tab === "done" && <Completed />}
        </div>
    );
};

export default Tabs;

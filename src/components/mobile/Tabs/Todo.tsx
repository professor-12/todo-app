"use client";
import NoTask from "@/components/NoTask";
import UnCompletedTask from "@/components/Task/UnCompletedTask";
import { useTodoContext } from "@/store/ToDoState";
import React, { useState } from "react";
import { useTabs } from "../store";
import Create from "./Create";
import { AnimatePresence } from "framer-motion";

const Todo = () => {
    const { todos } = useTodoContext();
    const { tab, setTab } = useTabs();
    const [state] = useState(false);
    const Todo = todos.filter((items) => !items.completed);
    return (
        <div className="space-y-4">
            <div className="space-y-3">
                <h1 className="text-4xl text-slate-purple font-[900]">
                    Welcome, <span className="text-lightblue">John</span>
                </h1>
                {todos.length == 0 ? (
                    <p className="text-muted text-sm">
                        Create tasks to achieve more.
                    </p>
                ) : (
                    <div>
                        {
                            <p className="text-muted text-sm">
                                You&apos;ve got {Todo.length} task(s) to do
                            </p>
                        }
                    </div>
                )}
            </div>
            {!state && Todo.length === 0 ? (
                <NoTask onClick={() => setTab("create")} />
            ) : (
                Todo.map((items) => {
                    return <UnCompletedTask key={items.id} data={items} />;
                })
            )}
            <AnimatePresence>{tab == "create" && <Create />}</AnimatePresence>
        </div>
    );
};

export default Todo;

"use client";
import React, { useEffect, useState } from "react";

import NoTask from "../NoTask";
import TaskList from "./TaskList";
import { useTodoContext } from "@/store/ToDoState";

const Task = () => {
    const [_, setdb] = useState([]) as any;
    const { todos } = useTodoContext();
    useEffect(() => {
        setdb(JSON.parse(localStorage.getItem("todo") as any));
    }, []);
    const [notask, setState] = useState(false);
    return (
        <div className="">
            {!notask && todos.length == 0 ? (
                <NoTask
                    onClick={() => {
                        setState((prev) => !prev);
                    }}
                />
            ) : (
                <div className="md:flex">
                    <TaskList />
                </div>
            )}
        </div>
    );
};

export default Task;

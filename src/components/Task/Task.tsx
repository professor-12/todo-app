"use client";
import React, {  useEffect, useState } from "react";

import NoTask from "../NoTask";
import TaskList from "./TaskList";
import { useTodoContext } from "@/store/ToDoState";

const Task = () => {
    const [db, setdb] = useState([]) as any
    const { todos } = useTodoContext()
    useEffect(() => {
        setdb(JSON.parse(localStorage.getItem("todo") as any))
    },[])
    const [notask, setState] = useState(true);
    return (
        <div>
            {notask && todos.length == 0 ? (
                <NoTask
                    onClick={() => {
                        setState((prev) => !prev);
                    }}
                />
            ) : (
                <div>
                    <TaskList />
                </div>
            )}
        </div>
    );
};

export default Task;

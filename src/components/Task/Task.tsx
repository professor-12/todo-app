"use client";
import React, { useEffect, useState } from "react";

import NoTask from "../NoTask";
import TaskList from "./TaskList";
import { useTodoContext } from "@/store/ToDoState";

const Task = () => {
    const db = localStorage.getItem("todo") as any;
    const response = JSON.parse(db);
    const { todos, dispatchState } = useTodoContext();
    const [notask, setState] = useState(true);
    return (
        <div>
            {notask && !db ? (
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

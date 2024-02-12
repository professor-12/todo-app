"use client";
import React, {  useEffect, useState } from "react";

import NoTask from "../NoTask";
import TaskList from "./TaskList";

const Task = () => {
    const [db ,setdb] = useState([]) as any
    useEffect(() => {
        setdb(JSON.parse(localStorage.getItem("todo") as any))
    },[])
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

"use client";
import React, { useEffect, useState } from "react";

import NoTask from "../NoTask";
import TaskList from "./TaskList";

const Task = () => {
    const [notask, setState] = useState(true);
    return (
        <div>
            {notask ? (
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

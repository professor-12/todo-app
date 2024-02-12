import React, { use, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Form from "../Form/Form";
import { useTodoContext } from "@/store/ToDoState";
import CompletedTask from "./CompletedTask";
import UnCompletedTask from "./UnCompletedTask";

const TaskList = () => {
    const [state, setState] = useState(false);
    const { todos } = useTodoContext();
    const completedTask = todos.filter((item) => item.completed);
    const uncompletedTask = todos.filter((item) => !item.completed);
    useEffect(() => {
        const handleKeyPress = (e: any) => {
            if (e.key === "Enter") {
                setState(true);
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [todos]);

    return (
        <div className="min-h-[70vh] p-5">
            {!state && (
                <div className="flex items-center p-2">
                    <div>
                        <div className="border-2 p-1 border-lightgray text-[0.6rem]  text-lightgray rounded-lg">
                            <FaPlus />
                        </div>
                    </div>
                    <p className="w-full text-sm text-light-text-gray px-3 focus:outline-none bg-transparent">
                        Tap “Enter” to create task
                    </p>
                </div>
            )}

            {state && <Form />}

            <div className="my-12">
                {/* UnCompleted Task */}
                <div className="space-y-3">
                    {uncompletedTask.map((task) => {
                        return <UnCompletedTask data={task} key={task.id} />;
                    })}
                </div>
                {/* Completed Task  */}
                <div className="space-y-3">
                    {completedTask.length > 0 && <h1>Completed Task</h1>}
                    {completedTask.map((task, index) => {
                        return <CompletedTask key={task.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default TaskList;

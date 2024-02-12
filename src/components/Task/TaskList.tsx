import React, { use, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Form from "../Form/Form";
import { useTodoContext } from "@/store/ToDoState";
import CompletedTask from "./CompletedTask";
import UnCompletedTask from "./UnCompletedTask";
import { RxCaretDown } from "react-icons/rx";

const TaskList = () => {
    const [state, setState] = useState(false);
    const { todos, dispatchState } = useTodoContext() as any;
    const completedTask = todos.filter((item: any) => item.completed);
    const uncompletedTask = todos.filter((item: any) => !item.completed);
    const deleteAll = () => {
        completedTask.map(({ id }: { id: any }) => {
            dispatchState({ type: "delete", id });
        });
    };
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
        <div className="min-h-[70vh] p-2 md:p-5">
            {!state && (
                <div onClick={()=> setState(true)} className="flex items-center md:p-2">
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
                    {uncompletedTask.map((task:any) => {
                        return <UnCompletedTask data={task} key={task.id} />;
                    })}
                </div>
                {/* Completed Task  */}
                <div className="space-y-3 my-12">
                    {completedTask.length > 0 && (
                        <div className="flex justify-between">
                            <h1 className="text-muted space-x-2 items-center flex">
                                <span>Completed Task</span>
                                <RxCaretDown className="text-2xl" />
                            </h1>
                            <p onClick={deleteAll} className="text-red-400 hover:bg-red-400/30 p-1 rounded-full cursor-pointer duration-300 transition-colors px-3 ">
                                {" "}
                                Delete all
                            </p>
                        </div>
                    )}
                    {completedTask.map((task:any) => {
                        return <CompletedTask data={task} key={task.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default TaskList;

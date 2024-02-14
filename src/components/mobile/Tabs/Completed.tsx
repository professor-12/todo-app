"use client";
import CompletedTask from "@/components/Task/CompletedTask";
import { useTodoContext } from "@/store/ToDoState";
import Image from "next/image";
import React from "react";
import { RxCaretDown } from "react-icons/rx";

const Todo = () => {
    const { todos, dispatchState } = useTodoContext() as any;
    const Todo = todos.filter((items: any) => items.completed);
    const deleteAll = () => {
        Todo.map(({ id }: { id: any }) => {
            dispatchState({ type: "delete", id });
        });
    };
    if (Todo.length !== 0) {
        return (
            <div className="space-y-4">
                <div className="space-y-3">
                    {Todo.length > 0 && (
                        <div className="flex justify-between">
                            <h1 className="text-lg space-x-2 items-center flex">
                                <span className="font-semibold text-slate-800">Completed Task</span>
                                <RxCaretDown className="text-2xl" />
                            </h1>
                            <p
                                onClick={deleteAll}
                                className="text-red-400 hover:bg-red-400/30 p-1 rounded-full cursor-pointer duration-300 transition-colors px-3 "
                            >
                                {" "}
                                Delete all
                            </p>
                        </div>
                    )}
                    <div className="space-y-3">
                        {Todo.map((task: any) => {
                            return <CompletedTask data={task} key={task.id} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col space-y-3 items-center justify-center  h-[65vh]">
            <Image src={"/Notask.svg"} alt="" width={150} height={120} />
            <p className="text-muted ml-5 text-sm">No completed task.</p>
        </div>
    );
};

export default Todo;

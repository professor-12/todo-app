"use client";
import NoTask from "@/components/NoTask";
import UnCompletedTask from "@/components/Task/UnCompletedTask";
import { useTodoContext } from "@/store/ToDoState";
import React, { useState } from "react";
import { useTabs } from "../store";
import Create from "./Create";
import { AnimatePresence } from "framer-motion";

const Todo = () => {
    const { todos, userProfile } = useTodoContext();
    const [value, setEditValue] = useState({edit:false}) as any;
    const { tab, setTab } = useTabs();
    const [state] = useState(false);

    const handleEdit = (title: string, value: string, id: string) => {
        setTab("create");
        setEditValue(() => ({ title: title, note: value, edit: true, id }));
    };
    const Todo = todos.filter((items) => !items.completed);
    return (
        <div className="space-y-4">
            <div className="space-y-3">
                <h1 className="text-4xl text-slate-purple font-[900]">
                    Welcome,{" "}
                    <span className="text-lightblue">{userProfile?.name}</span>
                </h1>
                {Todo.length == 0 ? (
                    <p className="text-muted text-sm">
                        Create tasks to achieve more.
                    </p>
                ) : (
                    <div>
                        {
                            <p className="text-muted text-sm">
                                You&apos;ve got {Todo?.length}{" "}
                                {Todo?.length == 1 ? "task" : "tasks"} to do
                            </p>
                        }
                    </div>
                )}
            </div>
            <div className="space-y-4 p-1 max-h-[30rem] overflow-y-auto pb-24">
                {!state && Todo.length === 0 ? (
                    <NoTask onClick={() => setTab("create")} />
                ) : (
                    Todo.map((items) => {
                        return (
                            <div key={items.id}>
                                <UnCompletedTask
                                    handleEdit={handleEdit}
                                    key={items.id}
                                    data={items}
                                />
                            </div>
                        );
                    })
                )}
            </div>
            <AnimatePresence>
                {tab == "create" && (
                    <Create
                        editValue={value}
                        setEditValue={setEditValue}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Todo;

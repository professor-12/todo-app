import { useTodoContext } from "@/store/ToDoState";
import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";

const Form = () => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const { dispatchState } = useTodoContext() as any;
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (note.trim().length == 0 || title.trim().length == 0) return;

        dispatchState({ type: "create", note, title }) as any;
        setNote!("");
        setTitle!("");
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="flex md:p-2 p-1 py-3 text-slate-600">
                <span className="border-2 p-1 border-lightblue text-sm text-lightblue rounded-lg">
                    <FaPlus />
                </span>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    className="w-full px-3 focus:outline-none bg-transparent"
                    placeholder="Title.."
                />
            </div>
            <div className="flex md:p-2 p-1">
                <div>
                    <div className="border-2 p-1 border-slate-400 text-sm text-slate-400 rounded-lg">
                        <HiPencil />
                    </div>
                </div>
                <textarea
                    value={note}
                    rows={5}
                    autoCorrect="on"
                    autoCapitalize="sentences"
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full resize-none border-slate-100 rounded-md  px-3 focus:outline-none bg-transparent"
                    placeholder="Add a note"
                />
            </div>
            {
                <button className="bg-lightblue/15 text-sm md:text-base p-3 md:px-4 rounded-xl">
                    Add Todo
                </button>
            }
        </form>
    );
};

export default Form;

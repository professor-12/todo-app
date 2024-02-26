import { useTodoContext } from "@/store/ToDoState";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";
import { useTabs } from "../mobile/store";
import { useValidation } from "@/hooks/useInputValidation";

const EditForm: React.FC<any> = ({ title, note }) => {
    const { _, setTab } = useTabs();

    const [Edittitle, setEditTitle] = useState(title);
    const [Editnote, setEditNote] = useState(note);
    useEffect(() => {
        setEditNote(note);
        setEditNote(title);
    }, []);

    const { hasError: TitleHasError, setIsTouched: setTitleIsTouched } =
        useValidation(() => Edittitle.trim().length == 0) as any;
    const { hasError: noteHasError, setIsTouched: setNoteisTouched } =
        useValidation(() => Editnote.trim().length == 0);
    const { dispatchState } = useTodoContext() as any;

    const onSubmit = (e: any) => {
        e.preventDefault();
        setNoteisTouched(true);
        setTitleIsTouched(true);
        if (Editnote.trim().length == 0 || Edittitle.trim().length == 0) return;
        dispatchState({ type: "edit", note, title }) as any;
        setEditNote!("");
        setEditTitle!("");
        setNoteisTouched(false);
        setTitleIsTouched(false);
    };
    const onSubmitForMobile = () => {
        setNoteisTouched(true);
        setTitleIsTouched(true);
        if (note.trim().length == 0 || title.trim().length == 0) {
            return;
        }
        dispatchState({ type: "edit", note, title }) as any;
        setEditNote!("");
        setTab("todo");
        setEditTitle!("");
        setNoteisTouched(false);
        setTitleIsTouched(false);
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="flex  md:w-[60%]  flex-col md:p-2 p-1 py-3 text-slate-600">
                <div className="flex space-x-1">
                    <span className="border-2 p-1 border-lightblue text-sm text-lightblue rounded-lg">
                        <FaPlus />
                    </span>
                    <input
                        onBlur={() => setTitleIsTouched(true)}
                        value={Edittitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className={`flex w-full ${
                            TitleHasError && "border"
                        } rounded border-red-300 px-2 focus:outline-none bg-transparent`}
                        placeholder="Title.."
                    />
                </div>
                {TitleHasError && (
                    <span className="text-[0.8rem] text-end  p-1 text-red-400">
                        This Field is Required
                    </span>
                )}
            </div>
            <div className="flex  md:w-[60%] flex-col md:p-2 p-1">
                <div className="flex space-x-1">
                    <div>
                        <div className="border-2 p-1 border-slate-400 text-sm text-slate-400 rounded-lg">
                            <HiPencil />
                        </div>
                    </div>
                    <textarea
                        onBlur={() => setNoteisTouched(true)}
                        value={Editnote}
                        autoCorrect="on"
                        autoCapitalize="sentences"
                        onChange={(e) => setEditNote(e.target.value)}
                        className={`w-full overflow-y-hidden ${
                            noteHasError && "border"
                        } rounded border-red-300  md:text-start px-2 focus:outline-none bg-transparent`}
                        placeholder="Add a note"
                    />
                </div>
                {noteHasError && (
                    <span className="text-[0.8rem] text-end p-1 text-red-400">
                        This Field is Required
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="float-right hidden md:flex md:float-left text-blue-500"
            >
                edit
            </button>
            <button
                onClick={(e) => {
                    setTab("todo");
                    onSubmitForMobile;
                }}
                className="float-right md:float-left text-blue-500 md:hidden"
            >
                edit
            </button>
        </form>
    );
};

export default EditForm;

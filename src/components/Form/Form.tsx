import { useTodoContext } from "@/store/ToDoState";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";
import { useTabs } from "../mobile/store";
import { useValidation } from "@/hooks/useInputValidation";

const Form: React.FC<any> = ({ dataToEdit, state, setDataToEdit }) => {
    const { _, setTab } = useTabs();
    const [title, setTitle] = useState("");
    const [dynamicHeight, setDynamicHeight] = useState(54) as any;
    const [note, setNote] = useState("");
    const { hasError: noteHasError, setIsTouched: setNoteisTouched } =
        useValidation(() => note.trim().length == 0);
    useEffect(() => {
        if (dataToEdit && dataToEdit?.edit) {
            setNote(dataToEdit.note);
            setTitle(dataToEdit.title);
        } else {
            setNote("");
            setTitle("");
        }
    }, [dataToEdit, dataToEdit?.note, dataToEdit?.title, dataToEdit?.edit]);
    const { hasError: TitleHasError, setIsTouched: setTitleIsTouched } =
        useValidation(() => title.trim().length == 0) as any;
    const { dispatchState } = useTodoContext() as any;

    const helper = () => {
        setNote!("");
        setTitle!("");
        setNoteisTouched(false);
        setTitleIsTouched(false);
        dataToEdit && setDataToEdit((prev: any) => ({ ...prev, edit: false }));
        dataToEdit && state && state(false);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        setNoteisTouched(true);
        setTitleIsTouched(true);
        if (note.trim().length == 0 || title.trim().length == 0) return;
        if (dataToEdit.edit) {
            if (dataToEdit.edit) {
                dispatchState({
                    type: "edit",
                    id: dataToEdit.id,
                    value: { note, title },
                });
            }
        } else {
            dispatchState({ type: "create", note, title }) as any;
        }

        helper();
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                    <div className="flex flex-grow">
                        <textarea
                            onKeyUp={(e) => {
                                setDynamicHeight(e.currentTarget.scrollHeight);
                            }}
                            id="text-area"
                            tabIndex={0}
                            onBlur={() => setNoteisTouched(true)}
                            value={note}
                            autoCorrect="on"
                            rows={1}
                            style={{ height: dynamicHeight }}
                            autoCapitalize="sentences"
                            onChange={(e) => setNote(e.target.value)}
                            className={`w-full resize-none overflow-y-hidden ${
                                noteHasError && "border"
                            } rounded  border-red-300 flex-grow overflow-y-hidden md:text-start px-2 focus:outline-none bg-transparent`}
                            placeholder="Add a note"
                        />
                    </div>
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
                {dataToEdit?.edit ? "Edit" : "Create"}
            </button>
            <button
                type="button"
                onClick={(e) => {
                    setTab("todo");
                    onSubmit(e);
                }}
                className="float-right md:float-left text-blue-500 md:hidden"
            >
                {dataToEdit?.edit ? "Edit" : "Create"}
            </button>
        </form>
    );
};

export default Form;

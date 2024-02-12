import React, { use, useState } from "react";
import Checkbox from "@/ui/CheckBox";
import { HiPencil } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useTodoContext } from "@/store/ToDoState";

interface Data {
    data: { note: String; title: String; id: String; completed: boolean };
}
const UnCompletedTask: React.FC<Data> = ({ data }) => {
    const { dispatchState } = useTodoContext() as any;
    const { note, title, id, completed } = data;
    const [check, setcheck] = useState(false);
    const handleChange = (e: any) => {
        setcheck((prev) => {
            if (!prev) {
                dispatchState({ type: "uncompleted", id });
            }
            return e.target.value;
        });
    };
    return (
        <div className="bg-pale-white justify-between p-5 px-7 rounded-xl flex">
            <div className="flex space-x-4 w-full">
                <Checkbox
                    className="accent-slate-400"
                    onChange={handleChange}
                />
                <div className="text-sm  max-w-[77%] text-slate space-y-2">
                    <h1 className=" text-[1rem] text-muted">{title}</h1>
                </div>
            </div>
            <div>
                <div className="flex items-center p-1 rounded-full bg-muted/40 space-x-4">
                    <RxCross2 className=" text-white text-sm cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default UnCompletedTask;

import React, { use, useState } from "react";
import Checkbox from "@/ui/CheckBox";
import { HiPencil } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

interface Data {
    data: { note: String; title: String; id: String; completed: boolean };
}
const UnCompletedTask: React.FC<Data> = ({ data }) => {
    const { note, title, id, completed } = data;
    const [showNote, setShowNote] = useState(false);
    return (
        <div className="bg-pale-white justify-between p-5 px-7 rounded-xl flex">
            <div className="flex space-x-4 w-full">
                <Checkbox />
                <div className="text-sm  max-w-[77%] text-slate space-y-2">
                    <h1 className="font-semibold text-[1rem] text-dark-muted">
                        {title}
                    </h1>
                    {showNote && <p className="text-muted leading-4">{note}</p>}
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-4">
                    <RxCaretRight
                        onClick={() => setShowNote((prev) => !prev)}
                        className="text-2xl cursor-pointer text-muted"
                    />
                    <HiPencil className="text-blue-600 cursor-pointer" />
                    <RxCross2 className="text-lg text-red-500 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default UnCompletedTask;

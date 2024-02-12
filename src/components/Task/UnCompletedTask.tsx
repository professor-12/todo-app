import React, { use, useState } from "react";
import Checkbox from "@/ui/CheckBox";
import { HiPencil } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"
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
                dispatchState({ type: "completed", id });
            }
            return e.target.value;
        });
    };
    const handleRemoveTask = () => {
        dispatchState({ type: "delete", id });
    };
    const [showNote, setShowNote] = useState(false);
    return (
        <motion.div layout initial={{ y: -12 }} animate={{y:0}} className="bg-pale-white justify-between p-5 px-7 rounded-xl flex">
            <div className="flex space-x-4 w-full">
                <Checkbox onChange={handleChange} />
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
                        className="text-2xl hover:bg-muted/30 transition-colors duration-300 rounded-full cursor-pointer text-muted"
                    />
                    <span className="hover:bg-lightblue/30 duration-300 rounded-full p-1">
                        <HiPencil className="text-blue-500  cursor-pointer" />
                    </span>
                    <span className="hover:bg-red-500/30 duration-300 rounded-full p-1">
                        <RxCross2
                            onClick={handleRemoveTask}
                            className="text-lg text-red-500 cursor-pointer"
                        />
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default UnCompletedTask;

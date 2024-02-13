import React, { use, useState } from "react";
import Checkbox from "@/ui/CheckBox";
import { RxCross2 } from "react-icons/rx";
import { useTodoContext } from "@/store/ToDoState";
import { motion } from "framer-motion"
import { FaSquareCheck } from "react-icons/fa6";

interface Data {
    data: { note: String; title: String; id: String; completed: boolean };
}
const CompletedTask: React.FC<Data> = ({ data }) => {
    const { dispatchState } = useTodoContext() as any;
    const {  title, id } = data;
    const [  _ , setcheck] = useState(false);
    const handleChange = (e: any) => {
        setcheck((prev) => {
            if (!prev) {
                dispatchState({ type: "uncompleted", id });
            }
            return e.target.value;
        });
    };
    const handleRemoveTask = () => {
        dispatchState({ type: "delete", id });
    };
    
    return (
        <motion.div
            layout
            initial={{ y: -12 }}
            animate={{ y: 0 }}
            className="bg-pale-white justify-between p-5 md:px-7 rounded-xl flex"
        >
            <div className="flex space-x-4 w-full items-center">
                <FaSquareCheck
                    className="text-muted md:h-6 h-5 cursor-pointer w-5"
                    onClick={handleChange}
                />
                <div className="text-sm  max-w-[77%] text-slate space-y-2">
                    <h1 className=" text-[1rem] md:line-through text-muted">
                        {title}
                    </h1>
                </div>
            </div>
            <div>
                <div className="flex items-center p-1 rounded-full bg-muted/40 space-x-4">
                    <RxCross2
                        onClick={handleRemoveTask}
                        className=" text-white text-sm cursor-pointer"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default CompletedTask;

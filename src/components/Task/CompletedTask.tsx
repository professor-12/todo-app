import React, { use, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Todos, useTodoContext } from "@/store/ToDoState";
import { AnimatePresence, motion } from "framer-motion";
import { FaSquareCheck } from "react-icons/fa6";
import { TbBrandChrome, TbDots } from "react-icons/tb";

export interface Data {
    data: Todos;
}
const CompletedTask: React.FC<Data> = ({ data }) => {
    const { dispatchState } = useTodoContext() as any;
    const { title, id, note, dateCompleted } = data;
    const [_, setcheck] = useState(false);
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
    const [showNote, setShowNote] = useState(false);

    return (
        <motion.div
            layout
            initial={{ y: -12 }}
            animate={{ y: 0 }}
            className="bg-pale-white justify-between p-5 md:px-7 rounded-xl flex"
        >
            <div className="flex  space-x-4 w-full items-center">
                <div className="h-full">
                    <FaSquareCheck
                        className="text-muted md:h-6 h-5 cursor-pointer w-5"
                        onClick={handleChange}
                    />
                </div>
                <div className="space-y-3">
                    <div className="text-sm  max-w-[77%] text-slate space-y-2">
                        <h1 className=" text-[1rem] md:line-through text-muted">
                            {title}
                        </h1>
                    </div>
                    <AnimatePresence>
                        {showNote && (
                            <motion.p
                                animate={{ y: [-15, 0] }}
                                exit={{ y: [0, -12], opacity: 0 }}
                                className="text-muted text-sm leading-4"
                            >
                                {note.replaceAll("/n", "<br/>")}
                            </motion.p>
                        )}
                    </AnimatePresence>
                    <p className="text-muted text-[0.7rem] py-1">
                        Date Completed: {dateCompleted as any}
                    </p>
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="h-full">
                    <TbDots
                        onClick={() => setShowNote((prev) => !prev)}
                        className="text-muted  md:hidden text-2xl"
                    />
                </div>
                <div className="h-full">
                    <div className="flex items-center p-1 rounded-full bg-muted/40 space-x-4">
                        <RxCross2
                            onClick={handleRemoveTask}
                            className=" text-white text-sm cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CompletedTask;

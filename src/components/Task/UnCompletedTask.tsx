import React, { useState } from "react";
import Checkbox from "@/ui/CheckBox";
import { HiPencil } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { Todos, useTodoContext } from "@/store/ToDoState";
import { TbDots } from "react-icons/tb";

interface Datas<T = any> {
    data: T;
    handleEdit?: (a: any, b: any, c: any) => void;
}

const UnCompletedTask: React.FC<Datas<Todos>> = ({ data, handleEdit }) => {
    const { dispatchState } = useTodoContext() as any;
    const { note, title, id, dateCreated } = data;
    const [check, setcheck] = useState(false);
    const handleChange = (e: any) => {
        setcheck((prev) => {
            if (!prev) {
                dispatchState({ type: "completed", id });
            }
            return e?.target?.value;
        });
    };
    const handleRemoveTask = () => {
        dispatchState({ type: "delete", id });
    };

    const [showNote, setShowNote] = useState(false);

    return (
        <>
            <motion.div
                layout
                initial={{ y: -12 }}
                animate={{ y: 0 }}
                className="bg-pale-white justify-between p-5 md:px-7 rounded-xl flex"
            >
                <div className="flex space-x-3 md:space-x-4 w-full">
                    <Checkbox onChange={handleChange} />

                    <div className="text-sm  max-w-[77%] text-slate space-y-2">
                        <h1 className="font-semibold text-[1rem] text-dark-muted">
                            {title}
                        </h1>
                        <AnimatePresence>
                            {showNote && (
                                <div>
                                    <motion.p
                                        animate={{ y: [-15, 0] }}
                                        exit={{ y: [0, -12], opacity: 0 }}
                                        className="text-muted leading-4"
                                    >
                                        {note.replaceAll("/n", "<br/>")}
                                    </motion.p>
                                    <p className="text-muted text-[0.7rem] py-1">
                                        Date Created: {dateCreated as any}
                                    </p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex h-full">
                    <div className="md:flex hidden items-center space-x-1  md:space-x-4">
                        <motion.span layout>
                            <RxCaretRight
                                onClick={() => setShowNote((prev) => !prev)}
                                className="text-2xl hover:bg-muted/30 transition-colors duration-300 rounded-full cursor-pointer text-muted"
                            />
                        </motion.span>
                        <motion.span className="hover:bg-lightblue/30 duration-300 rounded-full p-1">
                            <HiPencil
                                onClick={() => handleEdit!(title, note, id)}
                                className="text-blue-500  cursor-pointer"
                            />
                        </motion.span>
                        <span className="hover:bg-red-500/30 hidden md:flex duration-300 rounded-full p-1">
                            <RxCross2
                                onClick={handleRemoveTask}
                                className="text-lg text-red-500 cursor-pointer"
                            />
                        </span>
                    </div>
                    {showNote && (
                        <div className="flex md:hidden h-full mx-4 space-x-1  md:space-x-4">
                           
                            <motion.span className="">
                                <HiPencil
                                    onClick={() => handleEdit!(title, note, id)}
                                    className="text-blue-500 hover:bg-lightblue/30 duration-300 rounded-full p-1  text-2xl cursor-pointer"
                                />
                            </motion.span>
                            <span className="">
                                <RxCross2
                                    onClick={handleRemoveTask}
                                    className="text-2xl hover:bg-red-500/30  md:flex duration-300 rounded-full p-1 text-red-500 cursor-pointer"
                                />
                            </span>
                        </div>
                    )}

                    <div className="h-full">
                        <TbDots
                            onClick={() => setShowNote((prev) => !prev)}
                            className="text-muted  md:hidden text-2xl"
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default UnCompletedTask;

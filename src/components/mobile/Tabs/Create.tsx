import React from "react";
import { motion } from "framer-motion";
import Form from "@/components/Form/Form";
import { useTabs } from "../store";

interface CreateComponentType<U = {}> {
    editValue: string;
    setEditValue: (a:any) => any;
}
const Create: React.FC<CreateComponentType> = ({ editValue, setEditValue }) => {
    const { _, setTab } = useTabs();
    return (
        <>
            <div onClick={() => { setTab("todo"); setEditValue({edit:false})}} className="inset-0 bg-slate-500/10 fixed" />
            <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                exit={{ y: 300 }}
                className="fixed z-auto bg-white bottom-0 left-0 h-[32rem] shadow-slate-400 rounded-t-[3rem] right-0 shadow-2xl p-8 text-center"
            >
                <Form dataToEdit={editValue} setDataToEdit={setEditValue} />
            </motion.div>
        </>
    );
};

export default Create;

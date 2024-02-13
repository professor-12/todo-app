import React from "react";
import { motion } from "framer-motion";
import Form from "@/components/Form/Form";
import { useTabs } from "../store";

const Create = () => {
    const { _, setTab } = useTabs();
    return (
        <>
            <div
                onClick={() => setTab("todo")}
                className="inset-0 fixed"
            />
            <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                exit={{ y: 300 }}
                className="fixed z-auto bg-white bottom-0 left-0 h-[32rem] shadow-slate-400 rounded-t-[4.3rem] right-0 shadow-2xl p-12 text-center"
            >
                <Form />
            </motion.div>
        </>
    );
};

export default Create;

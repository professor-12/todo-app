import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const Task = () => {
    return (
        <div className="flex  justify-center h-full  min-h-[60vh]  items-center">
            <div className="space-y-4  flex flex-col justify-center items-center">
                <Image
                    width={150}
                    alt="No task Image"
                    src={"/Notask.svg"}
                    height={200}
                    className=""
                />
                <p className="text-muted text-center text-sm">
                    You have no task listed
                </p>
                <button className="text-lightblue flex  items-center space-x-2 bg-blue-600/15 hover:bg-blue-600/20 p-[0.65rem] px-3 rounded-lg">
                    <span>
                        <FaPlus />
                    </span>
                    <span>Create task</span>
                </button>
            </div>
        </div>
    );
};

export default Task;

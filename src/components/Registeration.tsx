"use client";
import { UseValidationType, useValidation } from "@/hooks/useInputValidation";
import { useTodoContext } from "@/store/ToDoState";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import RandomAvatarGenerator from "./RandomAvatarGenerator";

const Registeration = () => {
    const { setUserProfile } = useTodoContext() as any;
    const [name, setName] = useState<string>("");
    const { hasError, isTouched, setIsTouched } = useValidation(
        () => name.trim().length == 0
    ) as UseValidationType;
    const avatar = RandomAvatarGenerator();
    const handleRegistration = async (e: FormEvent) => {
        e.preventDefault();
        setIsTouched(true);
        if (hasError) return;
        setUserProfile({ name });
        localStorage.setItem(
            "profile",
            JSON.stringify({ name, profilePics: avatar })
        );
        toast.success(`Welcome ${name}`);
    };
    return (
        <div className="space-y-7">
            <h1 className="text-4xl tracking-tight text-slate-700  font-bold">
                <span className="text-lightblue">What</span> is your Name?
            </h1>
            <div className="flex">
                <form
                    onSubmit={handleRegistration}
                    className="bg-gray-100 p-5 lg:w-[40%] container space-y-4 rounded-lg"
                >
                    <div className="flex flex-col space-y-2">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            onBlur={() => setIsTouched(true)}
                            className={`bg-transparent border lg:w-[70%] p-2 rounded-lg focus:outline-none border-slate-400 ${
                                hasError && "border-red-500 bg-red-200"
                            }`}
                            placeholder="Input your Name.."
                        />
                        {hasError && (
                            <span className="text-sm text-red-300  text-left">
                                This Field is required
                            </span>
                        )}
                    </div>
                    <button
                        className="block
                    bg-lightblue/40 p-[.7rem] px-6 rounded-lg"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registeration;

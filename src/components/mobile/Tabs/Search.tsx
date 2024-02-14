"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import UnCompletedTask from "@/components/Task/UnCompletedTask";
import { useTodoContext } from "@/store/ToDoState";
import NoTask from "@/components/NoTask";
import Image from "next/image";
const Search = () => {
    const { todos } = useTodoContext();
    const unCompletedtodo = todos.filter((item) => !item.completed);
    const [searchResult, setSearchResult] = useState([]) as any;
    const [value, setValue] = useState("");
    useEffect(() => {
        const filterdvalue = unCompletedtodo.filter((items) =>
            items.title.toLowerCase().includes(value.toLocaleLowerCase())
        );
        if (value.trim().length == 0) return;
        setSearchResult(filterdvalue);
    }, [value]);
    console.log(searchResult);
    return (
        <>
            <div className="bg-pale-white  group border flex group items-center space-x-2 px-3 overflow-hidden rounded-xl">
                <CiSearch className="text-blue-700 cursor-pointer  text-xl" />
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="py-2 group-hover:border-lightblue flex-1 bg-transparent focus:outline-none"
                    type="text"
                />
                <RxCross2
                    onClick={() => setValue("")}
                    className="text-2xl text-white p-1 bg-muted/40 rounded-full cursor-pointer"
                />
            </div>
            {value.trim().length == 0 && searchResult.length == 0 && (
                <div className="flex h-[60vh] w-full items-center  justify-center">
                    <p className="text-3xl text-dark-muted font-semibold">Search Todos..</p>
                </div>
            )}
            {value.trim().length > 0 && searchResult.length == 0 && (
                <div className=" flex justify-center h-full  min-h-[60vh]  items-center">
                    <div className="space-y-4  flex flex-col justify-center items-center">
                        <Image
                            width={150}
                            alt="No task Image"
                            src={"/Notask.svg"}
                            height={200}
                            className=""
                        />
                        <p className="text-muted ml-5 tracking-wider text-center">
                            No result found
                        </p>
                    </div>
                </div>
            )}
            <div className="my-5 space-y-3">
                {value.trim().length > 0 &&
                    searchResult.map((items: any) => {
                        return <UnCompletedTask key={items.id} data={items} />;
                    })}
            </div>
        </>
    );
};

export default Search;

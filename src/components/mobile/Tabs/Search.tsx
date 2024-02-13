import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
    const [value, setValue] = useState("");
    return (
        <div className="border bg-pale-white group flex group items-center space-x-2 px-3 overflow-hidden rounded-xl">
            <CiSearch className="text-blue-700 cursor-pointer  text-xl" />
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="py-2 group-focus:border-blue-300 flex-1 bg-transparent focus:outline-none"
                type="text"
            />
            <RxCross2
                onClick={() => setValue("")}
                className="text-2xl text-white p-1 bg-muted/40 rounded-full cursor-pointer"
            />
        </div>
    );
};

export default Search;

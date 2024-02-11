import Image from "next/image";
import React from "react";

const Logo = () => {
    return (
        <div className="flex items-center space-x-2  text-lg">
            <Image src={"/Logo.svg"} alt="Logo" width={26} height={26} />
            <p className="font-medium tracking-wide">Taski</p>
        </div>
    );
};

export default Logo;

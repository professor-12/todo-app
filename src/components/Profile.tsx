import Image from "next/image";
import React from "react";

const Profile = () => {
    return (
        <div className="flex items-center space-x-3">
            <p className="text-lg font-[400] tracking-wide">John</p>
            <Image
                src={"/profile.png"}
                width={"35"}
                className="object-cover rounded-full"
                height={"35"}
                alt="profilepics"
            />
        </div>
    );
};

export default Profile;

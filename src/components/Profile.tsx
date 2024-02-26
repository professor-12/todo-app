import { useTodoContext } from "@/store/ToDoState";
import Image from "next/image";
import React from "react";

const Profile: React.FC<{ name: string }> = ({ name }) => {
    const { userProfile } = useTodoContext()
    console.log(userProfile?.profilePics)
    return (
        <div className="flex items-center space-x-3">
            <p className="text-lg  font-[400] tracking-wide">{name}</p>
            <Image
                src={`${userProfile.profilePics}`}
                width={"40"}
                className="object-cover rounded-full"
                height={"40"}
                alt="profilepics"
            />
        </div>
    );
};



export default Profile;

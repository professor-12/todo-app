"use client";
import React, { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";

import { ImCheckboxUnchecked } from "react-icons/im";

const Checkbox: React.FC<any> = ({ onChange, className }) => {
    const [check, setcheck] = useState(false);
    const onClick = () => {
        setcheck(true);
        setTimeout(() => {
            onChange();
        }, 1000);
    };
    return (
        <div className="flex h-full" onClick={onClick}>
            <div>
                {!check ? (
                    <ImCheckboxUnchecked
                        className={
                            "text-muted items-center rounded " + className
                        }
                    />
                ) : (
                    <ImCheckboxChecked
                        className={
                            "text-lightblue items-center rounded " + className
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default Checkbox;

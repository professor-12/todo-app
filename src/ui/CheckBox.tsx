"use client";
import React, { useState } from "react";

const Checkbox: React.FC<any> = ({ onChange, className }) => {
    const [check] = useState(false);
    console.log(check);
    return (
        <div>
            <div className="form-check">
                <input
                    onChange={onChange}
                    className={className}
                    checked
                    type="checkbox"
                />
            </div>
        </div>
    );
};

export default Checkbox;

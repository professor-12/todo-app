"use client";
import React, { useState } from "react";

const Checkbox = () => {
    const [check, setcheck] = useState(false);
    console.log(check);
    return (
        <div>
            <div className="form-check">
                <input
                    onChange={(e) => {
                        setcheck(e.target.checked);
                    }}
                    className="form-check-input"
                    type="checkbox"
                />
            </div>
        </div>
    );
};

export default Checkbox;

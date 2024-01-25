import React, { useEffect, useRef } from "react";
import "./Otp.css";

function Otp() {
    const inputs = Array.from({ length: 4 }, (_, index) => useRef());
    const button = useRef();
    
    useEffect(() => {
        inputs[0].current.focus();
    }, [inputs]);

    function onInputChange(index, e) {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) {
            e.target.value = value.replace(/[^0-9]/g, "");
        }
        if (value === "" && index > 0) {
            inputs[index - 1].current.focus();
        } 
        else if (index < inputs.length - 1) {
            inputs[index + 1].current.focus();
        }
    }
    
    function onInputKeyDown(index, e) {
        if (e.key === "Backspace" && index > 0 && inputs[index].current.value === "") {
            inputs[index - 1].current.focus();
        }
        else if (e.key === "Backspace" && index > 0) {
            inputs[index].current.focus();
        }
    }
    return (
        <div className="otp-container">
            <div className="otp-box">
                <div className="inner-box">
                    <div className="title">Login via OTP</div>
                    <div className="input-container">
                        {inputs.map((inputRef, index) => (
                            <input
                                key={index}
                                className="otp-input"
                                onChange={(e) => onInputChange(index, e)}
                                onKeyDown={(e) => onInputKeyDown(index, e)}
                                maxLength="1"
                                ref={inputRef}
                            />
                        ))}
                    </div>
                    <button className="login-button" ref={button}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Otp;
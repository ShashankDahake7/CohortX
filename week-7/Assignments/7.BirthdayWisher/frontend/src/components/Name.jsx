import { useEffect, useRef, useState } from "react";
import bg from "./../images/bg.jpg";
import './Name.css';

function Name() {
    const input = useRef();
    const [value, setValue] = useState("");
    const [wish, setWish] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (!isSubmitted) {
            input.current.focus();
        }
    }, [isSubmitted]);

    async function action() {
        const response = await fetch("http://localhost:3000/wishes", {
            method: "POST",
            body: JSON.stringify({
                name: value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const newWish = await response.json();
        setWish(newWish.wish);
        setIsSubmitted(true);
    }

    return (
        <div className="container" style={{ backgroundImage: `url(${bg})` }}>
            {!isSubmitted && (
                <div className="inputContainer">
                    <div className="title">Enter Name Here</div>
                    <input
                        type="text"
                        placeholder="Enter Name Here"
                        className="inputField"
                        ref={input}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className="submitButton" onClick={action}>
                        Done
                    </button>
                </div>
            )}
            {isSubmitted && <Wish value={wish} />}
        </div>
    );
}

function Wish({ value }) {
    return <div className="wishContainer">{value}</div>;
}

export default Name;
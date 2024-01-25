import { useEffect, useRef, useState } from "react";
import bg from "./../images/bg.jpg";
import './Name.css';

function Name() {
    const input = useRef();
    const [value, setValue] = useState("");
    const [wish, setWish] = useState("");

    useEffect(() => {
        input.current.focus();
    }, []);

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
    }

    return (
        <div className="container" style={{backgroundImage: `url(${bg})`}}>
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
            <Wish value={wish} />
        </div>
    );
}

function Wish({ value }) {
    return <div className="wishContainer">{value}</div>;
}

export default Name;
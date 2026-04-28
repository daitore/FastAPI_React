import React ,{useState} from "react";

const TestComponent = () => {
    const [count,setCount] = useState(1);
    const onClickChange = () => {
        setCount((prev) =>prev+ 1);
        setCount((prev) =>prev+ -3);
    };

    return (
        <div>
            <h1>Test Component</h1>
            <button onClick={onClickChange}>-2</button>
            <h2>{count}</h2>
        </div>
    );
}

export default TestComponent;
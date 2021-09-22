import React, { useState } from "react";

const Awesome = (props) => {

    const [ counter, setCounter ] = useState(parseInt(props.init));

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter} type="button">
                Add + 1
            </button>
        </div>
    );
}

export default Awesome;
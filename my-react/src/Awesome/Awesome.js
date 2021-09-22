import React, { useState, useEffect } from "react";

const Awesome = (props) => {

    const [ counter, setCounter ] = useState(parseInt(props.init));
    const [ counter2, setCounter2 ] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const incrementCounter2 = () => {
        setCounter2(counter2 + 1);
    };

    useEffect(() => {
        console.log('hello');

        return () => {
            console.log('Bye'); //callback for dispose and regenerate
        };
    }, [counter]);

    useEffect(() => {

        console.log('hello once');
    }, []);

    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter} type="button">
                Add + 1
            </button>
            <br />
            <p>Counter2: {counter2}</p>
            <button onClick={incrementCounter2} type="button">
                Add + 1
            </button>
        </div>
    );
}

export default Awesome;
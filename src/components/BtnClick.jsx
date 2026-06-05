import { useState } from "react";

export default function BtnClick() {
    const [number, setNumber] = useState(0);

    function handleIncrease3 () {
        setNumber(n => n + 1);
        console.log(number);
        setNumber(n => n + 1);
        console.log(number);
        setNumber(n => n + 1);
        console.log(number);
    }
    function handleIncrease5 () {
        setNumber(number + 5);
        console.log(number);
        alert(number);
        console.log(number);
    }
    function handleTimer() {
        setNumber(number + 5);
        setTimeout(() => {
            alert(number);
        }, 3000);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleIncrease3}>+3</button>&nbsp;
            <button onClick={handleIncrease5}>+5</button>&nbsp;
            <button onClick={handleTimer}>Timer</button>&nbsp;
        </>
    )
}
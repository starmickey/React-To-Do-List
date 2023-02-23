import React, { useState } from "react";

function Item(props) {
    const [isDone, setIsDone] = useState(false);
    const style = { textDecoration: isDone ? "line-through" : "none"};

    function handleClick() {
        setIsDone(prevValue => !prevValue);
    }

    return <li onClick={handleClick} style={style}> {props.value}</li>
}

export default Item;
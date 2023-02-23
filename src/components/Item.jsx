import React, { useState } from "react";

function Item(props) {
    const [isDone, setIsDone] = useState(false);
    const style = { textDecoration: isDone ? "line-through" : "none" };

    function lineThroughItem() {
        setIsDone(prevValue => !prevValue);
    }

    return (<li>
        <div onClick={lineThroughItem} style={style}>
            {props.value}
        </div>
        <button
            onClick={() => props.deleteItemMethod(props.id)}>
            remove
        </button>
    </li>);
}

export default Item;
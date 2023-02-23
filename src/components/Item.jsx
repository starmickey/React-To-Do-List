import React, { useState } from "react";

function Item(props) {
    const [isDone, setIsDone] = useState(false);

    function lineThroughItem() {
        setIsDone(prevValue => !prevValue);
    }

    return (<li>
        <div
            onClick={lineThroughItem}
            style={{ textDecoration: isDone ? "line-through" : "none" }}>
            {props.value}
        </div>

        <button
            onClick={() => props.onRemove(props.id)}>
            remove
        </button>
    </li>);
}

export default Item;
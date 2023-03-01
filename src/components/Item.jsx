import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

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
            <DeleteIcon />
        </button>
    </li>);
}

export default Item;
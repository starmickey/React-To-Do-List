import React from "react";
import Item from "./Item";

function List(props) {
    return (<ul>
        {props.items.map((item, index) => <Item key={index} value={item} />)}
     </ul>)
}

export default List;
import React from "react";
import Item from "./Item";

function List(props) {
    const items = props.items;

    
    
    return (<ul>
        {items.map((item, index) => <Item id={index} key={index} value={item} deleteItemMethod={props.deleteItemMethod} />)}
     </ul>)
}

export default List;
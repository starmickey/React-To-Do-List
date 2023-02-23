import React from "react";
import Item from "./Item";

function List(props) {
   
   return (<ul>
      {props.items.map((item, index) => {
         return (
            <Item
               id={index}
               key={index}
               value={item}
               onRemove={props.onRemove}
            />);
      })}
   </ul>)
}

export default List;
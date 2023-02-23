import React, { useState } from "react";
import List from "./List";

function App() {
   const [items, setItems] = useState([]);

   function handleSubmit(event) {
      const newItem = event.target[0].value;
      
      setItems(prevItems => [...prevItems, newItem]);
      event.preventDefault();
   }

   return (
      <div className="container">
         <div className="heading">
            <h1>To-Do List</h1>
         </div>
         <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>
               <span>Add</span>
            </button>
         </form>
         <div>
            <List items={items} />
         </div>
      </div>
   );
}

export default App;
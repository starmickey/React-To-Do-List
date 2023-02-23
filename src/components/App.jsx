import React, { useState } from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {

   // --------- Items hooks and CRUD Methods ---------

   const [items, setItems] = useState([]);

   function addItem(newItem) {
      setItems(prevItems => [...prevItems, newItem]);
   }

   function deleteItem(id) {
      setItems(prevItems => prevItems.filter((item, index) => index !== id));
   }


   // -------------- Return COMPONENT --------------

   return (
      <div className="container">
         <div className="heading">
            <h1>To-Do List</h1>
         </div>

         <InputArea onSubmit = {addItem} />
         <List items={items} onRemove={deleteItem}/>
      </div>
   );
}

export default App;

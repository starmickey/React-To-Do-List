import React, { useState } from "react";

function InputArea(props) {
   const [inputText, setInputText] = useState("");

   function handleInputChange(event) {
      setInputText(event.target.value);
   }

   function handleSubmit(event) {
      props.onSubmit(inputText);
      setInputText("");
      event.preventDefault();
   }


   return (<form onSubmit={handleSubmit}>
      <input
         type="text"
         onChange={handleInputChange}
         value={inputText}
      />
      <button type="submit">
         <span>Add</span>
      </button>
   </form>);
}

export default InputArea;
import { useState } from "react";
import React from "react";

const ToDoList = () => {
    const [allValues, setAllValues] = useState ([])
    const [inputValue, setInputValue] = useState ("");

    const addItem = (e) => {
        e.preventDefault();
        if(inputValue !== "")setAllValues(allValues => [...allValues, inputValue]);
        setInputValue("");
    }
    const deleteItem = (index) => {
        const newList = allValues.filter((task, id) => index !== id);

        setAllValues(newList);
    }
    
    return (
        <div className="list">
            <form onSubmit={addItem}><input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} /></form>
            <div>
                {allValues.map((task, index) => <div className="itemContainer" key = {index}><p className="item">{task}</p><span onClick={(event) => deleteItem(index)}><i className="bi bi-trash3"></i></span></div>)}
            </div>
            <p className="bottom">{allValues.length == 0 ? "No tasks, add a task" : allValues.length + " items left"}</p>
        </div>
    );
}
export default ToDoList;


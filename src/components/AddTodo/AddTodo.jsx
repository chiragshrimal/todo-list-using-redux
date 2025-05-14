import { useState } from "react";
// below hook ka use karke disppach methor create kar skte hai 
// import {useDispatch} from "react-redux"

// import { addTodo } from "../../actions/todoActions";

// no need to pass update list because we are using context api concept 
// and  reducer concept 
function AddTodo({addTodo}){

    const [inputText,setInputText]=useState("");
    return (
        <div>
            <input 
                type="text"
                value={inputText}
                placeholder="add your next todo"
                onChange={(e)=>setInputText(e.target.value)}
            />
            <button onClick={()=>{
                addTodo(inputText);
                setInputText("");
                }}>Add</button>
        </div>
    )
}

export default AddTodo;
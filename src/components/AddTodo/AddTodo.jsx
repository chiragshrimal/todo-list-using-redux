import { useState } from "react";
// below hook ka use karke disppach methor create kar skte hai 
// import {useDispatch} from "react-redux"

// import { addTodo } from "../../actions/todoActions";

// no need to pass updatalist wgr because we are using  react-react 
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
                // because redux toolkit ka use kar rhe hai 
                addTodo({todoText : inputText});
                setInputText("");
                }}>Add</button>
        </div>
    )
}

export default AddTodo;
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo/Todo"


function TodoList({editTodo,deleteTodo,todoFinished}){
    
    // isse dispatch methord create kar skte hai 
    // const dispatch=useDispatch();

    // use selector ki help se wo state la skte hai 
    // jispe kam krna hai 
    // state m sari ki sari state hai usme se todo name ki state ko liya hai usme bhi todoList hai uska name 
    // slice m dekho achese consept hai 
    const list=useSelector((state)=>state.todo.todoList); 
    console.log(list);

    function onFinished(todo, isFinished){
        todoFinished({todo,isFinished});
    }

    function onDelete(todo){
        deleteTodo({todo});
    }

    function onEdit(todo,todoText){
        editTodo({todo,todoText});
    }

    return (
        <div>
            {(list.length>0) &&
             list.map((todo)=> <Todo 
                            // all todo ko uniquely idenr=tify krne ke liye  
                                key={todo.id} 
                                todoData={todo.todoData} 
                                 isFinished={todo.finished} 
                                 changeFinished={(isFinished)=>onFinished(todo,isFinished)}
                                 onDelete={()=>onDelete(todo)}
                                 onEdit={(todoText)=>onEdit(todo,todoText)}
                                />)}
        </div>
    )
}
export default TodoList
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo/Todo"


function TodoList({editTodo,deleteTodo,todoFinished}){
    
    // isse dispatch methord create kar skte hai 
    // const dispatch=useDispatch();

    // use selector ki help se wo state la skte hai 
    // jispe kam krn hai 
    const list=useSelector((state)=>state.todo); 

    function onFinished(todo, isFinished){
        todoFinished(todo,isFinished);
    }

    function onDelete(todo){
        deleteTodo(todo);
    }

    function onEdit(todo,todoText){
        editTodo(todo,todoText);
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
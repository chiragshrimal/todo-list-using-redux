// redux toolkit ka use karke hum sare action and reducer and constant  sab ek sath hi mention hoga

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // yha state ka matlab todo se hai 
    // because jiska name upper givetoh wese hi access kiya hai  
    // usme todoList hai 
    addTodo: (todo, action) => {
      let todoText = action.payload.todoText;
      // redux toolkit m ek library hoti hai emrjs
      // uske karan hum yha direct state m change kar skte hai
      // jo hum phle reducer likhte the usme ...state,{id: state.length+1,todoData: todoText, finished:false}
      // ko return karna pdta tha
      // yha iski flexiblity hai
      todo.todoList.push({
        id: todo.todoList.length + 1,
        todoData: todoText,
        finished: false,
      });
    },
    editTodo: (todo, action) => {
      let payloadTodo = action.payload.todo;
      let todoText = action.payload.todoText;
    // we can use any of them methord 
      todo.todoList=todo.todoList.map((t)=>{
        if(t.id == payloadTodo.id){
            t.todoData=todoText;
        }
        return t;
      })
    //   const changeList = state.todo.map((t) => {
    //     if (t.id == todo.id) {
    //       todo.todoData = todoText;
    //     }
    //     return t;
    //   });
    //   return changeList;
    },
    todoFinished : (todo,action)=>{
        let payloadTodo=action.payload.todo;
        let isFinished=action.payload.isFinished;
        todo.todoList=todo.todoList.map(t=>{
            if(t.id==payloadTodo.id){
                todo.finished=isFinished;
            }
            return t;
        });
        // console.log(changeList);
       return changeList;
    },
    deleteTodo : (todo,action)=>{
         let payloadTodo=action.payload.todo;
         todo.todoList=todo.todoList.filter((t)=>t.id != payloadTodo.id);
    }
  },
});

// hmne sare actions ka name bhi export kar diya hai 
export const {deleteTodo, addTodo, editTodo, todoFinished}=todoSlice.actions;
// and reducer bhi export kar diya hai 
export default todoSlice.reducer;

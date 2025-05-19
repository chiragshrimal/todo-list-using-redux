// sari ki sari status ko ek sath collect karke rkha hai 
import { combineReducers, createStore } from "redux";

// reduces imports 
import todoReducer from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducers=combineReducers({todo : todoReducer});

// ye tab use karte hai jab reux toolkit ka use nhi kiya hai 
// const store=createStore(reducers);

// ye tab use karenge jab redux toolkit ka use karenge 
// always remember store toh kewal ek hi reducer leta hai 

const store =configureStore({
    // isliye yha reducer likha hai not reducers 
    reducer: {
        todo: todoReducer
    },
    // isme hum middleware bhi pass kar skte hai 
    // and  devtools bhi pass kar skte hai let see
    // niche wali line ka meaning hai ki ye tab kam karega jab 
    // hmara app production m nhi hoga 
  devTools: process.env.NODE_ENV !== "production",

})

export default store;

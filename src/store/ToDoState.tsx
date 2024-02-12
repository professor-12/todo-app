"use client";
import React, { createContext, useContext, useReducer } from "react";
import { v4 } from "uuid";
export interface InitialState {
    todos: { title: string; note: string; completed: boolean ,id:string}[];
    dispatchState: () => any;
}
const initialStore: InitialState = {
    todos: [],
    dispatchState: () => {},
};

const store = createContext(initialStore) as any;
export const useTodoContext = () => {
    return useContext<InitialState>(store);
};
const reducers = (state: any, action: any) => {
    switch (action.type) {
        case "completed":
            return action.type;
        case "delete":
            return;
        case "create":
            const oldState = state;
            const newState = [
                ...oldState,
                {
                    note: action.note,
                    title: action.title,
                    conpleted: true,
                    id: v4(),
                },
            ];
            localStorage.setItem("todo",JSON.stringify(newState))
            return newState;
        case "edit":
            return;
    }
}; 

const ToDoState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todo, dispatchState] = useReducer(
        reducers,
        initialStore.todos
    ) as any;
    console.log(todo);
    return (
        <store.Provider value={{ todos: todo, dispatchState }}>
            {children}
        </store.Provider>
    );
};

export default ToDoState;

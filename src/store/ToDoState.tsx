"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { v4 } from "uuid";

type Todos = {
    title: string;
    note: string;
    completed: boolean;
    id: string;
};
export interface InitialState {
    todos: Todos[];
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
const reducers = (state: Array<Todos>, action: any) => {
    switch (action.type) {
        case "completed":
            const completedTask = state.findIndex(
                (item) => item.id === action.id
            );
            let oldTask = state;
            oldTask[completedTask] = {
                ...oldTask[completedTask],
                completed: true,
            };
            const newTask = [...oldTask];
            localStorage.setItem("todo",JSON.stringify(newTask))
            return newTask;
        case "uncompleted":
            const uncompletedTask = state.findIndex(
                (item) => item.id === action.id
            );
            let uncompeltedoldTask = state;
            uncompeltedoldTask[uncompletedTask] = {
                ...uncompeltedoldTask[uncompletedTask],
                completed: false,
            };
            const Task = [...uncompeltedoldTask];
            localStorage.setItem("todo",JSON.stringify(Task))
            return Task;
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
            localStorage.setItem("todo", JSON.stringify(newState));
            return newState;
        case "edit":
            return;
        case "fetchData":
            return action.data;
    }
};

const ToDoState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todo, dispatchState] = useReducer(
        reducers,
        initialStore.todos
    ) as any;
    useEffect(() => {
        const db = localStorage.getItem("todo") as any;
        if (!db) return;
        const response = JSON.parse(db);
        dispatchState({ type: "fetchData", data: response });
    }, []);
    console.log(todo);
    return (
        <store.Provider value={{ todos: todo, dispatchState }}>
            {children}
        </store.Provider>
    );
};

export default ToDoState;

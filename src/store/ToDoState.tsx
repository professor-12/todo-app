"use client";
import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { v4 } from "uuid";

export type Todos = {
    title: string;
    note: string;
    completed: boolean;
    id: string;
    dateCreated?: Date;
    dateCompleted?: string;
};
export interface InitialState {
    todos: Todos[];
    dispatchState: () => any;
    userProfile: any;
}
const initialStore: InitialState = {
    todos: [],
    dispatchState: () => {},
    userProfile: null,
};

const store = createContext(initialStore) as any;
export const useTodoContext = () => {
    return useContext<InitialState>(store);
};

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
} as any;
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
                dateCompleted: new Date().toLocaleDateString("en-US", options),
            };
            const newTask = [...oldTask];
            localStorage.setItem("todo", JSON.stringify(newTask));
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
            localStorage.setItem("todo", JSON.stringify(Task));
            return Task;
        case "delete":
            const filteredTask = state.filter((item) => item.id !== action.id);
            localStorage.setItem("todo", JSON.stringify(filteredTask));
            return filteredTask;
        case "create":
            const oldState = state;
            const newState = [
                ...oldState,
                {
                    note: action.note,
                    title: action.title,
                    conpleted: true,
                    id: v4(),
                    dateCreated: new Date().toLocaleDateString(
                        "en-US",
                        options
                    ),
                },
            ];
            localStorage.setItem("todo", JSON.stringify(newState));
            return newState;
        case "edit":
            let old = state;
            const ItemThatNeedsToBeEdited = old.findIndex((index) => {
                return index.id == action.id;
            });

            

            old[ItemThatNeedsToBeEdited] = {
                ...old[ItemThatNeedsToBeEdited],
                ...action.value,
            };
            const newVariable = [...old];

            localStorage.setItem("todo", JSON.stringify(newVariable));
            return newVariable;
        case "fetchData":
            return action.data;
    }
};

const ToDoState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todo, dispatchState] = useReducer(
        reducers,
        initialStore.todos
    ) as any;
    const [userProfile, setUserProfile] = useState() as any;
    useEffect(() => {
        const profile = localStorage.getItem!("profile") as any;
        if (!profile) {
            return alert("User Not Logged in");
        }
        setUserProfile(JSON.parse(profile));
        const db = localStorage.getItem("todo") as any;
        if (!db) return;
        const response = JSON.parse(db);
        dispatchState({ type: "fetchData", data: response });
    }, []);
    return (
        <store.Provider
            value={{ todos: todo, dispatchState, userProfile, setUserProfile }}
        >
            {children}
        </store.Provider>
    );
};

export default ToDoState;

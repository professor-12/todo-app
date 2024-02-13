"use client";
import { useTodoContext } from "@/store/ToDoState";
import Tabs from "./Tabs/Tabs";
export default function Home() {
    const { todos } = useTodoContext();
    const uncompleted = todos.filter((items) => !items.completed);
    return (
        <>
            <div className="md:hidden block">
                <Tabs />
            </div>
        </>
    );
}

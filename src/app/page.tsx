"use client"
import Task from "@/components/Task/Task";
import { useTodoContext } from "@/store/ToDoState";

export default function Home() {
    const db = localStorage.getItem("todo");
    const { todos } = useTodoContext();
    const uncompleted = todos.filter((items) => !items.completed);
    return (
        <div className="my-12">
            <div className="space-y-3">
                <h1 className="text-4xl text-slate-purple font-[900]">
                    Welcome, <span className="text-lightblue">John</span>
                </h1>
                {
                  
                    !db ? <p className="text-muted text-sm">
                        Create tasks to achieve more.
                    </p> :
                        <div>
                            {
                                <p className="text-muted text-sm">You&apos;ve got {uncompleted.length} task(s) to do</p>
                            }
                    </div>
                }
            </div>
            <Task />
        </div>
    );
}

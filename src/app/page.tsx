"use client";
import Task from "@/components/Task/Task";
import { useTodoContext } from "@/store/ToDoState";
import Mobile from "../components/mobile/Mobile";
import Provider from "@/components/mobile/store";
import NavBar from "@/components/mobile/NavBar";
import Search from "@/components/mobile/Tabs/Search";

export default function Home() {
    const { todos } = useTodoContext();
    const uncompleted = todos.filter((items) => !items.completed);
    return (
        <>
            {/* // larger screen */}
            <div className="hidden md:flex w-full">
                <div className="my-12 w-full">
                    <div className="space-y-3">
                        <div className="flex jus">
                            <h1 className="text-4xl text-slate-purple font-[900]">
                                Welcome,{" "}
                                <span className="text-lightblue">John</span>
                            </h1>
                            <Search/>
                        </div>
                        {todos.length == 0 ? (
                            <p className="text-muted text-sm">
                                Create tasks to achieve more.
                            </p>
                        ) : (
                            <div>
                                {
                                    <p className="text-muted text-sm">
                                        You&apos;ve got {uncompleted.length}{" "}
                                        task(s) to do
                                    </p>
                                }
                            </div>
                        )}
                    </div>
                    <Task />
                </div>
            </div>
            <div className="md:hidden h-screen overflow-y-hidden">
                <Provider>
                    <Mobile />
                    <NavBar />
                </Provider>
            </div>
        </> // smaller screen
    );
}

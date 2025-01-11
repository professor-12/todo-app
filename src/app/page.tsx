"use client";
import Task from "@/components/Task/Task";
import { useTodoContext } from "@/store/ToDoState";
import Mobile from "../components/mobile/Mobile";
import Provider from "@/components/mobile/store";
import NavBar from "@/components/mobile/NavBar";
import Search from "@/components/mobile/Tabs/Search";
import Registeration from "@/components/Registeration";

export default function Home() {
    const { todos, userProfile, authcheckisloading } = useTodoContext();
    console.log(authcheckisloading)
    const uncompleted = todos.filter((items) => !items.completed);
    if (authcheckisloading) {
        return <div className="fixed inset-0 w-full bg-white/40 z-[300] backdrop:blur-lg flex items-center justify-center">
            <h1 className="text-blue-500 text-4xl sm:text-6xl font-semibold text-center text-balance tracking-widest animate-bounce">Taski</h1>
        </div>
    }
    if (!userProfile && !authcheckisloading) {
        return <Registeration />;
    }
    return (
        <>
            {/* // larger screen */}
            <div className="hidden md:flex w-full">
                <div className="my-12 w-full">
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <h1 className="text-4xl text-slate-purple font-[900]">
                                Welcome,{" "}
                                <span className="text-lightblue">
                                    {userProfile?.name}
                                </span>
                            </h1>
                        </div>
                        {uncompleted.length == 0 ? (
                            <p className="text-muted text-sm">
                                Create tasks to achieve more.
                            </p>
                        ) : (
                            <div>
                                {
                                    <p className="text-muted text-sm">
                                        You&apos;ve got {uncompleted.length}{" "}
                                        {uncompleted.length == 1
                                            ? "task"
                                            : "tasks"}{" "}
                                        to do
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

import Task from "@/components/Task/Task";

export default function Home() {
    return (
        <div className="my-12">
            <div className="space-y-3">
                <h1 className="text-4xl text-slate-purple font-[900]">
                    Welcome, <span className="text-lightblue">John</span>
                </h1>
                <p className="text-muted text-sm">
                    Create tasks to achieve more.
                </p>
        </div>
        <Task/>
        </div>
    );
}

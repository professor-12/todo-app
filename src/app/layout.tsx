import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import ToDoState from "../store/ToDoState";
import ServiceWorker from "@/components/ServiceWorker";
// import ServiceWorker from "@/component/ServiceWorker"
export const metadata: Metadata = {
    title: "Todo App",
    description: "",
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body >
                <Toaster />
                <ToDoState>
                    <main className="container flex flex-col h-screen mx-auto space-y-11 p-4 xl:w-[80%]">
                        <Header />
                        {children as React.ReactNode}
                    </main>
                </ToDoState>
                <ServiceWorker />
            </body>
        </html>
    );
}

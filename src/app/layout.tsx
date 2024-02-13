import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ToDoState from "../store/ToDoState";
import NavBar from "@/components/mobile/NavBar";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["100", "200", "300",
        "400", "500", "900", "800"],
});

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
            <body className={urbanist.className}>
                <ToDoState>
                    <main className="container flex flex-col h-screen mx-auto space-y-11 p-4 xl:w-[80%]">
                        <Header />
                        {children as React.ReactNode}
                        
                    </main>
                </ToDoState>
            </body>
        </html>
    );
}

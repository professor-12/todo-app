import { useState, useEffect, createContext, useContext } from "react";

type Tab = "todo" | "create" | "search" | "done";

const store = createContext({});

export const useTabs = () => {
    return useContext<any>(store);
};
const Provider: React.FC<any> = ({ children }) => {
    const [tab, setTab] = useState<Tab>("todo");
    return (
        <store.Provider value={{ tab, setTab }}> {children} </store.Provider>
    );
};

export default Provider;

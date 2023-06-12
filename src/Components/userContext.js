import { createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children})=> {

    const [storage, setStorage]= useState(JSON.parse(localStorage.getItem('data') || '[]'))
    const saveNewEmployee = (employee)=> {
        localStorage.setItem('data', JSON.stringify([...storage, employee]));
        setStorage(JSON.parse(localStorage.getItem('data') || '[]'))
    }
    return <UserContext.Provider value={{test:1, storage, saveNewEmployee}}>
        {children}
    </UserContext.Provider>
}
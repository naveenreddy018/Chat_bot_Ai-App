import { createContext, useState } from "react";

export const recent_context = createContext()

export const Recent_items =  ({children}) =>{

const [Recent_items,setRecent_items] = useState([])

 const recent_values = {
             
       Recent_items,
       setRecent_items

 }



    return (
        <recent_context.Provider value={recent_values}>
            {children}
        </recent_context.Provider>
    )
}




import { useState } from "react";
import { createContext } from "react";

export const Theme_Context = createContext({
    changeTheme:"",
})

export const Theme_provider = ({children})=>{

    const [changeTheme,SetchangeTheme] = useState(true)
    const value = {changeTheme,SetchangeTheme}

    return (<Theme_Context.Provider value={value}>{children}</Theme_Context.Provider>)

}
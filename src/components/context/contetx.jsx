import { createContext, useState } from "react";
import run from "../config/config";

export  const Context = createContext();



const ContextProvider = (props)=>{
         const [response,setresponse] = useState("")
         const [input,setinput] = useState("") 
         const [loading,setloading] = useState()
         const[previnput,setprevinput] = useState("")
         const [history,sethistory] =useState([])



    const onsent =  async(prompt)=>{
        
      setresponse( "   ")
      setprevinput(prompt)
      setloading(true)
       const resdata = await run(prompt)

        const splitData = resdata.split(/\*+/)

        const wordsPerLine = Math.ceil(splitData.length / 5);

const lines = [];
for (let i = 0; i < 5; i++) {
  lines.push(splitData.slice(i * wordsPerLine, (i + 1) * wordsPerLine).join(' ')); 
}

        console.log(splitData)
       setresponse(lines.toString())


         

        setloading(false)
        sethistory((prev)=>[...prev,prompt])
        
            
    }


    const contextValue = {

        onsent,
        response,
        input,
        setinput,
        loading,
        previnput,
        history


    }




    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;
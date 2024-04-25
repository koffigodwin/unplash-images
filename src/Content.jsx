import React, { createContext, useContext, useState } from 'react'

const Approvider = createContext()

const Content = ({ children }) => {
    const [isdarkmood , setisdarkmood] = useState(false)
    const [inputvalue , setinputvalue] = useState('mountain')
   
    const Togglefunctiontheme = () =>{
        const newdarkmood = !isdarkmood
        setisdarkmood(newdarkmood)
       
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme',newdarkmood)
    }

  return (
   <Approvider.Provider value={{isdarkmood , Togglefunctiontheme , setinputvalue , inputvalue}}>
    {children}
   </Approvider.Provider>
  )
}

export default Content

export const UseGlobalContnent = () => useContext(Approvider)
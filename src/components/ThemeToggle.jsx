import React from 'react'
import { UseGlobalContnent } from '../Content'
import {BsFillSunFill , BsFillMoonFill} from 'react-icons/bs'
import '../index.css'

const ThemeToggle = () => {
  
    const {isdarkmood , Togglefunctiontheme} = UseGlobalContnent()
     
  return (
    <div className='toggle-container'>
        <h1 className={isdarkmood?'app-name app-name-color':'app-name'}>Unplash Images</h1>
        <button className={isdarkmood?'btn-mode':'btn-mode color-mode'} onClick={Togglefunctiontheme}>{isdarkmood?<BsFillMoonFill/>:<BsFillSunFill/>}</button>
    </div>
  )
}

export default ThemeToggle
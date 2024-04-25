import React from 'react'
import '../index.css'
import { UseGlobalContnent } from '../Content'

const SearchForm = () => {
  const { setinputvalue } = UseGlobalContnent();

const Changehandler =(e) =>{
 e.preventDefault();
 const newvalue = e.target.elements.search.value
 if (!newvalue) return
 setinputvalue(newvalue)
}

  return (
    <div className='input-container'>
        <div className="from-container">
          <form className='form' onSubmit={Changehandler}>
           <input type="text" placeholder='Mountain' name='search'/> 
           <button type='submit' className='btn-submit'>Search</button>
        </form>  
        <div className="button-search">
            <button className='btn-search' onClick={() => setinputvalue('computer')} >Computer</button>
            <button className='btn-search' onClick={() => setinputvalue('food')} >Food</button>
            <button className='btn-search' onClick={() => setinputvalue('beach')} >Beach</button>
            <button className='btn-search' onClick={() => setinputvalue('cat')} >Cat</button>
        </div>
        </div>
        
    </div>
  )
}

export default SearchForm
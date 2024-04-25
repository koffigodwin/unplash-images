import React from 'react'
import { UseGlobalContnent } from '../Content'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import '../index.css'

const Api_url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_APP_KEY}`

const Gallery = () => {
const {isdarkmood, inputvalue } = UseGlobalContnent()

const data = useQuery({
    queryKey : ['images',inputvalue] ,
    queryFn  : async () =>{
        const response = await axios.get(`${Api_url}&query=${inputvalue}`);
        const result = response.data
        return result
    }
})
if (data.isPending) {
    return(
        <section className='image-container'>
          <h1>Loading....</h1>
        </section>  
    )
}
if (data.error) {
   return(
    <section className='image-container'>
      <h4>There was an error...</h4>
    </section>
   ) 
}

const results = data.data.results

if (results.length < 0) {
    return (
        <section className='image-container'>
        <h3>Image Not Found...</h3>
        <br />
        <h3>404 error</h3>
      </section>
    )
}

  return (
    <section className='image-container'>
        <h2 className={isdarkmood?'tiitle colors':'tiitle'}>{inputvalue} images</h2>
      {
        results.map((items) =>{
            const myscr = items?.urls?.regular;
            return(
                <img src={myscr} alt={items.description}  key={items.id} className='images'/>
            )
        })
      }
         
    </section>
  )
}

export default Gallery
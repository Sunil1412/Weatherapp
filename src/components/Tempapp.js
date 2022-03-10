import React, { useEffect } from 'react'

import { useState } from "react"

const Tempapp=()=>{


    const [city,setCity]=useState(null)
    const [search,setSearch]=useState("Mumbai")

     useEffect(()=>{
         
        const fetchApi= async() =>{

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c44463e082aed3910d7e360416079dfc`
            const response = await fetch(url)
            const resJson= await response.json();
            setCity(resJson.main)
        }


         fetchApi();
              
     },[search] )


    return(

        <>
        <div>
            <div>
                <input 
                type="search"
                value={search}
                className="inputFeild"
                onChange={(event)=>{setSearch(event.target.value)}}/>
            </div>



                    {!city ? (
                        <p> No Data Found</p>
                    ):(

                        <>
                        <div>

<h2>
    {search}
</h2>
<h1>
    {city.temp}

</h1>
<h3>
    Min: {city.temp} | Max: {city.temp}
    

</h3>

</div>
                        </>
                    )}
        

        
        </div>


        </>
    )
}

export default Tempapp
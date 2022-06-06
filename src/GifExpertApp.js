import React,{useState} from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

//rafc comando para crear la estructura de un componente funcional

const GifExpertApp = () => 
{

    // const categories = ['The office'];
    const [categories, setCategories] = useState(['Fight club'])

    // const handleAdd = (e) => {
    //     // setCategories([...categories, 'KKK']);
    //     setCategories( cats => [...cats, 'JJJ']);
    // } comment


    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategories}/>
        
        <hr/>
        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
               categories.map( (category) => (
                   
                   <GifGrid
                    key={category}
                    category={category}
                   /> 
                   
               )) 
            }
        </ol>

       
        
    
    </>)

}



export default GifExpertApp;
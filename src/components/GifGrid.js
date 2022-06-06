import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import {getGifs} from '../helpers/getGifs'

export const GifGrid = ({category}) => 
{
    // const [images, setImages] = useState([]);
  
    // useEffect(() => {
    //     getGifs(category).then( imgs => setImages(imgs))
    // }, [category])
  
    // getGifs();

    //creamos nuestro custom hooks para manejar la data
    //para renombrar una variable al hacer desestructuracion
    //es var_name: new_var_name, so we add :
    const {data: images, loading} = useFetchGifs(category);
    
    return (
    <>
        <h3 className='animate__animated animate__bounce'>{category}</h3>
        
        {loading ? <p>Loading...</p>: null}
        
        <div className='card-grid'>
            {
                images.map( (img) => {
                    return  (
                        
                            <GifGridItem 
                            key={img.id}
                            {...img}/>
                        )
    
                })
            }
            </div>


            {/* { images.map( (img) => {
                return  (
                    <li key={img.id}>
                        {img.title}
                    </li>
                )

            }) } */}
        
  
    </>
  )
}

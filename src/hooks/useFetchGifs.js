//al crear hooks, se usa como estandar la palabra use al comienzo para referirse a ellos

import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) =>
{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //A través del useEffect controlamos cuando se va a disparar 
    //la peticion, y queremos que se dispare solo cuando 
    //hayan cambios en categoria
    useEffect( () => {
        getGifs(category).then( img => {
            console.log(img)
            setState({
                data: img,
                loading: false
            })
        })
    }, [category])

    // setTimeout( () =>{
    //     setState({
    //         data: [1,2,3,4],
    //         loading: false
    //     })
    // },3000);


    return state; 
}
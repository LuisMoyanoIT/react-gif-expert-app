import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    console.log(id, title,url)
  return (
    <div className='card animate __animated animate__fadeInDown'>
        <img src={url} alt={title} />
        <p>{title}</p>

    </div>
  )
}

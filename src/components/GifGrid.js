import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'


const GifGrid = ({ category }) => {


    const { loading,data:images} = useFetchGifs(category);

    return (
        <>
        <h2 >{category}</h2>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="card-grid">
           {images.map(img => ( <GifGridItem key={img.id} {...img} />))}
        </div>
        </>
    )
}

export default GifGrid

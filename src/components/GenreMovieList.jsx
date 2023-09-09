import React from 'react'
import GenresList from '../constant/GenresList';
import MovieList from './MovieList';

function GenreMovieList() {
  return (
    <div>
        {GenresList.genere.map((item, index) => index!=5 && (
            <div key={index} className='md:px-16'>
                <h2 className='text-[20px] text-white font-bold px-8'>{item.name}</h2>

                <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList
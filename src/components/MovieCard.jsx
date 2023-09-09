import React from 'react';
import { IMAGE_BASE_URL } from '../utils/utilities';

function MovieCard({movie}) {
  return (
    <>
        <img className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer' src={IMAGE_BASE_URL+movie.poster_path} alt="Movie Poster" />
    </>
  )
}

export default MovieCard
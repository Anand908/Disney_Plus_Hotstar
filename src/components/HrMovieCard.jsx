import React from 'react';
import { IMAGE_BASE_URL } from '../utils/utilities';

function HrMovieCard({movie}) {
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer'>
        <img className='w-[170px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400' src={IMAGE_BASE_URL+movie.backdrop_path} alt="Movie Poster" />

        <h2 className='w-[165px] md:w-[260px] text-[13px] md:text-[15px] text-white'>{movie.title}</h2>
    </div>
  )
}

export default HrMovieCard
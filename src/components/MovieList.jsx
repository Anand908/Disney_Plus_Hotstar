import React, { useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import GlobalApi from '../Services/GlobalApi'
import HrMovieCard from './HrMovieCard';
import MovieCard from './MovieCard';

function MovieList({genreId, index_}) {

    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef();

    useEffect(() => {
        getMovieByGenreId();
    },[])

    const getMovieByGenreId = () =>{
        GlobalApi.getMovieByGenreId(genreId).then(
            (response) => {
                setMovieList(response.data.results);
            },
            (error) => {
                console.write("failed to Load Movie List", error);
            }
        )
    }

    const sliderLeft=(element) => {
        element.scrollLeft-=500;
    }
    const sliderRight=(element) => {
        element.scrollLeft+=500;
    }

  return (
    <div className="relative">

        <HiChevronLeft className='hidden md:block z-10 text-white text-[50px] absolute mx-8 bg-[rgba(0,0,0,0.3)] backdrop-blur-lg m-auto top-0 bottom-0 h-[max-content] rounded-full cursor-pointer]' onClick={() => sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block z-10 text-white text-[50px] absolute mx-8 bg-[rgba(0,0,0,0.3)] backdrop-blur-lg m-auto bottom-0 top-0 h-[max-content] rounded-full cursor-pointer] right-0' onClick={() => sliderRight(elementRef.current)}/>

        <div ref={elementRef} className='flex gap-2 md:gap-8 overflow-x-auto scrollbar-none pt-5 px-3 pb-5 scroll-smooth'>
            {movieList.map((item, index) => (
                index_%3 == 0 ? <HrMovieCard key={index} movie={item}/> 
                : <MovieCard key={index} movie={item}/>
            ))}
        </div>
    </div>
  )
}

export default MovieList
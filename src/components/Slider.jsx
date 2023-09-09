import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import { IMAGE_BASE_URL } from '../utils/utilities';

const screenWidth=window.innerWidth;

export default function Slider() {

  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
      getTrendingVideos;
  }, []);

  const getTrendingVideos = GlobalApi.getTrendingVideos.then(
      (response) => {
          setMovieList(response.data.results);
      },
      (error) => {
        Document.write("Failed to Load Movie", error);
      }
  );

  const sliderLeft=(element) => {
    element.scrollLeft-=screenWidth-110;
  }
  const sliderRight=(element) => {
    element.scrollLeft+=screenWidth-110;
  }

  return (
    <div className='relative'>

      <HiChevronLeft className='hidden md:block text-white text-[50px] absolute mx-8 bg-[rgba(0,0,0,0.3)] backdrop-blur-lg m-auto top-0 bottom-0 h-[max-content] rounded-full cursor-pointer]' onClick={() => sliderLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[50px] absolute mx-8 bg-[rgba(0,0,0,0.3)] backdrop-blur-lg m-auto bottom-0 top-0 h-[max-content] rounded-full cursor-pointer] right-0' onClick={() => sliderRight(elementRef.current)}/>

      <div className='flex overflow-x-auto w-full px-5 md:px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {movieList.map((item, index) => (
          <img className='min-w-full md:h-[300px] mr-5 rounded-md hover:border-[4px] border-gray-400 transition-[0.2s] shadow-md shadow-black'
          src={`${IMAGE_BASE_URL}${item.backdrop_path}`} alt=" Movie Poster" key={index}/>
        ))}
      </div>
    </div>
  )
}

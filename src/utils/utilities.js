import {
    HiHome,
    HiStar,
    HiMagnifyingGlass,
    HiPlayCircle,
    HiTv,
    HiPlus
} from "react-icons/hi2"

import disney from './../assets/Images/disney.png';
import marvel from './../assets/Images/marvel.png';
import nationalG from './../assets/Images/nationalG.png';
import pixar from './../assets/Images/pixar.png';
import starwar from './../assets/Images/starwar.png';

import disneyV from './../assets/Videos/disney.mp4';
import marvelV from './../assets/Videos/marvel.mp4';
import nationalGeographicV from './../assets/Videos/national-geographic.mp4';
import pixarV from './../assets/Videos/pixar.mp4';
import starwarV from './../assets/Videos/star-wars.mp4';

export const Menu = [
    {
        name: 'HOME',
        icon: HiHome
    },
    {
        name: 'SEARCH',
        icon: HiMagnifyingGlass
    },
    {
        name: 'WATCH LIST',
        icon: HiPlus
    },
    {
        name: 'ORIGINALS',
        icon: HiStar
    },
    {
        name: 'MOVIES',
        icon: HiPlayCircle
    },
    {
        name: 'SERIES',
        icon: HiTv
    }
];

export const ProductionHouseList = [
    {
        id: 1,
        image: disney,
        video:disneyV
    },
    {
        id: 2,
        image: marvel,
        video: marvelV
    },
    {
        id: 3,
        image: nationalG,
        video: nationalGeographicV
    },
    {
        id: 4,
        image: pixar,
        video: pixarV
    },
    {
        id: 5,
        image: starwar,
        video: starwarV
    }
];

 export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
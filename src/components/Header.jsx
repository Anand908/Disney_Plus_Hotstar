import React, { useState } from 'react'
import Logo1 from './../assets/Images/logo.svg';
import Logo2 from './../assets/Images/disney-hotstar-logo-dark.svg';
import User from './../assets/Images/user.png';
import { Menu } from './../utils/utilities';
import HeaderItem from './HeaderItem';
import {HiDotsVertical} from 'react-icons/hi';

function Header() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex items-center gap-8 justify-between p-5 mx-3 md:mx-10'>
        <div className='flex gap-8 items-center'>
          <img src={Logo1} alt="Disney+Hotstar" className='hidden md:block w-[70px] object-cover' />
          <img src={Logo2} alt="Disney+Hotstar" className='block md:hidden w-[150px] object-cover' />
          <div className="hidden md:flex flex gap-8">
            {Menu.map((item, index) => (
                <HeaderItem key={index} name={item.name} Icon={item.icon}/>
            ))}
          </div>
          <div className=" fixed z-10 bg-[rgba(0,0,0,0.3)] backdrop-blur-lg m-auto left-0 right-0 w-[max-content] p-5 rounded-full bottom-3 flex gap-1 md:gap-5 md:hidden">
            {Menu.map((item,index) => (
                <HeaderItem key={index} name={''} Icon={item.icon}/>
            ))}
          </div>
          {/* <div className="flex gap-1 md:gap-5 md:hidden">
            {Menu.map((item,index) => index<3&& (
                <HeaderItem key={index} name={''} Icon={item.icon}/>
            ))}
          </div>
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle ? 
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {Menu.map((item,index) => index>=3&& (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} onClick={() => setToggle(false)}/>
                ))}
              </div>
              :
              null
            }
          </div> */}
        </div>

        <img src= {User} alt="User" className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header
import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {NavLink, BrowserRouter} from 'react-router-dom';


const Category = () => {
  return (
    <div className='flex justify-center items-center lg:gap-10 md:gap-5 gap-2 flex-wrap lg:m-8 md:m-8'>
      <NavLink to={'/cuisine/italian'} className={`flex flex-col justify-center items-center rounded-full bg-zinc-600 min-w-24 min-h-24 md:scale-[0.75] scale-[0.6]`}>
        <FaPizzaSlice className='fill-white'/>
        <h4 className='text-white font-semibold'>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/american'} className='flex flex-col justify-center items-center rounded-full bg-zinc-600 min-w-24 min-h-24 md:scale-[0.75] scale-[0.6]'>
        <FaHamburger className='fill-white' />
        <h4 className='text-white font-semibold'>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/thai'} className='flex flex-col justify-center items-center rounded-full bg-zinc-600 min-w-24 min-h-24 md:scale-[0.75] scale-[0.6]'>
        <GiNoodles className='fill-white' />
        <h4 className='text-white font-semibold'>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/japanese'} className='flex flex-col justify-center items-center rounded-full bg-zinc-600 min-w-24 min-h-24 md:scale-[0.75] scale-[0.6]'>
        <GiChopsticks className='fill-white' />
        <h4 className='text-white font-semibold'>Japanese</h4>
      </NavLink>
    </div>
  )
}

export default Category

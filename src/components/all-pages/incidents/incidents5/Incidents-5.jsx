import React from 'react'
import Incidents5Navbar from './Incidents-5-Navbar';

function Incidents5() {
  return (
    <>
    <Incidents5Navbar/>

    <div className='max-w-[792px] mx-auto px-10'>
      <div className='py-5'>
      <h1 className='text-xl lg:text-2xl font-semibold'>Where’s the incident?</h1>
      <p className='text-xs lg:text-sm max-w-9/10 lg:max-w-2/3 text-[#71717A] pt-2'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
      </div>

      <div className='mx-auto relative'>

        <div className='absolute left-2 lg:left-5 top-2 lg:top-5'>
        <div className='relative lg:flex items-center rounded py-1'>
          <img className='absolute ml-2 pt-3 lg:pt-0 pointer-events-none' src="/search.png" alt="" />
          <input type="text" name='search' placeholder='Enter incident address or GPS' autoComplete='off' aria-label='Search incident' className='bg-white py-2 pl-8 placeholder-[#71717A] placeholder:text-xs text-black rounded border-none' />
        </div>

        <div className='relative lg:flex items-center rounded'>
          <img className='absolute ml-2 pt-3 lg:pt-0 pointer-events-none' src="/search.png" alt="" />
          <input type="text" name='search' placeholder='Pinpoint damage' autoComplete='off' aria-label='Search incident' className='bg-white py-2 pl-8 placeholder-[#71717A] placeholder:text-xs text-black rounded border-none' />
        </div>
        </div>

        <div className='absolute lg:flex hidden lg:right-66 lg:top-35'>
          <img src="/location.png" alt="" />
        </div>

        <div className=' flex justify-center items-center'>
          <img className='lg:pb-40 pb:10' src="/map1.png" alt="" />
        </div>

      </div>
    </div>
    </>
  )
}

export default Incidents5;
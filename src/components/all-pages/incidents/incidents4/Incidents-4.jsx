import React from 'react'
import Incidents4Navbar from './Incidents-4-Navbar';

function Incidents4() {
  return (
    <>
    <Incidents4Navbar/>

    <div className='max-w-[792px] mx-auto mt-2 mb-10 lg:mb-40 px-10'>
      <div className='py-5'>
      <h1 className='text-xl lg:text-2xl font-semibold'>Let’s give the incident a title?</h1>
      <p className='text-xs lg:text-sm text-[#71717A] pt-2 pb-4'>Make a title that will easily identify the incidents</p>
      <textarea className='w-full px-4 pt-5 bg-[#F4F4F5]  border-[#E4E4E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#71717A]' name="" placeholder='Add title here'></textarea>
      </div>

      <div>
        <h1 className='text-xl lg:text-2xl font-semibold'>Describe what happened during the incident?</h1>
        <p className='text-xs lg:text-sm text-[#71717A] pt-2 pb-4'>Share some information about the incident. The when, where, how. </p>
        <textarea className='w-full px-4 pt-5 pb-10 bg-[#F4F4F5]  border-[#E4E4E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#71717A]' name="" placeholder='Type here'></textarea>
      </div>
    </div>
    </>
  )
}

export default Incidents4;
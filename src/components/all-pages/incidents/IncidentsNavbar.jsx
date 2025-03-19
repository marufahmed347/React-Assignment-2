import React from 'react'
import { useNavigate } from 'react-router-dom';

const IncidentsNavbar = () => {

  const handleClick1 = useNavigate()
  const click1 = ()=>{
    handleClick1("/Incidents/incidents1")
  }
  

  return (
    <>
    <section className='bg-zinc-100 max-w-[1440px] mx-auto p-3 lg:px-10 lg:py-8 '>
        <div className='flex justify-between'>
            {/* left side */}
            <div>
                <p className='text-xs lg:text-sm text-[#71717A] pb-1'>Home - Incidents</p>
                <h2 className='text-2xl lg:text-3xl font-semibold'>Incidents</h2>
            </div>
            {/* right side */}
            <div className='flex gap-2'>

              <div className='relative hidden lg:flex items-center rounded'>
                <img className='absolute ml-3 pointer-events-none ' src="search.png" alt="" />
                <input type="text" name='search' placeholder='Search incident' autoComplete='off' aria-label='Search incident' className='bg-white py-2 pl-10 placeholder-[#71717A] text-black rounded border-none' />
              </div>
              
              <div className=' rounded items-center hidden lg:flex mx-auto'>
                <input type="text" placeholder='Sort By: Date modified' className='bg-white py-2 pl-4 placeholder-[#71717A] text-black rounded border-none'/>
              </div>

              <div className='flex items-center'>
                <button onClick={click1} className='bg-[#F26922] px-6 py-2 rounded-md text-white  cursor-pointer'><span className='font-bold'>+</span> New Incident</button>
              </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default IncidentsNavbar;
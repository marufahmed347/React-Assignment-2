import React from 'react'

const LocationNavbar = () => {
  return (
    <>
    <section className='bg-zinc-100 max-w-[1440px] mx-auto p-3 lg:px-10 lg:py-8 '>
        <div className='flex justify-between'>
            {/* left side */}
            <div>
                <p className='text-xs lg:text-sm text-[#71717A] pb-1'>Incidents - DR-4699 March 2023 Severe Storms </p>
                <div className='flex mx-auto gap-2'>
                  <img className='size-6 my-auto' src="tree.png" alt="" />
                  <h2 className='text-xl lg:text-2xl font-semibold'>DR-4699 March 2023 Severe Storms</h2>
                </div>
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
                <button  className='bg-[#F26922] px-6 py-2 rounded-md text-white  cursor-pointer'><span className='font-bold'>+</span> New Location</button>
              </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default LocationNavbar;
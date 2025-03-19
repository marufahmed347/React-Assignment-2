import React from 'react'
import LocationNavbar from './LocationNavbar';
import LocationCard1 from './LocationCard-1';
import LocationCard2 from './LocationCard-2';

function Locations() {
  return (
    <>
    <LocationNavbar/>

    <section className='max-w-[1440px] mx-auto px-10 lg:mb-40 mb-10'>
      <div className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-20'>

        {/* left side */}
        <div className=''>

          <div className='flex gap-2'>
            <div className='my-auto'>
              <img className='object-cover' src="location2.png" alt="" />
            </div>

            <div>
              <p className='text-sm text-[#6B7280] pb-1'>Location</p>
              <h1 className='text-2xl font-semibold'>Tulare County,  Los Angles, CA 23415</h1>
            </div>
          </div>

          <div className='flex gap-2 py-10'>
            <div className='my-auto'>
              <img className='object-cover' src="location3.png" alt="" />
            </div>

            <div>
              <p className='text-sm text-[#6B7280] pb-1'>Approx. Cost:</p>
              <h1 className='text-2xl font-semibold'>$60,607,456.00</h1>
            </div>
          </div>

          <div>
            <p className='text-md font-semibold pb-1'>Description</p>
            <p className='text-sm text-[#6B7280]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident libero nam consequatur sit quibusdam expedita amet qui, quaerat quas consequuntur accusamus veritatis veniam quisquam vero repudiandae perferendis officia vel rerum? Impedit porro cum aperiam.</p>
          </div>

          <hr className='my-10 text-[#E4E4E7]' />

          <LocationCard1/>

          <hr className='my-10 text-[#E4E4E7]' />

          <LocationCard2/>
          
        </div>

        {/* right side */}
        <div className=''>
          <p className='text-[#71717A] text-sm'>Incident Map</p>
          <img className='mx-auto w-full py-2 lgpy-4' src="map2.png" alt="" />
          <span className='flex text-[#71717A] text-sm gap-5'>
          <p>Start 19.1232, -118.233</p>
          <p>End 19.3245, -119.2323</p>
          </span>
        </div>
      </div>
    </section>
    </>
  )
}

export default Locations;
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Incidents3Navbar() {

  const handleClickNext3 = useNavigate()
    const clickNext3 = ()=>{
    handleClickNext3("/Incidents/incidentsnext3")
    }

  const handleClickBack3 = useNavigate()
    const clickBack3 = ()=>{
    handleClickBack3("/Incidents/incidentsback3")
    }

  return (
    <>
    <section className='bg-zinc-100 max-w-[1440px] mx-auto p-3 lg:px-10 lg:py-8 '>
        <div className='flex justify-between'>
            {/* left side */}
            <div className='flex gap-2'>
                <div className='flex justify-center items-center'>
                  <img className=' w-10 h-10 ' src="/into.png" alt="" />
                </div>

                <div className='my-auto'>
                <p className='text-[10px] lg:text-sm text-[#71717A] pb-1'>Home - Incidents - New Incident</p>
                <h2 className='text-xl lg:text-3xl font-semibold'>New Incident</h2>
                </div>
            </div>

            {/* middle side */}
            <div className='hidden lg:flex justify-center items-center'>
              <img src="/line2.png" alt="" />
            </div>

            {/* right side */}
            <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-2 space-y-2 lg:space-y-0'>

                <span>
                <button onClick={clickBack3} className='bg-white px-8 lg:px-12 py-1 lg:py-2 rounded-md text-[#71717A] border border-[#D4D4D8] cursor-pointer'>Back</button>
                </span>

                <span>
                <button onClick={clickNext3} className='bg-[#F26922] px-2 lg:px-6 py-1 lg:py-2 rounded-md text-white  cursor-pointer'><span className='font-bold'>+</span> Next step</button>
                </span>

            </div>
        </div>
    </section>
    </>
  )
}

export default Incidents3Navbar;
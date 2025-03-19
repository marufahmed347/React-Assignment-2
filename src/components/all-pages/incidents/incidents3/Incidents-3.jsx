import React from 'react'
import Incidents3Navbar from './Incidents-3-Navbar';

function Incidents3() {

  const IconData = [
    {img:"/icon1.png"},
    {img:"/icon2.png"},
    {img:"/icon3.png"},
    {img:"/icon4.png"},
    {img:"/icon5.png"},
    {img:"/icon6.png"},
    {img:"/icon7.png"},
    {img:"/icon8.png"},
    {img:"/icon9.png"},
    {img:"/icon10.png"},
    {img:"/icon11.png"},
    {img:"/icon12.png"},
    {img:"/icon13.png"},
    {img:"/icon14.png"},
    {img:"/icon15.png"},
    {img:"/icon16.png"},
    {img:"/icon17.png"},
    {img:"/icon18.png"},
  ]

  return (
    <>
    <Incidents3Navbar/>
    <section className='max-w-[1440px] mx-auto mt-2 mb-10 lg:mb-40'>
      <div className='max-w-[760px] mx-auto'>
        <h1 className='py-5 px-10 text-xl font-bold text-center lg:text-start'>Which of these best describes the incident?</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 gap-4 px-10 mx-auto'>
          {
            IconData.map((e,i)=>(
              <div key={i} className='cursor-pointer'>
                <img className='mx-auto' src={e.img} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default Incidents3;
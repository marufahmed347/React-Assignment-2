import React from 'react'
import { useNavigate } from 'react-router-dom'

function Incidents2() {

    const Card = [
        {
            img:"/img1.png",
            heading:"What type of incident?",
            para:"Choose the category that best describes the incident."
        },
        {
            img:"/img2.png",
            heading:"Tell us about the incident?",
            para:"Let’s connect the dots and see where to start."
        },
        {
            img:"/img3.png",
            heading:"Where did the incident occur?",
            para:"Lorem ipsum dolar sit general sac mascho werho"
        },
    ]


    const handleClick2 = useNavigate()
    const click2 = ()=>{
    handleClick2("/Incidents/incidents2")
    }

  return (
    <>
    <section>

    <div className='h-5 md:h-8 lg:h-10 bg-zinc-100'></div>

    <div className='mt-30 mb-40'>
        <div className='px-10 max-w-[580px] mx-auto'>
            <h1 className='text-center text-3xl font-bold'>Let’s get started</h1>
            <p className='text-center text-[#71717A] text-[16px] pt-2 pb-4'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
        </div>

        
        <div className='px-10 pt-0 lg:pt-2 pb-5 lg:pb-8'>
        <img className='w-155 mx-auto' src="/line.png" alt="" />
        </div>
        

        <div className='grid md:grid-cols-3 grid-cols-1 justify-center max-w-[860px] gap-5 px-10 lg:px-0 md:gap-15 mx-auto  '>
            {
                Card.map((i,e)=>(
                    <div key={e} className='bg-[#E4E4E7] px-5 py-3 rounded-md'>
                        <img className='pb-12' src={i.img} alt="" />
                        <h1 className='font-semibold text-xl pb-2'>{i.heading}</h1>
                        <p className='text-[#71717A] text-[14px]'>{i.para}</p>
                    </div>
                ))
            }
        </div>

        <div className='flex items-center justify-center pt-10'>
            <button onClick={click2} className='bg-[#F26922] px-6 py-2 rounded-md text-white cursor-pointer'>Cypher AI</button>
        </div>
    </div>

    </section>
    </>
  )
}

export default Incidents2
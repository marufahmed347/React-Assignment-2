import React from 'react'

function LocationCard2() {

    const CardData = [
        {
            id:1,
            img:"home1.png",
            heading:"Activity name",
            para:"Location name . 16.12212, -122.1424",
            price:"$1,456,654.00"
        },
        {
            id:2,
            img:"home1.png",
            heading:"Activity name",
            para:"Location name . 16.12212, -122.1424",
            price:"$1,456,654.00"
        },
    ]

    const CardInfo = [
        {
            id:1,
            img:"home1.png",
            heading:"Document name",
            para:"Location name . 16.12212, -122.1424",
            price:"$1,456,654.00"
        },
        {
            id:2,
            img:"home1.png",
            heading:"Document name",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
    ]

  return (
    <>
    <div>

        <div>
        <div className='flex justify-between pb-1'>
            <p className='text-md font-semibold pb-1'>Activities</p>
            <p className='text-sm underline'>See all</p>
        </div>

        <div className=' space-y-5'>
            {
                CardData.map((e,i)=>(
                    <div key={i} className='flex gap-5 bg-[#F4F4F5] w-full rounded-md p-4'>
                        <div>
                            <img className='h-20' src={e.img} alt="" />
                        </div>

                        <div className='my-auto'>
                            <h1 className='text-[16px] font-semibold'>{e.heading}</h1>
                            <p className='text-sm text-[#71717A] py-1'>{e.para}</p>
                            <h1 className='text-[17px] font-bold'>{e.price}</h1>
                        </div>
                    </div>
                ))
            }
        </div>

        </div>

        <hr className='my-10 text-[#E4E4E7]' />

        <div>
        <div className='flex justify-between pb-1'>
            <p className='text-md font-semibold pb-1'>Documents</p>
            <p className='text-sm underline'>See all</p>
        </div>

        <div className=' space-y-5'>
            {
                CardInfo.map((e,i)=>(
                    <div key={i} className='flex gap-5 bg-[#F4F4F5] w-full rounded-md p-4'>
                        <div>
                            <img className='h-20' src={e.img} alt="" />
                        </div>

                        <div className='my-auto'>
                            <h1 className='text-[16px] font-semibold'>{e.heading}</h1>
                            <p className='text-sm text-[#71717A] py-1'>{e.para}</p>
                            <h1 className='text-[17px] font-bold'>{e.price}</h1>
                        </div>
                    </div>
                ))
            }
        </div>

        </div>



        
    </div>
    </>
  )
}

export default LocationCard2;
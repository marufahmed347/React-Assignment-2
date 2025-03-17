import React from 'react'

function LocationCard1() {

    const CardInfo = [
        {
            id:1,
            img:"home1.png",
            btn:"Building",
            btnImg:"b.png",
            heading:"Whitechapel Rd.",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
        {
            id:2,
            img:"home2.png",
            btn:"Building",
            btnImg:"b.png",
            heading:"Whitechapel Rd.",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
        {
            id:3,
            img:"home1.png",
            btn:"Building",
            btnImg:"b.png",
            heading:"Whitechapel Rd.",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
        {
            id:4,
            img:"home1.png",
            btn:"Building",
            btnImg:"b.png",
            heading:"Whitechapel Rd.",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
    ]

  return (
    <>
    <div>
        <div className='flex justify-between pb-1'>
            <p className='text-md font-semibold pb-1'>Locations</p>
            <p className='text-sm text-[#A1A1AA] underline'>See all</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {CardInfo.map((e,i)=>(
                <div key={i} className='relative'>
                    <button className="text-[#18181B] bg-white absolute top-2 right-2 font-bold rounded-full px-2 py-1" size="sm">
                    <div className='flex gap-1 justify-center items-center'>
                        <img src={e.btnImg} alt="" />
                        <p>{e.btn}</p>
                    </div>
                    </button>
                    <img className='w-[400px] object-cover' src={e.img} alt="" />
                    <h2 className='font-semibold mt-4'>{e.heading}</h2>
                    <p className='text-[#71717A] text-sm my-1'>{e.para}</p>
                    <p className='font-semibold'>{e.price}</p>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default LocationCard1;
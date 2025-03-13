import React from 'react'

function Card() {

    const CardData = [
        {
            id:1,
            img:"card1.png",
            btn:"Blizzard",
            btnImg:"w.png",
            heading:"Whitechapel Rd.",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
        {
            id:2,
            img:"card2.png",
            btn:"Blizzard",
            btnImg:"w.png",
            heading:"Whitechapel Rd.",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
        {
            id:3,
            img:"card3.png",
            btn:"Blizzard",
            btnImg:"w.png",
            heading:"Tulare County",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
        {
            id:4,
            img:"card4.png",
            btn:"Blizzard",
            btnImg:"w.png",
            heading:"Tulare County",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
        {
            id:5,
            img:"card5.png",
            btn:"Blizzard",
            btnImg:"w.png",
            heading:"Tulare County",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        },
        {
            id:6,
            img:"card6.png",
            btn:"Blizzard",
            btnImg:"w.png",
            heading:"Tulare County",
            para:"Tulare County,  Los Angles, CA 23415",
            price:"$1,456,654.00"
        }
    ]

  return (
    <>
    <section className='my-10 w-[100%] p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {CardData.map((e,i)=>(
                <div key={i} className='relative'>
                    <button className="text-[#18181B] bg-white absolute top-2.5 lg:top-4 right-2.5 lg:right-4 font-bold rounded-full p-3" size="sm">
                    <div className='flex gap-2 justify-center items-center'>
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
    </section>
    </>
  )
}

export default Card;
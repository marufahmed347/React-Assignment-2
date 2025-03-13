import React, { useState } from 'react'
import Card from '../../common/card';
import DashboardNavbar from './DashboardNavbar';


function Dashboard() {

  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
    <div className=''>
    <DashboardNavbar/>
    <Card/>
    
    <div className='relative'>
    <div className='lg:pb-16 lg:px-10 lg:pt-0  px-5  pt-0 pb-5 flex justify-end'>
    <button onClick={() => setChatOpen(!chatOpen)}>
      <img className='' src="c.png" alt="" />
    </button>
    </div>

    {chatOpen &&(
      <div className='absolute bottom-26 lg:bottom-38 justify-end right-10 md:right-10'>
        <img className='h-105' src="chat.png" alt="" />
      </div>
    )}
    </div>

    </div>
    
    </>
  )
}

export default Dashboard;
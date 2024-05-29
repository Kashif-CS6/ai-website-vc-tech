import React from 'react'
import Aicard from './aicard'

const Botsection = () => {
  return (
    <div>
      {/* top section */}
      <div className='flex flex-col md:flex-row justify-between mx-2 md:mx-20 py-3'>
         {/* top section left */}
         <div className='py-2 md:py-0 mb-4 md:mb-0'>
          <p className='text-sm  w-80 mb-6'>Lorem ipsum dolor, jkm ormsit amet consectetur adipisicing elit. Ea debitisdis orm facere impedit!</p>
          <button className='py-2 px-2 rounded-full text-sm font-[500] bg-gradient-to-r from-blue-600 via-violet-500 to-indigo-400 inline-block  text-white'>Try it now</button>
         </div>

 
      {/* top section right */}

      <div className='text-2xl md:text-4xl font-[600] flex flex-col gap-1'>
        <h1>This AI can play logic  and </h1>
        <h1>provide answers that are</h1>
        <h1>relevant to what you </h1>
        <h1>prompt</h1>
      </div>
      </div>
     


      {/* bottom section */}
      <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center mt-10 mx-2 md:mx-0'>
        <Aicard/>
        <Aicard/>
        <Aicard/>
      </div>
    </div>
  )
}

export default Botsection

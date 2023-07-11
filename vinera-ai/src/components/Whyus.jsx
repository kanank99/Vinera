import React from 'react'

function Whyus() {
  return (
    <div className='relative h-[100dvh] bg-[#222223] rounded-t-[3em]'>               
        <div className='glowing-item absolute left-[50%] translate-x-[-50%] translate-y-[500px]'></div>
        <div className='glowing-item-2 absolute left-[50%] translate-x-[-50%] translate-y-[700px]'></div>
        <div className='absolute text-[#f7f7f7] text-5xl left-[50%] translate-x-[-50%] translate-y-24 w-full'>
            <p className='font-bold'>WHY <span className='underline-curve relative text-transparent bg-clip-text bg-gradient-to-b from-green-900 to-green-400'>CHOOSE</span> US?</p>
        </div>
    </div>
  )
}

export default Whyus
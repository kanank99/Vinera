import React from 'react'

function Main() {
  return (
    <div className='font-display flex justify-center items-center  h-[100dvh]' id='vanta'>
        <div className='flex flex-col gap-10 justify-center items-center'>
            <p className='text-4xl sm:text-6xl lg:text-7xl leading-snug lg:leading-relaxed  font-bold text-center w-[70%]'>Develop <span className='text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800'>AI</span> Powered <span className='text-transparent bg-clip-text bg-gradient-to-t from-green-800 to-green-100'>Automated</span> Solutions.</p>
            <p className='text-center leading-snug w-[90%]' >Leverage Vinera AI to automate tasks, eradicate manual work, and achieve significant cost savings by reducing staff and associated expenses.</p>
        </div>
    </div>
  )
}

export default Main

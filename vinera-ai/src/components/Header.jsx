import React from 'react'
import Logo from '../assets/images/vineraLogo.png';
import Menu from '../assets/images/menu.png';
import Dropdown from '../assets/images/dropdown.png';

function Header() {
  return (
    <div className=' fixed w-full flex justify-between h-20 items-center pl-4 pr-4 border lg:pl-20 lg:pr-20'>
        <div className='flex gap-1 items-center'>
            <div> <img src={Logo} alt='logo' className='w-16 h-16' /> </div>
            <div className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-green-500 to-green-800'>Vinera</div>
        </div>
        <div className='flex gap-5'>
            {/* Code for dropdown */}
            <div className='hidden sm:flex sm:gap-5 sm:items-center sm:justify-center'>
                    <div className='hidden lg:flex text-xl p-2 rounded-lg h-full border cursor-pointer justify-center items-center gap-2'><p className='tracking-tight'>Solutions</p><img src={Dropdown} alt='dropdown' className='w-5 h-5' /></div>
                    <div className='hidden lg:flex text-xl p-2 rounded-lg h-full border cursor-pointer justify-center items-center gap-2'><p className='tracking-tight'>Our Company</p><img src={Dropdown} alt='dropdown' className='w-5 h-5' /></div>
                    <div className='text-xl p-2 rounded-lg h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center hover-color-change'>
                        <div className='relative z-10'>AAA Consultation</div>
                    </div>
                    <div className='text-xl p-2 rounded-lg h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center hover-color-change'>
                        <div className='relative z-10'>Get Started</div>
                    </div>
                </div>
            <div className='lg:hidden bg-[#19d6a752] p-2 rounded-lg sm:gap-2 flex justify-center items-center'>
                <img src={Menu} alt='menu' className='sm:w-6 sm:h-6 w-10 h-10' />
            </div>
        </div>
    </div>
  )
}

export default Header
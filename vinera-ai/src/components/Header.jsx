import React from 'react'
import Logo from '../assets/images/vinera.png';
import Menu from '../assets/images/menu.png';
import Dropdown from '../assets/images/dropdown.png';
import Open from '../assets/images/open.png';

function Header() {
  return (
    <div className='text-[#191c1d] bg-[#F7F7F7] fixed w-full flex justify-between h-20 items-center pl-4 pr-4 border-b-2 lg:pl-20 lg:pr-20 z-50'>
        <div className='flex items-center'>
            <div> <img src={Logo} alt='logo' className='w-20 h-20' /> </div>
            <div className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-green-300 to-green-900'>Vinera</div>
        </div>
        <div className='flex gap-5'>
            {/* Code for dropdown */}
            <div className='hidden sm:flex sm:gap-5 sm:items-center sm:justify-center'>
                    <div className='hidden lg:flex text-xl bg-[#f7f7f7f7] p-2 rounded-xl h-full border-2 cursor-pointer justify-center items-center gap-2'><p className='tracking-tight'>Solutions</p><img src={Dropdown} alt='dropdown' className='w-5 h-5' /></div>
                    <div className='hidden lg:flex text-xl bg-[#f7f7f7f7] p-2 rounded-xl h-full border-2 cursor-pointer justify-center items-center gap-2'><p className='tracking-tight'>Our Company</p><img src={Dropdown} alt='dropdown' className='w-5 h-5' /></div>
                    <div className='text-xl border border-[#313435] p-2 rounded-xl h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center hover-color-change'>
                        <div className='relative z-10'>Get Started</div>
                    </div>
                    <div className='border border-[#313435] gap-2 text-xl p-2 rounded-xl h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center hover-color-change'>
                        <div className='relative z-10'>App</div>
                        <img src={Open} alt='dropdown' className='w-5 h-5 scale-110 z-10' />
                    </div>
                </div>
            <div className='lg:hidden bg-[#19d6a752] p-2 rounded-xl sm:gap-2 flex justify-center items-center'>
                <img src={Menu} alt='menu' className='sm:w-6 sm:h-6 w-10 h-10' />
            </div>
        </div>
    </div>
  )
}

export default Header
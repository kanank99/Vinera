import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Partners from './components/Partners';
import Whyus from './components/Whyus';
import Integrations from './components/Integrations';
import OurTeam from './components/OurTeam';
import Faq from './components/Faq';
import Calendly from './components/Calendly';
import Footer from './components/Footer';

function App() {

  const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}, [darkMode]);

const toggleDarkMode = () => {
    setDarkMode(!darkMode);
};

  return (
    <div className="App bg-[#f7f7f7] m-0">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
      <Whyus darkMode={darkMode} />
      <Integrations darkMode={darkMode} />
      <OurTeam darkMode={darkMode} />
      <Calendly darkMode={darkMode} />
      <Faq darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <dialog className=' top-0 left-0 w-full h-full  bg-transparent fixed z-[100]'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#161b22] rounded-2xl'>
          <div className='flex flex-col justify-around items-center h-full'>
            <h1 className='text-5xl font-light text-[#f7f7f7]'>MENU</h1>
            <div>
              <div className='text-[#f7f7f7] dark:hover:text-[#8a8f98] transition-all text-3xl h-full cursor-pointer justify-center items-center gap-2'><a href='#calendly' className='tracking-tight' onClick={() => document.querySelector('dialog').close()}>Get Started</a></div>
              <div className='relative'> 
                {/* hr in the right of the div */}
                <hr className='border-[#2b4aa8] w-[130%] max-w-[1200px] m-auto absolute left-[-42px]' />
              </div>
            </div>
            <div>
              <div className='text-[#f7f7f7] dark:hover:text-[#8a8f98] transition-all text-3xl h-full cursor-pointer justify-center items-center gap-2'><a href='#team' className='tracking-tight' onClick={() => document.querySelector('dialog').close()}>Our Team</a></div>
              <div className='relative'> 
                {/* hr in the middle of the div */}
                <hr className='border-[#2b4aa8] w-[110%] max-w-[1200px] m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              </div>
            </div>
            <div>
              <div className='text-[#f7f7f7] dark:hover:text-[#8a8f98] transition-all text-3xl h-full cursor-pointer justify-center items-center gap-2'><a href='#whyus' className='tracking-tight' onClick={() => document.querySelector('dialog').close()}>Solutions</a></div>
              <div className='relative'> 
                {/* hr in the middle of the div */}
                <hr className='border-[#2b4aa8] w-[130%] max-w-[1200px] m-auto absolute left-[0px]' />
              </div>
            </div>
            
            <button className='bg-[#000000] text-white text-xl font-medium px-6 py-4 rounded-full mt-4' onClick={() => document.querySelector('dialog').close()}>Close</button>
          </div>
        </div>
      </dialog>
      {/* <Partners /> */}
    </div>
  );
}

export default App;
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Automations from './components/Automations';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

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
    <div className="App bg-[#000212] m-0 max-w-[100dvw]">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showAlert={showAlert} setShowAlert={setShowAlert} />
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} showAlert={showAlert} setShowAlert={setShowAlert} />} />
        <Route path='/automations' element={<Automations darkMode={darkMode} toggleDarkMode={toggleDarkMode} setShowAlert={setShowAlert} />} />
        <Route path='/contact' element={<Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} setShowAlert={setShowAlert} />} />
      </Routes>
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
    </div>

  );
}

export default App;
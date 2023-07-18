import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Partners from './components/Partners';
import Whyus from './components/Whyus';
import Integrations from './components/Integrations';
import OurTeam from './components/OurTeam';

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
      {/* <Partners /> */}
    </div>
  );
}

export default App;
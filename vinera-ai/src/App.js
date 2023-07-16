import './App.css';
import Header from './components/Header';
import Main from './components/Main';
// import Partners from './components/Partners';
import Whyus from './components/Whyus';
import Integrations from './components/Integrations';

function App() {
  return (
    <div className="App bg-[#f7f7f7] m-0">
      <Header />
      <Main />
      <Whyus />
      <Integrations />
      {/* <Partners /> */}
    </div>
  );
}

export default App;
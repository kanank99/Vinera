import './App.css';
import Header from './components/Header';
import Main from './components/Main';
// import Partners from './components/Partners';
import Whyus from './components/Whyus';

function App() {
  return (
    <div className="App bg-[#f7f7f7]">
      <Header />
      <Main />
      <Whyus />
      {/* <Partners /> */}
    </div>
  );
}

export default App;
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import HostEvent from './components/HostEvent/HostEvent';
import Header from './Shared/Header/Header';

function App() {
  

  return (
    <div className='px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/events/:id' element={<HostEvent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

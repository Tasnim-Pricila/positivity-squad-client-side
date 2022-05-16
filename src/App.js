import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import HostEvent from './components/HostEvent/HostEvent';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className='px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/events/:id' element={<HostEvent/>}></Route>
   
      </Routes>
    </div>
  );
}

export default App;

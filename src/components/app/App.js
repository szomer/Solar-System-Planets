import './app.scss';
import Start from '../start/Start';
import Details from '../details/Details';
import Home from '../home/Home';
import Error from '../error/Error';
import Logo from '../logo/Logo';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Logo />

      <Routes>
        <Route exact path='/' element={<Start />} />
        <Route path='/solarsystem' element={<Home />} />
        <Route path="/planet/:name" element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;

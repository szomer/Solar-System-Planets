import './app.scss';
import Start from '../start/Start';
import Details from '../details/Details';
import Home from '../home/Home';
import Error from '../error/Error';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route exact path='/' element={<Start />} />
        <Route path='/planets' element={<Home />} />
        <Route path="/planets/:name" element={<Details />} />
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;

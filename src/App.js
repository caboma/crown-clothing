import { Routes, Route } from 'react-router-dom';
import Home from '../src/routes/home/home.compnent'


const App = () => {

  return (
    <Routes>
      <Route path='/home' element={<Home />} />

    </Routes>
  );
}

export default App;

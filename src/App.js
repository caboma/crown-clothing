import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.compnent';
import Navbar from './routes/navbar/navbar.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';



const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>

    </Routes>
  );
}

export default App;

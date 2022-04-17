import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import CheckOut from './Pages/CheckOut/CheckOut';
import Footer from './Pages/Footer/Footer';
import FrontPage from './Pages/Home/FrontPage/FrontPage';
import Header from './Pages/Home/Header/Header';
import Login from './Pages/Login/Login';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Register from './Pages/Register/Register';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<FrontPage></FrontPage>}></Route>
        <Route path='/home' element={<FrontPage></FrontPage>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

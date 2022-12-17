
import '../styles/global.css'
// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
// import components
import Header from './components/Header';
import Footer from './components/Footer';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import UnderWorks from './pages/UnderWorks';

function App() {
  return (
    <div className="bg-[#F4F7F8]">
      <Router>
        <Header />
        <Routes>
          <Route  path="/"  element={<Home />}/>
          <Route  path="/products/:productid" element={<ProductDetail />}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/notdone" element={<UnderWorks />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

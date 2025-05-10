import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import DealsPage from './pages/DealsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

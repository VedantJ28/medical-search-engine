import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Manage } from "./pages/Manage";
import { Home } from "./pages/Home";
import {Home_Cust} from './pages/cust_home/Home_Cust'
import { View } from './pages/View';
import { Contact } from './pages/Contact';
import { Index } from './pages/main/Index';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/customer" element={<Home_Cust />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/view" element={<View />} />
        <Route path="/contact" element={<Contact />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

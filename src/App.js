
import Headers from './components/Headers';
import Footer from './components/Footer';
import './App.css';
import Restaurantlist from './components/Restaurantlist';
import Viewrestaurant from './components/Viewrestaurant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
      <Headers />
        {/* <h2>Restaurant Application</h2> */}
        <Routes>
        <Route path='/' element={<Restaurantlist />}/>
        <Route path='/viewrestaurant/:id' element={<Viewrestaurant />}/>
        </Routes>
      </header>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
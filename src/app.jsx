import React, { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Modeld from './component/mode';
import Navbar from './component/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import './app.css';
import './loading.css';
function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="loader"></div>
      
    </div>
  );
}
function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or initialization
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 2 seconds
    }, 2000);
  }, []);

  return (
    <div className="app">
    {isLoading ? <LoadingPage /> :(
    <BrowserRouter>
      <Modeld />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </BrowserRouter>
    )}
    </div>

  
  );
}

export default App;

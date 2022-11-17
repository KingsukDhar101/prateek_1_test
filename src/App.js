import './App.css';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import { Content } from './Components/Content';
import Feature from './Components/Feature';

import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='container'>
        <Content />
        <Feature />
        <About />
      </div>
        <ContactUs />
    </div>
  );
}

export default App;

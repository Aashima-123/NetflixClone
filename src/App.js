import './App.css';
import Faq from './components/Faq';
import Firstsecondthird from './components/Firstsecondthird';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Firstsecondthird />
      </div> 
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

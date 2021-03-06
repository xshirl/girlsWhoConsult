import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Scholars from './components/Scholars';
import Footer from './components/Footer';
import Mentors from './components/Mentors';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Mentors />
      <Scholars/>
      <Footer />



    </div>
  );
}

export default App;

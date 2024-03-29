import './App.scss';
import { About, Header, Footer, Skills, Work } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Skills />
      <Footer />
      
    </div>
  )
}

export default App;

import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Me } from './Components/Me';
import { Tecnologias } from './Components/Tecnologias';
import { Projects } from './Components/Projects';
import { Education } from './Components/Education';
import { Lang } from './Components/Lang';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  return (
      <div className='App'>
        <NavBar />
        <Banner />
        <Me />
        <Tecnologias />
        <Projects />
        <Education />
        <Lang />
        <Contact />
        <Footer />
      </div>
  )
}

export default App

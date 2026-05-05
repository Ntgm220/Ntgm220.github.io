import { Suspense, lazy } from 'react';
import { Me } from './Components/Me';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';

const Tecnologias = lazy(() =>
  import('./Components/Tecnologias').then((module) => ({ default: module.Tecnologias })),
);
const Projects = lazy(() =>
  import('./Components/Projects').then((module) => ({ default: module.Projects })),
);
const Education = lazy(() =>
  import('./Components/Education').then((module) => ({ default: module.Education })),
);
const Lang = lazy(() =>
  import('./Components/Lang').then((module) => ({ default: module.Lang })),
);
const Contact = lazy(() =>
  import('./Components/Contact').then((module) => ({ default: module.Contact })),
);
const Footer = lazy(() =>
  import('./Components/Footer').then((module) => ({ default: module.Footer })),
);

const sectionFallback = <div className="section-fallback" aria-hidden="true"></div>;

function App() {
  return (
      <div className='App'>
        <NavBar />
        <Banner />
        <Me />
        <Suspense fallback={sectionFallback}>
          <Tecnologias />
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <Projects />
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <Education />
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <Lang />
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <Contact />
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <Footer />
        </Suspense>
      </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRu from './Sections/Navbar/Navbar'
import MainSection from './Sections/Main/MainSection';
import Result from './Sections/Result/Result';
import ContactSection from './Sections/ContactSection/ContactSection';
import AdviseSection from './Sections/AdviceSection/AdviseSection';
import Slide from './Sections/SlideSection/Slide';
import Strategiya from './Sections/StrategiyaSection/Strategiya';
import Bisnes from './Sections/BisnesSection/Bisnes';
import Footer from './Sections/Footer/Footer';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-and__navbar'>
        {/* navbar */}
        <NavbarRu />
        {/** main section */}
        <MainSection />
      </div>
      {/* result section */}
      <Result />
      {/* contact section */}
      <ContactSection />
      {/* advice section */}
      <AdviseSection />
      {/* clients section */}
      <Slide />
      {/* strategiya section */}
      <Strategiya />
      {/* bisnes section */}
      <Bisnes/>
        {/* footer section */}
      <Footer/>
    </>
  )
}

export default App

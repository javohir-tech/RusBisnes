import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRu from './Sections/Navbar/Navbar'
import MainSection from './Sections/Main/MainSection';

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
      <p>result section</p>
      {/* contact section */}
      <p>contact section</p>
      {/* advice section */}
      <p>advise section</p>
      {/* clients section */}
      <p>clients section</p>
      {/* strategiya section */}
      <p>strategiya section</p>
      {/* bisnes section */}
      <p>bisnes section</p>
      {/* footer section */}
      <p>footer section</p>
    </>
  )
}

export default App

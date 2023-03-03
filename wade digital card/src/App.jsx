import { useState } from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggle(){
    setDarkMode(prevMode => !prevMode)
  }

  return (
 
    <div className="App">
         
        <Nav
          darkMode={darkMode}
          handleClick={toggle}
        />
        <Main darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App

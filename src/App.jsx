import Login from './assets/components/Desktop/React-components/Login'
import { useState } from 'react'
import './App.css'
import Desktop from './assets/components/Desktop/React-components/Desktop'

function App() {
  const [logged, setLogged] = useState(false)

  return (
    <>
      <div className="app">{logged ? <Desktop /> : <Login setLogged={setLogged}/>}</div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sample } from './Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>sample update code 1</h1>

      <h1>my updated code 2</h1>

      <h1>dont change 2</h1>

      <Sample />
    </>
  )
}

export default App

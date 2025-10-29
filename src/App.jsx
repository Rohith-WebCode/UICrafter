import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Playground from './pages/Playground'

function App() {

  return (
    <div className='flex'>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/create' element = {<Playground/>}/>

      </Routes>
      
    </div>
  )
}

export default App

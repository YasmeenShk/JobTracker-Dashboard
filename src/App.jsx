import { useState } from 'react'
import ApplicationForm from "./Components/ApplicationForm";
import ApplicationCard from './Components/ApplicationCard';

function App() {
  const [application, setapplication] = useState([])

  function onAdd(newApplication){
    setapplication([...application, newApplication])
  }
  return (
    <div className='min-h-screen bg-linear-to-br from-navy-900 via-navy-700 to-navy-500 p-8'>
      {/* <ApplicationForm onAdd={onAdd} /> */}

      <ApplicationCard/>

    </div>
  )
}

export default App
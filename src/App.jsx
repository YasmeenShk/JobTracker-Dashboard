import { useState, useEffect } from 'react'
import ApplicationForm from "./Components/ApplicationForm";
import ApplicationCard from './Components/ApplicationCard';
import StatsPanel from "./Components/StatsPanel";
import StatusBoard from './Components/StatusBoard';
import Charts from "./Components/Charts";

function App() {
  const [application, setapplication] = useState(() => { //local storage return data if available / empty array
    const saved = localStorage.getItem("application")
    return saved ? JSON.parse(saved) : []
  })

  const [showForm, setshowForm] = useState(false)

  useEffect(() => {
    localStorage.setItem("application", JSON.stringify(application))
  }, [application]) //data add/dlt will automatically saved in localstorage


  function onAdd(newApplication) {
    setapplication([...application, newApplication])
    setshowForm(false) //close form after add
  }

  function onDelete(id) {
    setapplication(application.filter(app => app.id !== id)) //only true value rhegi
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-navy-900 via-navy-700 to-navy-500 p-8'>

      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
        <h1 className="text-white text-xl sm:text-2xl font-medium">Job application tracker</h1>
        <button
          onClick={() => setshowForm(true)}
          className="bg-navy-200/25 border border-navy-200/40 text-white rounded-lg px-4 py-2 text-sm sm:text-base transition-all duration-200 hover:bg-navy-200/40 hover:scale-105 self-start sm:self-auto"
        >
          + Add application
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="max-h-[90vh] overflow-y-auto w-full max-w-sm">
            <ApplicationForm onAdd={onAdd} onClose={() => setshowForm(false)} />
          </div>
        </div>
      )}

      <StatsPanel application={application} />
      <Charts application={application} />
      <StatusBoard application={application} onDelete={onDelete} />

    </div>
  )
}

export default App
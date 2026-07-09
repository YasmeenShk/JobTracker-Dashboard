import { useState } from 'react'
import ApplicationForm from "./Components/ApplicationForm";
import ApplicationCard from './Components/ApplicationCard';

function App() {
  const [application, setapplication] = useState([])
  const [showForm, setshowForm] = useState(false)

  function onAdd(newApplication) {
    setapplication([...application, newApplication])
    setShowForm(false) //close form after add
  }

  function onDelete(id) {
    setapplication(application.filter(app => app.id !== id)) //only true value rhegi
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-navy-900 via-navy-700 to-navy-500 p-8'>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-2xl font-medium">Job application tracker</h1>
        <button
          onClick={() => setshowForm(true)}
          className="bg-navy-200/25 border border-navy-200/40 text-white rounded-lg px-4 py-2"
        >
          + Add application
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <ApplicationForm onAdd={onAdd} onClose={() => setshowForm(false)} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {application.map((app) => (
          <ApplicationCard
            key={app.id}
            application={app}
            onDelete={onDelete}
          />
        ))}
      </div>

    </div>
  )
}

export default App
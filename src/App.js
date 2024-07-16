import './App.css'
import Calendar from './Calendar'

export default function App() {

  const days = [
    {
      name: 'Sunday'
    },
    {
      name: 'Monday'
    },
    {
      name: 'Tuesday'
    },
    {
      name: 'Wednesday'
    },
    {
      name: 'Thursday'
    },
    {
      name: 'Friday'
    },
    {
      name: 'Saturday'
    },
  ]

  const dates = Array.from({length: 28}, (x, i) => i + 1)

  return (
    <div className='App'>
      <h1>Calendar</h1>
      <Calendar days={days} dates={dates}/>
    </div>
  )
}

import React, { useState } from 'react';
import './App.css'
import Calendar from './Calendar'
import ColorSelector from './ColorSelector'


export default function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)

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

  const categories = [
    { name: 'Holiday', color: '#FFD700' },
    { name: 'Work', color: '#4682B4' },
    { name: 'Errands', color: '#32CD32' },
    { name: 'Sick', color: '#DC143C' },
  ]

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
  }

  const handleClear = () => {
    setSelectedCategory(null)
  }

  return (
    <div className='App'>
      <h1>Calendar</h1>
      <ColorSelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <Calendar
        days={days}
        dates={dates}
        selectedCategory={selectedCategory}
        categories={categories}
        onClear={handleClear}
      />
    </div>
  )
}

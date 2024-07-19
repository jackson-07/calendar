import React, { useState, useEffect } from 'react'
import './Calendar.css'

export default function Calendar({ days, dates, selectedCategory, categories, onClear }) {

  const [coloredDates, setColoredDates] = useState({})

  useEffect(() => {
    const savedColoredDates = localStorage.getItem('coloredDates')
    if (savedColoredDates) {
      setColoredDates(JSON.parse(savedColoredDates))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('coloredDates', JSON.stringify(coloredDates))
  }, [coloredDates])

  const weeks = []
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7))
  }

  const handleDayClick = (date) => {
    if (selectedCategory) {
      setColoredDates((prev) => ({
        ...prev,
        [date]: selectedCategory,
      }))
    }
  }

  const getCellColor = (date) => {
    const category = categories.find((cat) => cat.name === coloredDates[date])
    return category ? category.color : '#FF6347'
  }

  const handleClear = () => {
    setColoredDates({})
    onClear()
  }

  return (
    <div className='calendar'>
      <button onClick={handleClear} className='clear-button'>Clear Calendar</button>
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className='week'>
          {week.map((date, dayIndex) => (
            <div 
              key={dayIndex} 
              className='day' 
              style={{ backgroundColor: getCellColor(date) }}
              onClick={() => handleDayClick(date)}
            >
              <div className='day-name'>{days[dayIndex].name}</div>
              <div className='date'>{date}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

import './Calendar.css'

export default function Calendar({ days, dates }) {

    const weeks = []

    for (let i = 0; i < dates.length; i += 7) {
        weeks.push(dates.slice(i, i + 7))
    }

    return (
        <div className='calendar'>
            {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className='week'>
                    {week.map((date, dayIndex) => (
                        <div key={dayIndex} className='day'>
                            <div className='day-name'>{days[dayIndex].name}</div>
                            <div className='date'>{date}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
    
}


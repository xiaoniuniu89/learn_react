import React from 'react'

export default function Weather({data}) {

    

  return (
    <div>
        
        {data.address}
        {data.description}
        {data.days.map((day) => (
            <div>
                {day.icon}
                {day.hours.map((hour)=> (
                    <>
                    <p>{hour.datetime}</p>
                    <p>{hour.temp}</p>
                    <p>{hour.conditions}</p>
                    <p>{hour.windspeed}</p>
                    </>
                ))}
            </div>
        ))}
    </div>
  )
}

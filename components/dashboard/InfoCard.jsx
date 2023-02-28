import React, {useEffect, useState} from "react"
import {Card} from "flowbite-react"

const InfoCard = ({title, value, icon, color}) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <Card href="#"
          className="mx-6 my-4 max-w-[15rem] max-h-[15rem] min-w-[15rem] min-h-[15rem] flex flex-col items-center justify-center">
      <h5 className={`text-xl font-bold font-work text-${color}-700 flex justify-center items-center`}>
        {icon}
        <span className="pl-4 uppercase tracking-tight">{title}</span>
      </h5>
      <p className="font-work text-4xl font-bold text-center">
        {value}
      </p>
      <p className="font-work text-center">
        As of
        {' '}
        {date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
        <br/>
        {date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </p>
    </Card>
  )
}

export default InfoCard
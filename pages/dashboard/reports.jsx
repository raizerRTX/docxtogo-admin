import React, {
    useEffect,
    useState,
  } from "react";
  import {LoggedInNavbar} from "../../components/Navbar";
  import {Button} from "flowbite-react"
  import {formatDateForBirthday} from "../../hooks/adjust-date";
  import {toast} from "react-hot-toast";
  import {toastOptions} from "../../styles/modalOptions";
  
  const Reports = () => {
    const [dateStart, setDateStart] = useState(formatDateForBirthday(new Date()));
    const [dateEnd, setDateEnd] = useState(formatDateForBirthday(new Date()));
  
    useEffect(() => {
      console.log(dateStart, dateEnd)
    }, [dateStart, dateEnd])
  
    return (
      <>
        <LoggedInNavbar activePage="reports"/>
  
        <div className="flex flex-col items-center justify-center my-[15%] gap-4">
          <h1 className="font-work text-primary text-3xl font-bold">
            Select Date Range for Reports
          </h1>
          <div className="flex items-center font-work">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"></path>
                </svg>
              </div>
              <input type="date"
                     className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Select date"
                     value={dateStart} onChange={(e) => setDateStart(e.target.value)}/>
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"></path>
                </svg>
              </div>
              <input type="date"
                     className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Select date"
                     value={dateEnd} onChange={(e) => setDateEnd(e.target.value)}/>
            </div>
          </div>
          <Button className="font-work" onClick={() => toast.success("Generated Reports", toastOptions)}>
            Generate Reports
          </Button>
        </div>
      </>
    )
  }
  
  export default Reports
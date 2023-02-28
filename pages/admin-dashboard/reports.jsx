import React, {useState, useEffect} from "react";
import {LoggedInNavbar} from "../../components/SuperAdminNavbar";
import { Card, Label, Select, input, Button } from "flowbite-react";
import { FaRegFileAlt, FaFileCsv } from "react-icons/fa";

const Reports = () => {
    return(
        <div className="h-screen font-work">
            <LoggedInNavbar activePage={"reports"}/>
            <div className="m-[2%] h-[85%] flex items-center justify-center">
                <Card className=" w-[29rem]">
                    <h1 className="text-xl text-primary font-bold">
                        Generate Report
                    </h1>

                    <div className="block text-center">
                        <Label
                            htmlFor="datepicker"
                            value="Select Date Range"
                            />
                    </div>
                    <div id="datepicker" className="flex items-center font-work">
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <input type="date"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date"
                                />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <input type="date"
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date"
                                />
                        </div>
                    </div>

                    <div>
                        <div className="mb-2 block text-center">
                            <Label
                                htmlFor="reporttype"
                                value="Generate Report Type"
                                />
                        </div>
                        <Select
                            icon={FaRegFileAlt}
                            id="reporttype"
                            required={true}
                            >
                            <option>
                                Request Logs
                            </option>
                            <option>
                                Admin Account Reports
                            </option>
                            <option>
                                Admin Account Log In
                            </option>
                            <option>
                                Admin Account Log Out
                            </option>
                            <option>
                                Super Admin Account Log In
                            </option>
                            <option>
                                Super Admin Account Log Out
                            </option>
                        </Select>
                    </div>

                    <div>
                        <div className="mb-2 block text-center">
                            <Label
                                htmlFor="fileformat"
                                value="Select File Format"
                                />
                        </div>
                        <Select
                            id="fileformat"
                            required={true}
                            icon={FaFileCsv}
                            >
                            <option>
                                Excel
                            </option>
                            <option>
                                CSV
                            </option>
                        </Select>
                    </div>

                    <Button>
                        Generate
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Reports;
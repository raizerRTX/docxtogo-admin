import React from "react";
import axios from "../../server/index"
import {LoggedInNavbar} from "../../components/Navbar";
import InfoCard from "../../components/dashboard/InfoCard";
import {FaFolder, FaFileSignature, FaCalendarDay, FaPrint} from "react-icons/fa";
import {Table} from "flowbite-react";
import {TableRow} from "../../components/dashboard/TableRow";

/**
 * Dashboard page for the admin/employee of the system
 * @param count Object containing the count of each type of document requests
 * @param latestUpdate Array of the latest 5 document requests
 * @see InfoCard
 * @see TableRow
 * @returns {JSX.Element}
 * @constructor
 */
const Dashboard = ({count, latestUpdate}) => {
  const tableHeaders = ["Requestor", "Requested Document", "Status", "Date Updated"];

  return (
    <>
      <LoggedInNavbar activePage="dashboard"/>
      <div className="flex justify-center items-center">
        <InfoCard value={('000' + count.onProcess).slice(-4)}
                  color="blue"
                  icon={<FaFolder/>}
                  title={"On Process"}/>
        <InfoCard value={('000' + count.forSignature).slice(-4)}
                  color="amber"
                  icon={<FaFileSignature/>}
                  title={"For Signature"}/>
        <InfoCard value={('000' + count.forRelease).slice(-4)}
                  color="cyan"
                  icon={<FaPrint/>}
                  title={"For Release"}/>
        <InfoCard value={('000' + count.toReceive).slice(-4)}
                  color="indigo"
                  icon={<FaCalendarDay/>}
                  title={"To Receive"}/>
      </div>
      <div className="mx-[15%] pt-[1rem] pb-[3rem]">
        <h1 className="font-work text-2xl font-bold text-primary pb-3">
          Recent Operations
        </h1>
        <Table className="font-work">
          <Table.Head className="bg-primary text-white">
            {tableHeaders.map((header, index) => (
              <Table.HeadCell key={index}>{header}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {latestUpdate.map((data, index) => (
              <TableRow key={index} data={data}/>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const countResponse = await axios.get("/request/count")
  const recentUpdateResponse = await axios.get("/request/dashboard")

  console.log(recentUpdateResponse.data)

  return {
    props: {
      count: countResponse.data.requests,
      latestUpdate: recentUpdateResponse.data.requests || []
    }
  };
}

export default Dashboard
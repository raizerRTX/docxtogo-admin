import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";
import {Table, TextInput, Button} from "flowbite-react";
import RequestTableRow from "../../components/requests/TableRow";
import {FaSearch} from "react-icons/fa";
import axios from "../../server";
import {toast, Toaster} from "react-hot-toast";
import {toastOptions} from "../../styles/modalOptions";
import {delay} from "../../hooks/delay";
import {useRouter} from "next/router";
import {HiRefresh} from "react-icons/hi";

/**
 * Page containing all requests that can be managed via the dropdown status. Uses the custom `RequestTableRow`
 * component to manage the table rows.
 * @returns {JSX.Element}
 * @see RequestTableRow
 * @constructor
 */
const Requests = ({requests}) => {
  const tableHeaders = ["Time Log", "Name", "Contact Number", "Document", "Purpose", "Date Requested", "Status", "Action"]

  const [search, setSearch] = useState("")
  const [filteredRequests, setFilteredRequests] = useState(requests)
  const router = useRouter()

  useEffect(() => {
    const nameMatches = requests.filter((request) => request.name.toLowerCase().includes(search.toLowerCase()))
    const documentMatches = requests.filter((request) => request.document.toLowerCase().includes(search.toLowerCase()))
    const purposeMatches = requests.filter((request) => request.purpose.toLowerCase().includes(search.toLowerCase()))

    const matches = [...nameMatches, ...documentMatches, ...purposeMatches]
    const uniqueMatches = [...new Set(matches)]
    setFilteredRequests(uniqueMatches)
  }, [search])

  async function refreshHandler() {
    toast('Checking for new data!', {
      ...toastOptions,
      duration: 2000,
      icon: '🔄',
    });
    await delay(2000)
    router.reload()
  }

  return (
    <>
      <Toaster/>
      <LoggedInNavbar activePage="requests"/>
      <div className="mx-[2%] pt-5 pb-[3rem]">
        <div className="flex block justify-between items-center">
          <h1 className="text-2xl font-work text-primary font-bold">
            Document Requests
          </h1>
          <div className="flex gap-4">
            <TextInput
              id="search"
              type="text"
              icon={FaSearch}
              placeholder="Search for anything"
              onChange={(e) => setSearch(e.target.value)}
              required={true}
              className="font-work w-[20rem] h-[2.5rem] text-sm"
            />
            <Button color="success" onClick={() => refreshHandler()} className="font-work uppercase font-bold">
              <HiRefresh className="mr-2"/>
              Refresh
            </Button>
          </div>
        </div>
        <div className="pb-5"></div>
        <Table striped={true}
               className="font-work overflow-y-scroll">
          <Table.Head className="bg-primary text-white">
            {tableHeaders.map((header, index) => (
              <Table.HeadCell key={index}>{header}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {filteredRequests.map((data, index) => (
              <RequestTableRow key={index} data={data}/>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

// export async function getStaticProps() {
//   const {data} = await axios.get("/request")
//
//   console.log(data)
//
//   return {
//     props: {
//       requests: data.requests || []
//     },
//     revalidate: 2
//   };
// }

export async function getServerSideProps(context) {
  const {data} = await axios.get("/request")

  console.log(data)

  return {
    props: {
      requests: data.requests || []
    },
  };
}

export default Requests
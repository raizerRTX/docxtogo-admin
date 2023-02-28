import React from "react";
import {Dropdown, Table} from "flowbite-react";
import {FaFolder, FaFileSignature, FaCheckSquare, FaCalendarDay, FaPrint, FaTimesCircle} from "react-icons/fa";
import {StatusText} from "../dashboard/StatusText";
import {adjustDateTime, formatDate} from "../../hooks/adjust-date";
import axios from "../../server";
import { useRouter } from 'next/router';
import {toast} from "react-hot-toast";
import {toastOptions} from "../../styles/modalOptions.ts";

const RequestTableRow = (
  // time log refers to the time the request was last updated
  {data}
) => {
  const id = data.id
  const router = useRouter()

  const updateRequestStatus = async (status) => {
    try {
      await toast.promise(
        axios.patch(`/request/${id}`, {
          status
        }),
        {
          loading: "Updating request status",
          success: "Request status successfully updated",
          error: "Error updating request status",
        },
        {...toastOptions, duration: 3000}
      )
      router.reload()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="font-medium text-gray-900 dark:text-white">
        {adjustDateTime(data.timeLog)}
      </Table.Cell>
      <Table.Cell className="text-black">
        {data.name}
      </Table.Cell>
      <Table.Cell className="text-black">
        {data.contact}
      </Table.Cell>
      <Table.Cell className="text-black">
        {data.document}
      </Table.Cell>
      <Table.Cell className="text-black">
        {data.purpose}
      </Table.Cell>
      <Table.Cell className="text-black">
        {formatDate(data.dateRequested)}
      </Table.Cell>
      <Table.Cell className="flex-1">
        <StatusText status={data.status}/>
      </Table.Cell>
      <Table.Cell>
        <Dropdown label={"Status"} disabled={data.status === 5 || data.status === 6}>
          <Dropdown.Item icon={FaFolder} onClick={() => updateRequestStatus(1)}>
            On Process
          </Dropdown.Item>
          <Dropdown.Item icon={FaFileSignature} onClick={() => updateRequestStatus(2)}>
            For Signature
          </Dropdown.Item>
          <Dropdown.Item icon={FaPrint} onClick={() => updateRequestStatus(3)}>
            For Release
          </Dropdown.Item>
          <Dropdown.Item icon={FaCalendarDay} onClick={() => updateRequestStatus(4)}>
            To Receive
          </Dropdown.Item>
          <Dropdown.Item icon={FaCheckSquare} onClick={() => updateRequestStatus(5)}>
            Claimed
          </Dropdown.Item>
          <Dropdown.Item icon={FaTimesCircle} onClick={() => updateRequestStatus(6)}>
            Unclaimed
          </Dropdown.Item>
        </Dropdown>
      </Table.Cell>
    </Table.Row>
  )
}

export default RequestTableRow
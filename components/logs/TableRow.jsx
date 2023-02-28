import React from "react";
import {Table} from "flowbite-react";
import {StatusText} from "../dashboard/StatusText";
import {adjustDateTime, formatDate} from "../../hooks/adjust-date";

const LogsTableRow = (
  // time log refers to the time the request was last updated
  {data}
) => {
  // IF the status is CLAIMED, then the status button should be disabled

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
    </Table.Row>
  )
}

export default LogsTableRow;
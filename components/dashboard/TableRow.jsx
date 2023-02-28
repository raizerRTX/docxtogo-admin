import React from "react";
import {Table} from "flowbite-react";
import {StatusText} from "./StatusText";
import {adjustDateTime} from "../../hooks/adjust-date";

export const TableRow = ({id, data}) => {

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-primary font-bold">
        {data.requestor}
      </Table.Cell>
      <Table.Cell className="text-black">
        {data.requestedDocument}
      </Table.Cell>
      <Table.Cell>
        <StatusText status={data.status}/>
      </Table.Cell>
      <Table.Cell className="text-black">
        {adjustDateTime(data.date)}
      </Table.Cell>
    </Table.Row>
  )
}
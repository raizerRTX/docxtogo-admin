import React from "react";
import {Table} from "flowbite-react";

export const TableRow = ({id, item}) => {
    return(
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item[0]}
            </Table.Cell>
            <Table.Cell>
                {item[1]}
            </Table.Cell>
            <Table.Cell>
                {item[2]}
            </Table.Cell>
        </Table.Row>
    );
}
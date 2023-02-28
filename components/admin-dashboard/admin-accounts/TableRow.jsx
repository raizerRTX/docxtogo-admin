import React from "react";
import {Table, Button} from "flowbite-react";
import { FaCheckSquare, FaTimesCircle } from "react-icons/fa";
import { EditAccountModal } from "./EditAccoutModal";

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
            <Table.Cell>
                {item[3]}
            </Table.Cell>
            <Table.Cell>
                {item[4] ? (
                    <div className="text-green-500 flex flex-row items-center">
                        <FaCheckSquare className="mr-2"/>
                        Active
                    </div>
                ) : (
                    <div className="text-red-500 flex flex-row items-center">
                        <FaTimesCircle className="mr-2"/>
                        Inactive
                    </div>
                )}
            </Table.Cell>
            <Table.Cell>
                <EditAccountModal/>
            </Table.Cell>
        </Table.Row>
    );
}
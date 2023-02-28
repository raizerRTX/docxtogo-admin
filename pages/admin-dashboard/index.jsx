import {Label, TextInput, Button, Table} from "flowbite-react";
import Link from "next/link";
import { LoggedInNavbar } from "../../components/SuperAdminNavbar";
import { TableRow } from "../../components/admin-dashboard/TableRow";

const rowitems = [
    ["User Added", "Message: User Added", "10/10/2020"],
    ["User Deleted", "Message: User Added", "10/10/2020"],
    ["User Created", "Message: User Added", "10/10/2020"],
    ["User Updated", "Message: User Added", "10/10/2020"]
];

const SuperAdmin = () => {
    return (
        <div>
            <LoggedInNavbar activePage={"dashboard"}/>
            
            <div className="mx-[2%] pt-[1rem] pb-[3rem]">
                <Table striped={true}>
                    <Table.Head className="bg-primary text-white">
                        <Table.HeadCell>
                            Transaction Type
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Message
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Date
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {rowitems.map((item, index) => (
                            <TableRow key={index} item={item} />
                        ))}
                        
                    </Table.Body>
                </Table>
            </div>

        </div>
    );
}

export default SuperAdmin;
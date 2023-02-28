import {LoggedInNavbar} from "../../components/SuperAdminNavbar";
import { TextInput, Table, Button } from "flowbite-react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { TableRow } from "../../components/admin-dashboard/admin-accounts/TableRow";
import { AddAccountModal } from "../../components/admin-dashboard/admin-accounts/AddAccountModal";

const rowitems = [
    ["10/10/2020", "Kazuma", "Satou", "Kuzuma", true],
    ["10/10/2020", "Kazuma", "Satou", "Kuzuma", false],
    ["10/10/2020", "Kazuma", "Satou", "Kuzuma", true],
];

const AdminAccounts = () => {
    return(
        <div>
            <LoggedInNavbar activePage={"admin-accounts"}/>
            <div className="mx-[2%] pt-5 pb-[3rem]">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-work text-primary font-bold">
                        Admin Accounts
                    </h1>
                    <div className="flex flex-row">
                        <AddAccountModal/>
                        <TextInput
                            id="search"
                            type="text"
                            icon={FaSearch}
                            placeholder="Search for anything"
                            onChange={(e) => setSearch(e.target.value)}
                            required={true}
                            className="font-work w-[20rem] h-[2.5rem] text-sm"
                            />
                    </div>
                    
                </div>
                <div className="pt-[1rem] pb-[3rem]">
                    <Table striped={true}>
                        <Table.Head className="bg-primary text-white">
                            <Table.HeadCell>
                                Date Created
                            </Table.HeadCell>
                            <Table.HeadCell>
                                First Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Last Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Username
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Status
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Edit
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
        </div>
    );
}

export default AdminAccounts;
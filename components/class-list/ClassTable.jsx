import React, {useEffect, useState} from "react";
import {Button, Table, TextInput} from "flowbite-react";
import {FaSearch} from "react-icons/fa";
import {IoMdOpen} from "react-icons/io";
import {AddStudentModal} from "./AddStudentModal";

/**
 * Table to display the list of students in a specific section
 * @param section Section of the class list to be consumed by AddStudentModal
 * @param students Array of student objects to be displayed in the table
 * @returns {JSX.Element}
 * @constructor
 */
export const ClassTable = ({section, students}) => {
  const tableHeaders = ["#", "LRN", "Name", "Gender", "Track and Strand", "Status", "Action"];
  const [search, setSearch] = useState("");
  // will throw an error if students is passed (async state is not allowed)
  const [filteredStudents, setFilteredStudents] = useState(students);

  useEffect(() => {
    const nameMatches = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()));
    const lrnMatches = students.filter(student => student.lrn.toLowerCase().includes(search.toLowerCase()));
    const matches = [...nameMatches, ...lrnMatches];
    const uniqueMatches = [...new Set(matches)];
    setFilteredStudents(uniqueMatches);
  }, [search]);


  return (
    <>
      <div className="my-[2rem] flex justify-between">
        <h1 className="font-work text-3xl font-bold text-primary">
          Section Data
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
          <AddStudentModal section={section}/>
        </div>
      </div>
      <Table striped={true} className="font-work">
        <Table.Head className="bg-primary text-white">
          {tableHeaders.map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {filteredStudents.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell className="text-primary font-bold">{index + 1}</Table.Cell>
              <Table.Cell className="text-black">{item.lrn}</Table.Cell>
              <Table.Cell className="text-black">{item.name}</Table.Cell>
              {
                (item.gender === 'M') ? (
                  <Table.Cell className="text-black">Male</Table.Cell>
                ) : (
                  <Table.Cell className="text-black">Female</Table.Cell>
                )
              }
              <Table.Cell className="text-black">{item.strand}</Table.Cell>
              {
                (item.status === true) ? (
                  <Table.Cell className="text-green-700">Active</Table.Cell>
                ) : (
                  <Table.Cell className="text-red-700">Inactive</Table.Cell>
                )
              }
              <Table.Cell>
                {/*TODO Add linking to actual student information (use LRN)*/}
                <Button className="h-[2rem] uppercase font-bold" href={`/dashboard/class-list/${section}/${item.lrn}`}>
                  <IoMdOpen className="mr-2"/>
                  Edit Student
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
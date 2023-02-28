import React, {useEffect, useState} from "react";
import {Button, Table, TextInput} from "flowbite-react";
import {FaSearch} from "react-icons/fa";
import {IoMdOpen} from "react-icons/io";
import AddSectionModal from "./AddSectionModal";

export const SectionTable = ({sections}) => {
  const tableHeaders = ["Section", "Adviser", "Strand", "Room Assignment", "Action"];
  const [search, setSearch] = useState("");
  const [filteredSections, setFilteredSections] = useState(sections);

  useEffect(() => {
    const nameMatches = sections.filter(((section) => section.section.toLowerCase().includes(search.toLowerCase())));
    const adviserMatches = sections.filter(((section) => section.adviser.toLowerCase().includes(search.toLowerCase())));
    const strandMatches = sections.filter(((section) => section.strand.toLowerCase().includes(search.toLowerCase())));
    const roomMatches = sections.filter(((section) => section.roomAssignment.toLowerCase().includes(search.toLowerCase())));
    const matches = [...nameMatches, ...adviserMatches, ...strandMatches, ...roomMatches];
    const uniqueMatches = [...new Set(matches)];
    setFilteredSections(uniqueMatches);
  }, [search]);


  return (
    <>
      <div className="flex justify-end mb-5 gap-4">
        <TextInput
          id="search"
          type="text"
          icon={FaSearch}
          placeholder="Search for anything"
          onChange={(e) => setSearch(e.target.value)}
          required={true}
          className="font-work w-[20rem] h-[2.5rem] text-sm"
        />
        <AddSectionModal/>
      </div>
      <Table striped={true}>
        <Table.Head className="bg-primary text-white">
          {tableHeaders.map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {filteredSections.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell className="text-primary font-bold">{item.section}</Table.Cell>
              <Table.Cell className="text-black">{item.adviser}</Table.Cell>
              <Table.Cell className="text-black">{item.strand}</Table.Cell>
              <Table.Cell className="text-black">{item.roomAssignment}</Table.Cell>
              <Table.Cell>
                <Button className="h-[2rem] uppercase font-bold" href={`/dashboard/class-list/${item.id}`}>
                  <IoMdOpen className="mr-2"/>
                  Open Masterlist
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
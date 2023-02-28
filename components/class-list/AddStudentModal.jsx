import React, {useState} from "react";

import {Button, Label, Modal, TextInput, ToggleSwitch, Select} from "flowbite-react";
import {Toaster} from "react-hot-toast";
import {AiOutlineFieldNumber} from "react-icons/ai";
import {BiBookBookmark, BiRename} from "react-icons/bi";
import {BsGenderMale, BsGenderFemale} from "react-icons/bs";
import {AiOutlineUserAdd} from "react-icons/ai";

/**
 * Component to display a modal to create a new student entry in a specific section
 *
 * @comment The input fields of this component is working
 * @returns {JSX.Element}
 * @param section Used to set the section of the new student to be added
 * @constructor
 */
export const AddStudentModal = ({section}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [lrn, setLrn] = useState("");
  const [gender, setGender] = useState("M");
  const [strand, setStrand] = useState("");
  const [status, setStatus] = useState(true);

  return (
    <React.Fragment>
      <Toaster/>
      <Button onClick={() => setIsOpen(true)} className="font-work uppercase font-bold">
        <AiOutlineUserAdd className="mr-2"/>
        Add Student
      </Button>
      <Modal
        show={isOpen}
        size="md"
        popup={true}
        onClose={() => setIsOpen(false)}
        className="font-work"
      >
        <Modal.Header/>
        <Modal.Body>
          <div className="space-y-4 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-2xl font-medium text-primary dark:text-white text-center font-bold uppercase">
              Add New Student in {section}
            </h3>
            <div>
              <div className="block">
                <Label
                  htmlFor="fullName"
                  value="Full Name"
                />
              </div>
              <TextInput
                id="fullName"
                type="text"
                icon={BiRename}
                required={true}
                placeholder="Enter Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <div className="block">
                <Label
                  htmlFor="lrn"
                  value="Learner's Reference Number"
                />
              </div>
              <TextInput
                id="lrn"
                type="text"
                icon={AiOutlineFieldNumber}
                required={true}
                placeholder="Enter LRN"
                onChange={(e) => setLrn(e.target.value)}
              />
            </div>
            <div>
              <div id="select">
                <div className="block">
                  <Label
                    htmlFor="strand"
                    value="Track/Strand"
                  />
                </div>
                <Select
                  id="strand"
                  required={true}
                  icon={BiBookBookmark}
                  onChange={(e) => setStrand(e.target.value)}
                >
                  <option value="1">
                    STEM
                  </option>
                  <option value="2">
                    ABM
                  </option>
                  <option value="3">
                    GAS
                  </option>
                  <option value="4">
                    HUMSS
                  </option>
                </Select>
              </div>
            </div>
            <div>
              <div id="select">
                <div className="block">
                  <Label
                    htmlFor="gender"
                    value="Gender"
                  />
                </div>
                <Select
                  id="gender"
                  required={true}
                  icon={gender === "M" ? BsGenderMale : BsGenderFemale}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option defaultChecked value="M">
                    Male
                  </option>
                  <option value="F">
                    Female
                  </option>
                </Select>
              </div>
            </div>
            <div>
              <ToggleSwitch
                id="status"
                checked={status}
                label={`Status: ${status ? "Active" : "Inactive"}`}
                onChange={() => setStatus(!status)}
              />
            </div>
            <div className="w-full">
              <Button type="submit" className="w-full" onClick={() => {}}>
                ADD NEW STUDENT
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
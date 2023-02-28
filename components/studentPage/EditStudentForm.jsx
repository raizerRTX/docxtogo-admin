import React, {useEffect, useState} from "react";
import {Label, TextInput, Button, Select, ToggleSwitch} from "flowbite-react";
import {BiBookBookmark, BiRename} from "react-icons/bi";
import {AiOutlineFieldNumber} from "react-icons/ai";
import {BsGenderFemale, BsGenderMale} from "react-icons/bs";
import {toast} from "react-hot-toast";
import {toastOptions} from "../../styles/modalOptions";

/**
 * Component to display a form to edit a student entry
 * @param studentInformation Information of the student to be rendered
 * @param sectionList List of sections to be rendered in the select component
 * @returns {JSX.Element}
 */
const EditStudentForm = ({studentInformation, sectionList}) => {
  const [name, setName] = useState("");
  const [lrn, setLrn] = useState("");
  const [section, setSection] = useState("");
  const [status, setStatus] = useState(false);
  const [gender, setGender] = useState("M");

  useEffect(() => {
    console.table({
      name, lrn, section, status, gender
    })
  }, [name, lrn, section, status, gender])

  useEffect(() => {
    setName(studentInformation.name);
    setLrn(studentInformation.lrn);
    setSection(studentInformation.section);
    setStatus(studentInformation.status);
    setGender(studentInformation.gender);
  }, []);


  return (
    <form className="flex flex-col gap-2 w-1/2 mt-6">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Name of Student"
          />
        </div>
        <TextInput
          id="name"
          type="text"
          defaultValue={studentInformation.name}
          onChange={(e) => setName(e.target.value)}
          helperText={(<span className="text-xs">Enter the name of the student with the format <code>FN MN LN</code></span>)}
          icon={BiRename}
          required={true}
          shadow={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="lrn"
            value="Learner's Reference Number"
          />
        </div>
        <TextInput
          id="lrn"
          type="text"
          defaultValue={studentInformation.lrn}
          icon={AiOutlineFieldNumber}
          required={true}
          shadow={true}
        />
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
            defaultValue={studentInformation.gender}
          >
            {(gender === "M") ? (
              <>
                <option defaultChecked value="M">
                  Male
                </option>
                <option value="F">
                  Female
                </option>
              </>
            ) : (
              <>
                <option value="M">
                  Male
                </option>
                <option defaultChecked value="F">
                  Female
                </option>
              </>
            )}
          </Select>
        </div>
      </div>
      <div>
        <Label
          htmlFor="section"
          value="Section"
        />
        <Select
          id="section"
          required={true}
          icon={BiBookBookmark}
          onChange={(e) => setSection(e.target.value)}
          defaultValue={studentInformation.section}
          selected={studentInformation.section}
        >
          <option value={studentInformation.section} disabled>
            {studentInformation.section}
          </option>
          {sectionList.map((section, index) => (
            <option key={index} value={section}>
              {section}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Label
          htmlFor="birthday"
          value="Birthdate"
        />
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"></path>
            </svg>
          </div>
          <input type="date"
                 className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Select date"
                 value={studentInformation.birthday} disabled/>
        </div>
      </div>
      <div>
        <ToggleSwitch
          id="status"
          checked={status}
          label={`Status: ${status ? "Active" : "Inactive"}`}
          onChange={() => setStatus(!status)}
          className="my-2"
        />
      </div>
      <Button onClick={() => toast.success("Updated Data", toastOptions)}>
        Save Information
      </Button>
    </form>
  )
}

export default EditStudentForm;
import React, {useEffect, useState} from "react"
import {toast, Toaster} from "react-hot-toast";
import {Button, Label, Modal, Select, TextInput} from "flowbite-react";
import {BiBook, BiBookBookmark, BiDoorOpen, BiUserCircle} from "react-icons/bi";
import {AiOutlineNumber} from "react-icons/ai";
import {toastOptions} from "../../styles/modalOptions";
import axios from "../../server/index"
import {useRouter} from "next/router";


export default function AddSectionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [section, setSection] = useState("");
  const [gradeLevel, setGradeLevel] = useState("11");
  const [roomAssignment, setRoomAssignment] = useState("");
  const [adviser, setAdviser] = useState("");
  const [strand, setStrand] = useState("1");
  const router = useRouter()

  useEffect(() => {
    console.table({section, gradeLevel, roomAssignment, adviser, strand})
  }, [section, gradeLevel, roomAssignment, adviser, strand]);

  // check if fields are empty
  const checkFields = () => {
    return !(section === "" || gradeLevel === "" || roomAssignment === "" || adviser === "" || strand === "");
  }

  const handleAddSection = async () => {
    if (!checkFields()) {
      toast.error("Please fill in all fields", toastOptions);
      return;
    }
    const parsedStrand = parseInt(strand);
    const parsedGradeLevel = parseInt(gradeLevel);

    try {
      await toast.promise(
        axios.post("/section/create", {
          sectionName: section,
          gradeLevel: parsedGradeLevel,
          roomAssignment: roomAssignment,
          adviserName: adviser,
          strandId: parsedStrand
        }),
        {
          loading: "Adding New Section",
          success: "Section Added Successfully",
          error: "Error Adding Section"
        },
        {...toastOptions, duration: 3000}
      )
      router.reload()
    } catch (e) {
      console.log(e)
    }
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)} className="font-work uppercase font-bold">
        <BiBook className="mr-2"/>
        Add Section
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
          <div className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-2xl font-medium text-primary dark:text-white text-center font-bold uppercase">
              Add New Section
            </h3>
            <div>
              <div className="block">
                <Label
                  htmlFor="section"
                  value="Enter section name"
                />
              </div>
              <TextInput
                id="section"
                type="text"
                icon={BiBook}
                required={true}
                placeholder="Section Name"
                onChange={(e) => setSection(e.target.value)}
              />
            </div>
            <div>
              <div className="block">
                <Label
                  htmlFor="room"
                  value="Enter room assignment"
                />
              </div>
              <TextInput
                id="room"
                type="text"
                icon={BiDoorOpen}
                required={true}
                placeholder="Room Assignment"
                onChange={(e) => setRoomAssignment(e.target.value)}
              />
            </div>
            <div>
              <div className="block">
                <Label
                  htmlFor="adviser"
                  value="Enter adviser name"
                />
              </div>
              <TextInput
                id="adviser"
                type="text"
                icon={BiUserCircle}
                required={true}
                placeholder="Adviser Name"
                onChange={(e) => setAdviser(e.target.value)}
              />
            </div>
            <div>
              <div id="select">
                <div className="block">
                  <Label
                    htmlFor="gradeLevel"
                    value="Select Grade Level"
                  />
                </div>
                <Select
                  id="gradeLevel"
                  required={true}
                  icon={AiOutlineNumber}
                  onChange={(e) => setGradeLevel(e.target.value)}
                >
                  <option defaultChecked value={11}>
                    11
                  </option>
                  <option value={12}>
                    12
                  </option>
                </Select>
              </div>
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
              <div className="w-full">
                <Button type="submit" className="w-full" onClick={handleAddSection}>
                  ADD SECTION
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
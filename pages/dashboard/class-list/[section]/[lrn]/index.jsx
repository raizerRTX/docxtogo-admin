import React, {useEffect, useState} from "react";
import {LoggedInNavbar} from "../../../../../components/Navbar";
import {Loader} from "../../../../../components/Loader";
import EditStudentForm from "../../../../../components/studentPage/EditStudentForm";
import axios from "../../../../../server/index";
import {formatDateForBirthday} from "../../../../../hooks/adjust-date";

/**
 * Dynamic page to render a student's information
 * @param lrn LRN of the student which will be used to fetch the student's information
 * @param studentInfo Object containing the student's information
 * @param sectionList Array containing the list of available sections
 * @returns {JSX.Element}
 * @constructor
 */
export const StudentPage = ({lrn, studentInfo, sectionList}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  function handleFileSelect(e) {
    const files = Array.prototype.slice.call(e.target.files)
    setUploadedFiles(files);
  }

  function handlePrint(e) {
    e.preventDefault();
    print()
  }

  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <Loader children={
        <>
          <div className="mx-[5%] my-[2rem]">
            <h1 className="font-work text-3xl font-bold text-primary">
              Edit Student
            </h1>
            <div className="flex gap-[10rem] font-work">
              <EditStudentForm studentInformation={studentInfo} sectionList={sectionList}/>

              {/*<div id="fileUpload" className="w-1/2">*/}
              {/*  <div className="mb-2 block">*/}
              {/*    <Label*/}
              {/*      htmlFor="file"*/}
              {/*      className="font-work text-primary text-xl font-bold"*/}
              {/*      value="Select files for printing"*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*  <FileInput*/}
              {/*    id="file"*/}
              {/*    multiple={true}*/}
              {/*    onChange={handleFileSelect}*/}
              {/*    helperText="Upload related files to print it"*/}
              {/*  />*/}
              {/*  <div className="mt-8">*/}
              {/*    <h3 className="font-work text-xl font-bold text-primary">*/}
              {/*      Selected files*/}
              {/*    </h3>*/}
              {/*    <ListGroup>*/}
              {/*      {(uploadedFiles.length > 0) ?*/}
              {/*        uploadedFiles.map((file, index) => (*/}
              {/*          <ListGroup.Item key={index} icon={BsFillFileEarmarkTextFill}>*/}
              {/*            <div className="flex justify-between">*/}
              {/*              {file.name}{'  '}*/}
              {/*            </div>*/}
              {/*          </ListGroup.Item>*/}
              {/*        )) : (*/}
              {/*          <ListGroup.Item icon={BsFillFileEarmarkTextFill}>*/}
              {/*            <div className="flex justify-between">*/}
              {/*              No files selected*/}
              {/*            </div>*/}
              {/*          </ListGroup.Item>*/}
              {/*        )*/}
              {/*      }*/}
              {/*    </ListGroup>*/}
              {/*    <Button className="mt-4" onClick={handlePrint} disabled={uploadedFiles.length === 0}>*/}
              {/*      Print selected files*/}
              {/*    </Button>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </>
      } data={studentInfo}/>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({params}) {
  const lrn = params.lrn
  const student = await axios.get(`/student/${lrn}`);
  const studentData = {
    lrn: student.data.lrn,
    name: student.data.name,
    gender: student.data.gender,
    strand: student.data.strand,
    status: student.data.status,
    section: student.data.section,
    birthday: formatDateForBirthday(student.data.birthday),
  }

  console.log(student.data)

  const studentInfo = {
    name: "Glen Robin Alejandrino Enriquez",
    lrn: params.lrn,
    gender: 'M',
    strand: "STEM",
    status: true,
    section: "12-Bohr",
    birthday: "2005-12-31"
  }

  // TODO get all student sections
  const sectionList = [
    "12-Bohr",
    "12-Einstein",
    "12-Fermi",
    "12-Newton",
    "12-Planck",
    "12-Poincare",
    "12-Pythagoras",
  ]

  try {
    return {
      props: {
        lrn: lrn,
        studentInfo: studentData || {},
        sectionList: sectionList ? sectionList : [],
      }
    }
  } catch (e) {
    console.error(e);
    return {
      notFound: true
    }
  }
}

export default StudentPage;
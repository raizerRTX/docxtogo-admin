import React, {useState} from "react";
import {LoggedInNavbar} from "../../../../components/Navbar";
import {ClassTable} from "../../../../components/class-list/ClassTable";
import {AddStudentModal} from "../../../../components/class-list/AddStudentModal";
import {Loader} from "../../../../components/Loader";
import axios from "../../../../server/index";

/**
 * Dynamic page to render students in a section
 * @param section Section of the class list to be consumed by `ClassTable`
 * @param students Array of students in the class to be consumed by `ClassTable`
 * @see ClassTable
 * @see AddStudentModal
 * @returns {JSX.Element}
 * @constructor
 */
export const SectionPage = ({section, students}) => {
  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <Loader data={students} children={
        <>
          <div className="mx-[5%] my-[2rem]">
            {(students ?
                <ClassTable students={students} section={section}/> :
                <h1 className="font-work text-3xl font-bold text-primary">No students in this section</h1>
            )}
          </div>
        </>
      }/>
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true
//   }
// }

// export async function getStaticProps({params}) {
//   let section = parseInt(params.section);
//   const {data} = await axios.get(`/student/get/${section}`);
//   console.log(data)
//   return {
//     props: {
//       section: section,
//       students: data || []
//     }
//   }
// }

export async function getServerSideProps(context) {
  let section = parseInt(context.params.section);
  const {data} = await axios.get(`/student/get/${section}`);
  console.log(data)
  return {
    props: {
      section: section,
      students: data || []
    }
  }
}

export default SectionPage;
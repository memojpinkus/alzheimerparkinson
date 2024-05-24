`use client`;
import React from "react";
import Link from "next/link";
import PatientsList from "@/components/patientslist";

const Patients = () => {
  return (
    <>
      <span className="font-bold text-4xl">Patients</span>

      <Link
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href={"/patients/addpatient"}
        style={{ width: '80px', textAlign:"center" }}>
          Add
      </Link>

      <PatientsList></PatientsList>
    </>
  );
};

export default Patients;

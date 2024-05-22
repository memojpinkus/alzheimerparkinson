import React from 'react';
import Link from 'next/link';
import PatientsList from '@/components/patientslist';

const Patients = () => {
  return (
    <>
      <span className="font-bold text-4xl">Patients</span>

      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg">
        <Link className="bg-blue p2" href={"/patients/addpatient"}>Add</Link>
      </div>
      
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
        <PatientsList></PatientsList>
      </div>
    </>
  );
};

export default Patients;
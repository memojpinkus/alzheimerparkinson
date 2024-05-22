'use client'

import React from 'react';
import Link from 'next/link';
import { Icon } from "@iconify/react";

const AddPatient = () => {
  return (
    <>
      <span className="font-bold text-4xl">Add Patients</span>

      <form className='flex flex-col gap-3'>
        <input className='border border-slate-500 px-8 py-2' type='text' placeholder='Patient ID'/>
        <input className='border border-slate-500 px-8 py-2' type='text' placeholder='Possible Disease'/>
        <input className='border border-slate-500 px-8 py-2' type='text' placeholder='Patient Name'/>
        <input className='border border-slate-500 px-8 py-2' type='text' placeholder='Phone Number'/>
        <button className='bg-blue-600 font-bolt text-white py-3 px-6 w-fit'>
            <Icon icon="lucide:arrow-right" width="24" height="24"/>
        </button>
      </form>
    </>
  );
};

export default AddPatient;
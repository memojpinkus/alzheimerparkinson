'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from "@iconify/react";
import { useRouter } from 'next/navigation';

const AddPatient = () => {

  const [disease, setDisease] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!disease || !name || !phone) {
      alert("Possible disease, patient name and phone number required.")
      return;
    }

    try{
      const res = await fetch('http://localhost:3000/api/patients', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({disease, name, phone})
      });

      if (res.ok){
        router.push('/patients/addpatient/aitool');
      }else{
        throw new Error("Failed to create a patient.");
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <span className="font-bold text-4xl">Add Patients</span>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
          onChange={(e) => setDisease(e.target.value)}
          value={disease}
          className='border border-slate-500 px-8 py-2' 
          type='text' 
          placeholder='Possible Disease'
        />
        <input 
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='border border-slate-500 px-8 py-2' 
          type='text' 
          placeholder='Patient Name'
        />
        <input 
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className='border border-slate-500 px-8 py-2' 
          type='text' 
          placeholder='Phone Number'
        />
        <button 
          type="submit"
          className='bg-blue-600 font-bolt text-white py-3 px-6 w-fit'>
            <Icon icon="lucide:arrow-right" width="24" height="24"/>
        </button>
      </form>
    </>
  );
};

export default AddPatient;
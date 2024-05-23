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
        <div>

          <div className='mb-6'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Possible Disease</label>
            <input 
              onChange={(e) => setDisease(e.target.value)}
              value={disease}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
              type='text' 
              placeholder='Possible Disease'
              required
            />
          </div>

          <div className='mb-6'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Name</label>
            <input 
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
              type='text' 
              placeholder='Patient Name'
              required
            />
          </div>

          <div className='mb-6'>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input 
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
              type='text' 
              placeholder='Phone Number'
              required
            />
          </div>
          
          <button 
            type="submit"
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Next
          </button>

        </div>
        
      </form>
    </>
  );
};

export default AddPatient;
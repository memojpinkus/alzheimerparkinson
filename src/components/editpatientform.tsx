'use client'

import { Icon } from "@iconify/react";
import React, { useState } from 'react';
import { json } from "stream/consumers";
import { useRouter } from "next/navigation";

export default function EditPatientForm({id, disease, name, phone}) {

  const [newDisease, setNewDisease] = useState(disease);
  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch(`http://localhost:3000/api/patients/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newDisease, newName, newPhone}),
      });

      if(!res.ok){
        throw new Error('Failed to update patient.')
      }
      router.refresh();
      router.push("/patients");
    } catch (error) {
      console.log(error);
    }
  }

    return(
      <>
        <span className="font-bold text-4xl">Edit Patient</span>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Possible Disease</label>
              <input 
                onChange={e => setNewDisease(e.target.value)}
                value={newDisease}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                type='text' 
                placeholder='Possible Disease'
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Name</label>
              <input 
                onChange={e => setNewName(e.target.value)}
                value={newName}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                type='text' 
                placeholder='Patient Name'
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Phone</label>
              <input
                onChange={e => setNewPhone(e.target.value)}
                value={newPhone}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                type='text' 
                placeholder='Phone Number'
              />
            </div>
            
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Save</button>
          </div>
        </form>
      </>
    )
}
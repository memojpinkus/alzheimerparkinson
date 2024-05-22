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
      const res = await fetch(`http://localhost:3000/api/patients'${id}`, {
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
          <input 
            onChange={e => setNewDisease(e.target.value)}
            value={newDisease}
            className='border border-slate-500 px-8 py-2' 
            type='text' 
            placeholder='Possible Disease'
          />
          <input 
            onChange={e => setNewName(e.target.value)}
            value={newName}
            className='border border-slate-500 px-8 py-2' 
            type='text' 
            placeholder='Patient Name'
          />
          <input
            onChange={e => setNewPhone(e.target.value)}
            value={newPhone}
            className='border border-slate-500 px-8 py-2' 
            type='text' 
            placeholder='Phone Number'
          />
          <button className='bg-blue-600 font-bolt text-white py-3 px-6 w-fit'>Save</button>
        </form>
      </>
    )
}
'use client'

import { Icon } from "@iconify/react";

export default function EditPatientForm() {
    return(
        <>
      <span className="font-bold text-4xl">Edit Patient</span>

      <form className='flex flex-col gap-3'>
        <input className='border border-slate-500 px-8 py-2' type='text' placeholder='Patient ID'/>
        <input className='border border-slate-500 px-8 py-2' type='text' placeholder='Possible Disease'/>
        <input className='border border-slate-500 px-8 py-2' type='text' placeholder='Patient Name'/>
        <input className='border border-slate-500 px-8 py-2' type='text' placeholder='Phone Number'/>
        <button className='bg-red-600 font-bolt text-white py-3 px-6 w-fit'>Delete</button>
        <button className='bg-blue-600 font-bolt text-white py-3 px-6 w-fit'>Save</button>
      </form>
    </>
    )
}
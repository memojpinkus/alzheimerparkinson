'use client'

import React from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function ViewPatient({ id, disease, name, phone }) {

    const router = useRouter();

    return(
        <>
            <span className="font-bold text-4xl">View Patient</span>

            <div className='flex flex-col gap-3'>
                <div className='border border-slate-500 px-8 py-2'>
                    <span className='font-bold'>ID: </span>{id}
                </div>
                <div className='border border-slate-500 px-8 py-2'>
                    <span className='font-bold'>Possible Disease: </span>{disease}
                </div>
                <div className='border border-slate-500 px-8 py-2'>
                    <span className='font-bold'>Patient Name: </span>{name}
                </div>
                <div className='border border-slate-500 px-8 py-2'>
                    <span className='font-bold'>Phone Number: </span>{phone}
                </div>
                <Link 
                    href={"/patients"}
                    className='bg-blue-600 font-bold text-white py-3 px-6 w-fit mt-4'
                >
                    Back to Patients List
                </Link>
                <Link href={`/patients/editpatient/${id}`}>
                    Edit
                </Link>
            </div>
        </>
  )
}
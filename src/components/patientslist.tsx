"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import RemoveButton from "./removebtn";

const getPatients = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/patients", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch patients");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading patients: ", error);
  }
};

export default async function PatientsList() {
  const { patients } = await getPatients();

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Created
              </th>
              <th scope="col" className="px-6 py-3">
                Updated
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                key={p._id}
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {p._id}
                </td>
                <td className="px-6 py-4">{p.name}</td>
                <td className="px-6 py-4">{p.phone}</td>
                <td className="px-6 py-4">{p.createdAt}</td>
                <td className="px-6 py-4">{p.updatedAt}</td>
                <td className="px-6 py-4">
                  <Link href={`/patients/editpatient/${p._id}`}>
                    <Icon icon="lucide:pencil" width="24" height="24" />
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <RemoveButton id={p._id} />
                </td>
                <td className="px-6 py-4">
                  <Link href={`/patients/viewpatient/${p._id}`}>
                    <Icon icon="lucide:eye" width="24" height="24" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

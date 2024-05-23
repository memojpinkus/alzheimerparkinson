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
      {patients.map((p: any) => (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Disease</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{p._id}</td>
              <td>{p.disease}</td>
              <td>{p.name}</td>
              <td>{p.phone}</td>
              <td>{p.createdAt}</td>
              <td>{p.updatedAt}</td>
              <td>
                <RemoveButton id={p._id} />
              </td>
              <td>
                <Link href={`/patients/editpatient/${p._id}`}>
                  <Icon icon="lucide:pencil" width="24" height="24" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}

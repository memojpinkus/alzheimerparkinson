'use client'

import Link from "next/link";
import { Icon } from "@iconify/react";
import RemoveButton from "./removebtn";

export default function PatientsList() {
    return(
        <>
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
                        <td>ID</td>
                        <td>Disease</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Created</td>
                        <td>Updated</td>
                        <td>
                            <RemoveButton/>
                        </td>
                        <td>
                            <Link href={"/patients/editpatient/123"}>
                                <Icon icon="lucide:pencil" width="24" height="24"/>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
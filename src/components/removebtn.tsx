'use client'

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function RemoveButton({ id }) {
    const router = useRouter();
    const removePatient = async() => {
        const confirmed = confirm("Are you sure?");

        if(confirmed) {
            const res = await fetch(`http://localhost:3000/api/patients?id=${id}`, {
                method: "DELETE",
            })

            if(res.ok){
                router.refresh();
            }
        }
    }
    return (
        <button onClick={removePatient} className="text-red-400">
            <Icon icon="lucide:trash-2" width="24" height="24"/>
        </button>
    )
}
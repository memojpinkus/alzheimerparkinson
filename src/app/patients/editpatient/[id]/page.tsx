import EditPatientForm from "@/components/editpatientform"

const getPatientById = async(id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/patients/${id}`, {
            cache: 'no-store',
        });

        if(!res.ok) {
            throw new Error("Failed to fetch topic.");
        }

        return res.json();
    }catch(error){
        console.log(error);
    }
}

export default async function EditTopic({ params }) {
    const {id} = params;
    const {patient} = await getPatientById(id);
    const {disease, name, phone} = patient;
    
    return <EditPatientForm id={id} disease={disease} name={name} phone={phone}/>
}
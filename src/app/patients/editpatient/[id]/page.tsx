import EditPatientForm from "@/components/editpatientform"

const getPatientById = async(id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/patients/${id}`, {
            cache: 'no-store',
        });

        if(!res.ok) {
            throw new Error("Failed to fetch patient.");
        }

        return res.json();
    }catch(error){
        console.log(error);
    }
}

export default async function EditPatient({ params }) {
    const {id} = params;
    const {patient} = await getPatientById(id);
    const {name, apellidoPaterno, apellidoMaterno, fechaDeNacimiento, lugarDeNacimiento, phone, genero, estatura, peso, curp, estadoCivil, educacion, ocupacion, ciudad, estado, calle, colonia, codigoPostal, email, nombreFamiliar, phoneFamiliar, emailFamiliar, tabaco, alcohol, drogas, actividad, enfermedadCronica, alergias, cirugias, trastornos, cancer, hipertension, diabetes, cancerF, asma, enfermedadN} = patient;
    
    return <EditPatientForm id={id} name={name} apellidoPaterno={apellidoPaterno} apellidoMaterno={apellidoMaterno} fechaDeNacimiento={fechaDeNacimiento} lugarDeNacimiento={lugarDeNacimiento} phone={phone} genero={genero} estatura={estatura} peso={peso} curp={curp} estadoCivil={estadoCivil} educacion={educacion} ocupacion={ocupacion} ciudad={ciudad} estado={estado} calle={calle} colonia={colonia} codigoPostal={codigoPostal} email={email} nombreFamiliar={nombreFamiliar} phoneFamiliar={phoneFamiliar} emailFamiliar={emailFamiliar} tabaco={tabaco} alcohol={alcohol} drogas={drogas} actividad={actividad} enfermedadCronica={enfermedadCronica} alergias={alergias} cirugias={cirugias} trastornos={trastornos} cancer={cancer} hipertension={hipertension} diabetes={diabetes} cancerF={cancerF} asma={asma} enfermedadN={enfermedadN}/>
}
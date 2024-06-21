'use client'

import { Icon } from "@iconify/react";
import React, { useState } from 'react';
import { json } from "stream/consumers";
import { useRouter } from "next/navigation";

export default function EditPatientForm({id, name, apellidoPaterno, apellidoMaterno, fechaDeNacimiento, lugarDeNacimiento, phone, genero, estatura, peso, curp, estadoCivil, educacion, ocupacion, ciudad, estado, calle, colonia, codigoPostal, email, nombreFamiliar, phoneFamiliar, emailFamiliar, tabaco, alcohol, drogas, actividad, enfermedadCronica, alergias, cirugias, trastornos, cancer, hipertension, diabetes, cancerF, asma, enfermedadN}) {

  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);
  const [newApellidoPaterno, setNewApellidoPaterno] = useState(apellidoPaterno);
  const [newApellidoMaterno, setNewApellidoMaterno] = useState(apellidoMaterno);
  const [newFechaDeNacimiento, setNewFechaDeNacimiento] = useState(fechaDeNacimiento);
  const [newLugarDeNacimiento, setNewLugarDeNacimiento] = useState(lugarDeNacimiento);
  const [newEstatura, setNewEstatura] = useState(estatura);
  const [newPeso, setNewPeso] = useState(peso);
  const [newCurp, setNewCurp] = useState(curp);
  const [newOcupacion, setNewOcupacion] = useState(ocupacion);
  const [newCalle, setNewCalle] = useState(calle);
  const [newCiudad, setNewCiudad] = useState(ciudad);
  const [newEstado, setNewEstado] = useState(estado);
  const [newColonia, setNewColonia] = useState(colonia);
  const [newCodigoPostal, setNewCodigoPostal] = useState(codigoPostal);
  const [newEmail, setNewEmail] = useState(email);
  const [newNombreFamiliar, setNewNombreFamiliar] = useState(nombreFamiliar);
  const [newPhoneFamiliar, setNewPhoneFamiliar] = useState(phoneFamiliar);
  const [newEmailFamiliar, setNewEmailFamiliar] = useState(emailFamiliar);
  const [newEstadoCivil, setNewEstadoCivil] = useState(estadoCivil);
  const [newGenero, setNewGenero] = useState(genero);
  const [newEducacion, setNewEducacion] = useState(educacion);
  const [newTabaco, setNewTabaco] = useState(tabaco);
  const [newAlcohol, setNewAlcohol] = useState(alcohol);
  const [newDrogas, setNewDrogas] = useState(drogas);
  const [newActividad, setNewActividad] = useState(actividad);
  const [newEnfermedadCronica, setNewEnfermedadCronica] = useState(enfermedadCronica);
  const [newAlergias, setNewAlergias] = useState(alergias);
  const [newCirugias, setNewCirugias] = useState(cirugias);
  const [newTrastornos, setNewTrastornos] = useState(trastornos);
  const [newCancer, setNewCancer] = useState(cancer);
  const [newHipertension, setNewHipertension] = useState(hipertension);
  const [newDiabetes, setNewDiabetes] = useState(diabetes);
  const [newCancerF, setNewCancerF] = useState(cancerF);
  const [newAsma, setNewAsma] = useState(asma);
  const [newEnfermedadN, setNewEnfermedadN] = useState(enfermedadN);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch(`http://localhost:3000/api/patients/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newApellidoPaterno,
          newApellidoMaterno,
          newFechaDeNacimiento,
          newLugarDeNacimiento,
          newGenero,
          newEstatura,
          newPeso,
          newCurp,
          newEstadoCivil,
          newEducacion,
          newOcupacion,
          newCiudad,
          newEstado,
          newCalle,
          newColonia,
          newCodigoPostal,
          newPhone,
          newEmail,
          newNombreFamiliar,
          newPhoneFamiliar,
          newEmailFamiliar,
          newTabaco,
          newAlcohol,
          newDrogas,
          newActividad,
          newEnfermedadCronica,
          newAlergias,
          newCirugias,
          newTrastornos,
          newCancer,
          newHipertension,
          newDiabetes,
          newCancerF,
          newAsma,
          newEnfermedadN,
        }),
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
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre(s)
            </label>
            <input
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Nombre(s)"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Apellido paterno
            </label>
            <input
              onChange={(e) => setNewApellidoPaterno(e.target.value)}
              value={newApellidoPaterno}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Apellido paterno"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Apellido materno
            </label>
            <input
              onChange={(e) => setNewApellidoMaterno(e.target.value)}
              value={newApellidoMaterno}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Apellido materno"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Fecha de nacimiento
            </label>
            <input
              onChange={(e) => setNewFechaDeNacimiento(e.target.value)}
              value={newFechaDeNacimiento}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              placeholder="Fecha de nacimiento"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Lugar de nacimiento
            </label>
            <input
              onChange={(e) => setNewLugarDeNacimiento(e.target.value)}
              value={newLugarDeNacimiento}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Lugar de nacimiento"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Género
            </label>
            <select 
                onChange={(e) => setNewGenero(e.target.value)}
                value={newGenero}
                name="gender" 
                id="gender" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Ninguno">Prefiero no decir</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Estatura (cm)
            </label>
            <input
              onChange={(e) => setNewEstatura(e.target.value)}
              value={newEstatura}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Estatura (cm)"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Peso (kg)
            </label>
            <input
              onChange={(e) => setNewPeso(e.target.value)}
              value={newPeso}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Peso (kg)"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                CURP
            </label>
            <input
                onChange={(e) => setNewCurp(e.target.value)}
                value={newCurp}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="CURP"
                required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Estado civil
            </label>
            <select 
                onChange={(e) => setNewEstadoCivil(e.target.value)}
                value={newEstadoCivil} 
                name="estadoCivil" 
                id="estadoCivil" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                <option value="Solterx">Soltero(a)</option>
                <option value="Casadx">Casado(a)</option>
                <option value="Divorciadx">Divorciado(a)</option>
                <option value="Viudx">Viudo(a)</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nivel de educación máxima
            </label>
            <select 
                onChange={(e) => setNewEducacion(e.target.value)}
                value={newEducacion}
                name="educacion" id="educacion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                <option value="sinEducacion">Sin educación</option>
                <option value="primaria">Primaria</option>
                <option value="secundaria">Secundaria</option>
                <option value="bachillerato">Bachillerato</option>
                <option value="tecnica">Educación técnica</option>
                <option value="licenciatura">Licenciatura</option>
                <option value="maestria">Maestría</option>
                <option value="doctorado">Doctorado</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ocupación
            </label>
            <input
                onChange={(e) => setNewOcupacion(e.target.value)}
                value={newOcupacion}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Ocupación"
                required
            />
          </div>
            
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Domicilio
            </label>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-6">
                <input
                  onChange={(e) => setNewCiudad(e.target.value)}
                  value={newCiudad}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Ciudad"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  onChange={(e) => setNewEstado(e.target.value)}
                  value={newEstado}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Estado"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <input
                onChange={(e) => setNewCalle(e.target.value)}
                value={newCalle}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Calle"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-6">
                <input
                  onChange={(e) => setNewColonia(e.target.value)}
                  value={newColonia}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Colonia"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  onChange={(e) => setNewCodigoPostal(e.target.value)}
                  value={newCodigoPostal}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Código Postal"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contacto de paciente
            </label>

            <div className="mb-6">
              <input
                onChange={(e) => setNewPhone(e.target.value)}
                value={newPhone}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Teléfono"
                required
              />
            </div>

            <div className="mb-6">
              <input
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Correo electrónico"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contacto familiar
            </label>

            <div className="mb-6">
              <input
                onChange={(e) => setNewNombreFamiliar(e.target.value)}
                value={newNombreFamiliar}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Nombre completo"
                required
              />
            </div>

            <div className="mb-6">
              <input
                onChange={(e) => setNewPhoneFamiliar(e.target.value)}
                value={newPhoneFamiliar}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Teléfono"
                required
              />
            </div>

            <div className="mb-6">
              <input
                onChange={(e) => setNewEmailFamiliar(e.target.value)}
                value={newEmailFamiliar}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Correo electrónico"
                required
              />
            </div>
          </div>

          <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
            Antecedentes no patológicos
          </label>

          <fieldset>
            <legend className="sr-only">Consumes tabaco?</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Consumes tabaco?
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input 
                  onChange={(e) => setNewTabaco(e.target.value)} id="tabaco-1" type="radio" name="tabaco" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="tabaco-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewTabaco(e.target.value)} id="tabaco-2" type="radio" name="tabaco" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="tabaco-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewTabaco(e.target.value)} id="tabaco-3" type="radio" name="tabaco" value="suspendido" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="tabaco-3" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Suspendido
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Consumes alcohol?</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Consumes alcohol?
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewAlcohol(e.target.value)} id="alcohol-1" type="radio" name="alcohol" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="alcohol-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewAlcohol(e.target.value)} id="alcohol-2" type="radio" name="alcohol" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="alcohol-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewAlcohol(e.target.value)} id="alcohol-3" type="radio" name="alcohol" value="suspendido" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="alcohol-3" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Suspendido
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Consumes drogas?</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Consumes drogas?
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewDrogas(e.target.value)} id="drogas-1" type="radio" name="drogas" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="drogas-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
                <div className="flex items-center mb-4">
                  <input onChange={(e) => setNewDrogas(e.target.value)}  id="drogas-2" type="radio" name="drogas" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor="drogas-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                    No
                  </label>
                </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Realizas alguna actividad física?</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Realizas alguna actividad física?
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewActividad(e.target.value)}  id="actividad-1" type="radio" name="actividad" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="actividad-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewActividad(e.target.value)}  id="actividad-2" type="radio" name="actividad" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="actividad-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
            Antecedentes patológicos
          </label>

          <fieldset>
            <legend className="sr-only">Padeces alguna enfermedad crónica?</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Padeces alguna enfermedad crónica?
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewEnfermedadCronica(e.target.value)}  id="enfermedad-cronica-1" type="radio" name="enfermedad-cronica" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="enfermedad-cronica-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewEnfermedadCronica(e.target.value)} id="enfermedad-cronica-2" type="radio" name="enfermedad-cronica" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="enfermedad-cronica-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Tienes alergías?</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tienes alergías?
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewAlergias(e.target.value)} id="alergias-1" type="radio" name="alergias" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="alergias-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewAlergias(e.target.value)} id="alergias-2" type="radio" name="alergias" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="alergias-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Cirugías y hospitalización</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Cirugías y hospitalización
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewCirugias(e.target.value)} id="cirugias-1" type="radio" name="cirugias" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="cirugias-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewCirugias(e.target.value)} id="cirugias-2" type="radio" name="cirugias" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="cirugias-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Trastornos mentales</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Trastornos mentales
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewTrastornos(e.target.value)} id="trastornos-1" type="radio" name="trastornos" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="trastornos-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewTrastornos(e.target.value)} id="trastornos-2" type="radio" name="trastornos" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="trastornos-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Historial de cancer</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Historial de cancer
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewCancer(e.target.value)} id="cancer-1" type="radio" name="cancer" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="cancer-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewCancer(e.target.value)}  id="cancer-2" type="radio" name="cancer" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="cancer-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
            Antecedentes familiares patológicos
          </label>

          <fieldset>
            <legend className="sr-only">Hipertensión arterial</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Hipertensión arterial
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewHipertension(e.target.value)} id="hipertension-1" type="radio" name="hipertension" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="hipertension-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewHipertension(e.target.value)} id="hipertension-2" type="radio" name="hipertension" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="hipertension-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Diabetes</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Diabetes
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewDiabetes(e.target.value)} id="diabetes-1" type="radio" name="diabetes" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="diabetes-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewDiabetes(e.target.value)} id="diabetes-2" type="radio" name="diabetes" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="diabetes-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Cancer</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Cancer
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewCancerF(e.target.value)} id="cancerf-1" type="radio" name="cancerf" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="cancerf-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewCancerF(e.target.value)} id="cancerf-2" type="radio" name="cancerf" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="cancerf-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Asma</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Asma
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewAsma(e.target.value)} id="asma-1" type="radio" name="asma" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="asma-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewAsma(e.target.value)} id="asma-2" type="radio" name="asma" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="asma-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Enfermedades neurodegenerativas</legend>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enfermedades neurodegenerativas
            </label>
            <div className="flex">
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewEnfermedadN(e.target.value)} id="neurodegenerativas-1" type="radio" name="neurodegenerativas" value="si" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="neurodegenerativas-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Si
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input onChange={(e) => setNewEnfermedadN(e.target.value)} id="neurodegenerativas-2" type="radio" name="neurodegenerativas" value="no" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="neurodegenerativas-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
            </div>
          </fieldset>
            
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Save</button>
        </form>
      </>
    )
}
import React, { useState } from "react";
import { Radio, Checkbox, Label, Textarea } from "flowbite-react";

export default function Evaluation() {
  const [ageGroup, setAgeGroup] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [physicalActivity, setPhysicalActivity] = useState("");
  const [smoking, setSmoking] = useState("");
  const [hearingDisability, setHearingDisability] = useState("");
  const [alcoholConsumption, setAlcoholConsumption] = useState("");
  const [cranialTrauma, setCranialTrauma] = useState("");
  const [obesity, setObesity] = useState("");
  const [diabetes, setDiabetes] = useState([]);
  const [socialContact, setSocialContact] = useState("");
  const [airPollution, setAirPollution] = useState("");

  const handleDiabetesChange = (event) => {
    const value = event.target.value;
    setDiabetes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Evaluation</h2>
            <div className="mb-4">
              <h3>Edad:</h3>
              <ul>
                {[
                  "Primera infancia (0-5 años)",
                  "Infancia (6 - 11 años)",
                  "Adolescencia (12-18 años)",
                  "Juventud (14 - 26 años)",
                  "Adultez (27 - 59 años)",
                  "Vejez (60 años y más)",
                ].map((age, index) => (
                  <li key={index} className="mb-2">
                    <Label>
                      <Radio
                        value={age}
                        checked={ageGroup === age}
                        onChange={(e) => setAgeGroup(e.target.value)}
                        name="ageGroup"
                        className="mr-2"
                      />
                      {age}
                    </Label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3>Nivel de educacion:</h3>
              <ul>
                {[
                  "Primaria",
                  "Primaria trunca",
                  "Secundaria",
                  "Secundaria trunca",
                  "Preparatoria",
                  "Preparatoria trunca",
                  "Universidad",
                  "Universidad trunca",
                  "Maestría",
                  "Doctorado",
                  "Posdoctorado",
                ].map((education, index) => (
                  <li key={index} className="mb-2">
                    <Label>
                      <Radio
                        value={education}
                        checked={educationLevel === education}
                        onChange={(e) => setEducationLevel(e.target.value)}
                        name="educationLevel"
                        className="mr-2"
                      />
                      {education}
                    </Label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3>Hipertensión Arterial:</h3>
              <Label>
                <Radio
                  value="Si"
                  checked={obesity === "Si"}
                  onChange={(e) => setObesity(e.target.value)}
                  name="obesity"
                  className="mr-2"
                />
                Si
              </Label>
              <Label>
                <Radio
                  value="No"
                  checked={obesity === "No"}
                  onChange={(e) => setObesity(e.target.value)}
                  name="obesity"
                  className="mr-2"
                />
                No
              </Label>
            </div>

            <div className="mb-4">
              <h3>Discapacidad Auditiva:</h3>
              <Label>
                <Radio
                  value="Si"
                  checked={hearingDisability === "Si"}
                  onChange={(e) => setHearingDisability(e.target.value)}
                  name="hearingDisability"
                  className="mr-2"
                />
                Si
              </Label>
              <Label>
                <Radio
                  value="No"
                  checked={hearingDisability === "No"}
                  onChange={(e) => setHearingDisability(e.target.value)}
                  name="hearingDisability"
                  className="mr-2"
                />
                No
              </Label>
              <input
                type="number"
                className="mt-2 border border-gray-300 p-2 w-full"
                placeholder="%"
              />
            </div>

            <div className="mb-4">
              <h3>Consumo excesivo de alcohol:</h3>
              <Label>
                <Radio
                  value="Si"
                  checked={alcoholConsumption === "Si"}
                  onChange={(e) => setAlcoholConsumption(e.target.value)}
                  name="alcoholConsumption"
                  className="mr-2"
                />
                Si
              </Label>
              <Label>
                <Radio
                  value="No"
                  checked={alcoholConsumption === "No"}
                  onChange={(e) => setAlcoholConsumption(e.target.value)}
                  name="alcoholConsumption"
                  className="mr-2"
                />
                No
              </Label>
              <Label>
                <Radio
                  value="Suspendido"
                  checked={alcoholConsumption === "Suspendido"}
                  onChange={(e) => setAlcoholConsumption(e.target.value)}
                  name="alcoholConsumption"
                  className="mr-2"
                />
                Suspendido
              </Label>
            </div>

            <div className="mb-4">
              <h3>Traumatismo craneoencefálico:</h3>
              <Label>
                <Radio
                  value="Si"
                  checked={cranialTrauma === "Si"}
                  onChange={(e) => setCranialTrauma(e.target.value)}
                  name="cranialTrauma"
                  className="mr-2"
                />
                Si
              </Label>
              <Label>
                <Radio
                  value="No"
                  checked={cranialTrauma === "No"}
                  onChange={(e) => setCranialTrauma(e.target.value)}
                  name="cranialTrauma"
                  className="mr-2"
                />
                No
              </Label>
              <Textarea
                placeholder="Causas"
                className="mt-2 border border-gray-300 p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <h3>Obesidad:</h3>
              <input
                type="number"
                placeholder="Peso"
                className="mb-2 border border-gray-300 p-2 w-full"
              />
              <input
                type="number"
                placeholder="Altura"
                className="mb-2 border border-gray-300 p-2 w-full"
              />
              <p>Nivel de obesidad: xxxx</p>
            </div>
          </div>
          <div className="border-l border-gray-300 mx-4"></div> {/* Divider */}
          <div className="flex-1">
            <div className="mb-4">
              <h3>Actividad física:</h3>
              {[
                "Muy alto",
                "Alto",
                "Medio",
                "Bajo",
                "Muy bajo",
                "Sin actividad",
              ].map((activity, index) => (
                <Label key={index} className="block mb-2">
                  <Radio
                    value={activity}
                    checked={physicalActivity === activity}
                    onChange={(e) => setPhysicalActivity(e.target.value)}
                    name="physicalActivity"
                    className="mr-2"
                  />
                  {activity}
                </Label>
              ))}
            </div>

            <div className="mb-4">
              <h3>Tabaquismo:</h3>
              <Label>
                <Radio
                  value="Si"
                  checked={smoking === "Si"}
                  onChange={(e) => setSmoking(e.target.value)}
                  name="smoking"
                  className="mr-2"
                />
                Si
              </Label>
              <Label>
                <Radio
                  value="No"
                  checked={smoking === "No"}
                  onChange={(e) => setSmoking(e.target.value)}
                  name="smoking"
                  className="mr-2"
                />
                No
              </Label>
              <Label>
                <Radio
                  value="Suspendido"
                  checked={smoking === "Suspendido"}
                  onChange={(e) => setSmoking(e.target.value)}
                  name="smoking"
                  className="mr-2"
                />
                Suspendido
              </Label>
            </div>

            <div className="mb-4">
              <h3>Diabetes:</h3>
              {["Tipo 1", "Tipo 2", "Gestacional", "Sin evidencia"].map(
                (type, index) => (
                  <Label key={index} className="block mb-2">
                    <Checkbox
                      value={type}
                      checked={diabetes.includes(type)}
                      onChange={handleDiabetesChange}
                      name="diabetes"
                      className="mr-2"
                    />
                    {type}
                  </Label>
                )
              )}
            </div>

            <div className="mb-4">
              <h3>Contacto Social:</h3>
              {[
                "Mucho (100 - 80)",
                "Medio (79 - 50)",
                "Poco (49 - 30)",
                "Muy poco (29 - 1)",
                "Nada (0)",
              ].map((contact, index) => (
                <Label key={index} className="block mb-2">
                  <Radio
                    value={contact}
                    checked={socialContact === contact}
                    onChange={(e) => setSocialContact(e.target.value)}
                    name="socialContact"
                    className="mr-2"
                  />
                  {contact}
                </Label>
              ))}
            </div>

            <div className="mb-4">
              <h3>Contaminación de aire:</h3>
              <input
                type="text"
                placeholder="Dirección"
                className="mb-2 border border-gray-300 p-2 w-full"
              />
              <p>Calidad de aire: xxxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Evaluation() {
  const [ageGroup, setAgeGroup] = useState("");
  const [educationLevel, setEducationLevel] = useState("");

  const handleAgeChange = (event) => {
    setAgeGroup(event.target.value);
  };

  const handleEducationChange = (event) => {
    setEducationLevel(event.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Evaluation</h2>
      <div>
        <h3>Edad:</h3>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="Primera infancia (0-5 años)"
                checked={ageGroup === "Primera infancia (0-5 años)"}
                onChange={handleAgeChange}
              />
              Primera infancia (0-5 años)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Infancia (6 - 11 años)"
                checked={ageGroup === "Infancia (6 - 11 años)"}
                onChange={handleAgeChange}
              />
              Infancia (6 - 11 años)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Adolescencia (12-18 años)"
                checked={ageGroup === "Adolescencia (12-18 años)"}
                onChange={handleAgeChange}
              />
              Adolescencia (12-18 años)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Juventud (14 - 26 años)"
                checked={ageGroup === "Juventud (14 - 26 años)"}
                onChange={handleAgeChange}
              />
              Juventud (14 - 26 años)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Adultez (27 - 59 años)"
                checked={ageGroup === "Adultez (27 - 59 años)"}
                onChange={handleAgeChange}
              />
              Adultez (27 - 59 años)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Vejez (60 años y más)"
                checked={ageGroup === "Vejez (60 años y más)"}
                onChange={handleAgeChange}
              />
              Vejez (60 años y más)
            </label>
          </li>
        </ul>
      </div>

      <div>
        <h3>Nivel de educacion:</h3>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="Primaria"
                checked={educationLevel === "Primaria"}
                onChange={handleEducationChange}
              />
              Primaria
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Primaria trunca"
                checked={educationLevel === "Primaria trunca"}
                onChange={handleEducationChange}
              />
              Primaria trunca
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Secundaria"
                checked={educationLevel === "Secundaria"}
                onChange={handleEducationChange}
              />
              Secundaria
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Secundaria trunca"
                checked={educationLevel === "Secundaria trunca"}
                onChange={handleEducationChange}
              />
              Secundaria trunca
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Preparatoria"
                checked={educationLevel === "Preparatoria"}
                onChange={handleEducationChange}
              />
              Preparatoria
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Preparatoria trunca"
                checked={educationLevel === "Preparatoria trunca"}
                onChange={handleEducationChange}
              />
              Preparatoria trunca
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Universidad"
                checked={educationLevel === "Universidad"}
                onChange={handleEducationChange}
              />
              Universidad
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Universidad trunca"
                checked={educationLevel === "Universidad trunca"}
                onChange={handleEducationChange}
              />
              Universidad trunca
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Maestría"
                checked={educationLevel === "Maestría"}
                onChange={handleEducationChange}
              />
              Maestría
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Doctorado"
                checked={educationLevel === "Doctorado"}
                onChange={handleEducationChange}
              />
              Doctorado
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="Posdoctorado"
                checked={educationLevel === "Posdoctorado"}
                onChange={handleEducationChange}
              />
              Posdoctorado
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

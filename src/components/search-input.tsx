// components/PatientSearch.js
import { useState } from "react";

export default function PatientSearch({ onSelectPatient }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [closestMatch, setClosestMatch] = useState("");

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setResults([]);
      setClosestMatch("");
      return;
    }

    try {
      const res = await fetch(`/api/patients/search?query=${value}`);
      const data = await res.json();
      setResults(data.patients);
      setClosestMatch(data.patients.length > 0 ? data.patients[0].name : "");
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSelect = (patient) => {
    onSelectPatient(patient);
    setQuery(patient.name);
    setResults([]);

    console.log(results);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await fetch(`/api/patients/search?query=${query}`);
      const data = await res.json();
      setResults(data.patients);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div style={{marginTop:'15px'}}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for patients"
        />
        <button style={{marginLeft:"20px"}} type="submit">Search</button>
      </form>
      {closestMatch && <div>Closest Match: {closestMatch}</div>}
      <ul>
        {results.map((patient) => (
          <li
            key={patient._id}
            onClick={() => handleSelect(patient)}
            style={{ cursor: "pointer", color: "blue" }} // added styles for indication
          >
            {patient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

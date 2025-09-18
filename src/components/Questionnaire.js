import React, { useState } from "react";
import questions from "../data/questions";

export default function Questionnaire() {
  const [responses, setResponses] = useState({});

  const handleChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id, value) => {
    setResponses((prev) => {
      const current = prev[id] || [];
      return {
        ...prev,
        [id]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const handleFileChange = (id, files) => {
    setResponses((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), ...files],
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📋 Final responses:", responses);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "25px" }}>
          <label><strong>{q.id}. {q.text}</strong></label><br />

          {q.type === "text" && (
            <input type="text" onChange={(e) => handleChange(q.id, e.target.value)} />
          )}

          {q.type === "date" && (
            <input type="date" onChange={(e) => handleChange(q.id, e.target.value)} />
          )}

          {q.type === "textarea" && (
            <textarea rows="4" cols="50" onChange={(e) => handleChange(q.id, e.target.value)} />
          )}

          {q.type === "radio" && q.options?.map((opt) => (
            <div key={opt}>
              <input type="radio" name={`q${q.id}`} value={opt} onChange={() => handleChange(q.id, opt)} />
              <label>{opt}</label>
            </div>
          ))}

          {q.type === "checkbox" && q.options?.map((opt) => (
            <div key={opt}>
              <input type="checkbox" onChange={() => handleCheckboxChange(q.id, opt)} />
              <label>{opt}</label>
            </div>
          ))}

          {q.other && (
            <input type="text" placeholder="Other..." onChange={(e) => handleChange(`${q.id}_other`, e.target.value)} />
          )}

        {q.type === "image" && (
        <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(q.id, Array.from(e.target.files))}
        />
        )}
        {responses[q.id]?.length > 0 &&
            <ul>
                {responses[q.id].map((file, index) => (
                <li key={index}>{file.name}</li>
                ))}
            </ul>
        }


        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

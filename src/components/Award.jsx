// src/Components/Award.jsx
import React from 'react';

function Award({ name, issuer, issueDate, description, informationURL }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-md">{issuer}</p>
      <p className="text-sm text-gray-600">Issued: {issueDate}</p>
      <p className="text-sm">{description}</p>
      {informationURL && (
        <a href={informationURL} className="text-blue-500" target="_blank" rel="noopener noreferrer">
          More Information
        </a>
      )}
    </div>
  );
}

export default Award;
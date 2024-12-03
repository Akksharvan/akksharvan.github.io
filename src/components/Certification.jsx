import React from 'react';

function Certification({ name, issuer, issueDate, expirationDate, credentialID, credentialURL }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-md">{issuer}</p>
      <p className="text-sm text-gray-600">
        Issued: {issueDate} {expirationDate && `| Expires: ${expirationDate}`}
      </p>
      {credentialID && <p className="text-sm">Credential ID: {credentialID}</p>}
      {credentialURL && (
        <a href={credentialURL} className="text-blue-500" target="_blank" rel="noopener noreferrer">
          View Credential
        </a>
      )}
    </div>
  );
}

export default Certification;
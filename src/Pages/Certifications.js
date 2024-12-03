import Certification from '../Components/Certification';
import unsortedCertifications from '../Data/certifications.json';

const certifications = unsortedCertifications.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));

function Certifications() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-primary">Certifications</h2>
      <div className="mt-6">
        {certifications.map((cert, index) => (
          <Certification
            key={index}
            name={cert.name}
            issuer={cert.issuer}
            issueDate={cert.issueDate}
            expirationDate={cert.expirationDate}
            credentialID={cert.credentialID}
            credentialURL={cert.credentialURL}
          />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
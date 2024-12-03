import Award from '../Components/Award';
import unsortedAwards from '../Data/awards.json';

const awards = unsortedAwards.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));

function Awards() {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-primary">Awards & Honors</h2>
      <div className="mt-6">
        {awards.map((award, index) => (
          <Award
            key={index}
            name={award.name}
            issuer={award.issuer}
            issueDate={award.issueDate}
            description={award.description}
            informationURL={award.informationURL}
          />
        ))}
      </div>
    </section>
  );
}

export default Awards;
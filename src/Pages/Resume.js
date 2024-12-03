import resume from '../Data/resume.pdf';

function Resume() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-primary">Resume</h2>
      <a href={resume} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        View Resume (PDF)
      </a>
    </section>
  );
}

export default Resume;
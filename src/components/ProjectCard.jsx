export default function ProjectCard({ project }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="mb-3">
          <h4 className="card-title text-primary mb-2">{project.name}</h4>
          <h6 className="text-muted mb-0">
            <i className="bi bi-person-circle me-1"></i>
            By {project.author}
          </h6>
        </div>

        <p className="card-text flex-grow-1">{project.description}</p>

        <div className="mt-auto">
          <div className="border-top pt-3">
            <h6 className="text-dark mb-2">
              <i className="bi bi-code-slash me-1"></i>
              Technologies Used:
            </h6>
            <div className="d-flex flex-wrap gap-1">
              {project.languages && project.languages.map((lang, i) => (
                <span key={i} className="badge bg-primary">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

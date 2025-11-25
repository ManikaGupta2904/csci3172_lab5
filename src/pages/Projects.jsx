import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError("Cannot load projects. Check if server is running.");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <h1>My Projects</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <h1>My Projects</h1>
        <div className="alert alert-danger">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>My Projects</h1>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div>
          {projects.map((project, index) => (
            <div key={index} className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h3>{project.name}</h3>
                <small>by {project.author}</small>
              </div>
              <div className="card-body">
                <p>{project.description}</p>
                <div className="mb-3">
                  <strong>Technologies:</strong>
                  {project.languages?.map((tech, i) => (
                    <span key={i} className="badge bg-secondary ms-1">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

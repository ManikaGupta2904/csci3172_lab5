import { useState } from "react";

const skills = [
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "SQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" }
];

export default function SkillsFilter() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills = skills.filter((skill) =>
    (selectedCategory === "All" || skill.category === selectedCategory)
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">My Skills</h2>

      <div className="text-center mb-4">
        <h5 className="mb-3">Filter by Category:</h5>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn me-2 mb-2 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="text-center mb-3">
        <small className="text-muted">
          Showing {filteredSkills.length} of {skills.length} skills
        </small>
      </div>

      {filteredSkills.length > 0 ? (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-group">
              {filteredSkills.map((skill, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="fw-medium">{skill.name}</span>
                  <span className="badge bg-secondary rounded-pill">{skill.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center py-5">
          <h5 className="text-muted">No skills found</h5>
          <p className="text-muted">Try adjusting your filter criteria</p>
        </div>
      )}
    </div>
  );
}

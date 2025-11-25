import React from "react";
import canCwicImg from "../assets/manika-can-cwic.jpeg";

export default function Projects() {
  return (
    <div className="mt-4 container">
      <h1 className="mb-4">Work Experience</h1>

      <div className="text-center mb-4">
        <img
          src={canCwicImg}
          alt="A participant standing beside a CAN-CWiC conference banner."
          className="img-fluid rounded shadow"
          style={{ maxWidth: "500px" }}
        />
      </div>

      
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3>Junior Technology Consultant</h3>
          <h5 className="text-muted">Content Bloom | Jan 2024 – Present</h5>
          <ul className="mt-3">
            <li>Worked with a team to deliver digital solutions for clients using modern web technologies.</li>
            <li>Performed UAT testing, troubleshooting, and workflow optimization.</li>
            <li>Assisted in content migration, preparing technical documentation, and providing client support.</li>
            <li>Collaborated with developers and designers to enhance user experience.</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3>Student House Manager</h3>
          <h5 className="text-muted">Dalhousie University | 2023 – Present</h5>
          <ul className="mt-3">
            <li>Oversaw residence operations and supported student well-being.</li>
            <li>Managed conflict resolution, safety protocols, and building responsibilities.</li>
            <li>Planned and coordinated events for students.</li>
          </ul>
        </div>
      </div>

     
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3>Vice President External</h3>
          <h5 className="text-muted">Dalhousie Women in Tech Society | 2024</h5>
          <ul className="mt-3">
            <li>Built industry connections and helped organize events for women in tech.</li>
            <li>Assisted in community outreach, sponsorship, and networking activities.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

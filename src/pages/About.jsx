import React from "react";
import canCwicImg from "../assets/manika-can-cwic.jpeg";

export default function Projects() {
  return (
    <div className="mt-4">
      <h1>Work Experience</h1>

      <img
        src={canCwicImg}
        alt="A participant standing beside a CAN-CWiC conference banner."
        
      />

      <div>
        <h3>Junior Technology Consultant</h3>
        <h5 className="text-muted">Content Bloom | Jan 2024 – Present</h5>
        <p >
          • Worked with a team to deliver digital solutions for clients using modern web technologies. <br />
          • Performed UAT testing, troubleshooting, and workflow optimization. <br />
          • Assisted in content migration, preparing technical documentation, and providing client support. <br />
          • Collaborated with developers and designers to enhance user experience.
        </p>
      </div>

      <div >
        <h3>Student House Manager</h3>
        <h5 className="text-muted">Dalhousie University | 2023 – Present</h5>
        <p className>
          • Oversaw residence operations and supported student well-being. <br />
          • Managed conflict resolution, safety protocols, and building responsibilities. <br />
          • Planned and coordinated events for students.
        </p>
      </div>

      <div >
        <h3>Vice President External</h3>
        <h5 className="text-muted">Dalhousie Women in Tech Society | 2024</h5>
        <p >
          • Built industry connections and helped organize events for women in tech. <br />
          • Assisted in community outreach, sponsorship, and networking activities.
        </p>
      </div>

      

      
    </div>
  );
}

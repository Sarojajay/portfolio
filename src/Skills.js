import React from "react";
import { Code2, Layout, Database, Server } from "lucide-react"; // icons
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <h2 className="section-title text-center mb-5 text-light fw-bold">
          Professional Skills
        </h2>
        <div className="row g-4">
          
          {/* .NET Stack */}
          <div className="col-md-6">
            <div className="card skill-card">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <Code2 size={28} className="text-primary me-2" />
                  <h4 className="text-primary fw-bold mb-0">.NET Stack</h4>
                </div>
                <span className="text-light small mb-2">1 year experience</span>

                <div className="progress mb-3" style={{ height: "8px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "75%" }}></div>
                </div>

                <p className="text-light small">
                  Experienced in ASP.NET, C#, and .NET Core 8/9 for building scalable, secure, and maintainable applications.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <span className="badge bg-primary text-dark px-3 py-2">ASP.NET</span>
                  <span className="badge bg-primary text-dark px-3 py-2">C#</span>
                  <span className="badge bg-primary text-dark px-3 py-2">.NET Core 8/9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="col-md-6">
            <div className="card skill-card">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <Layout size={28} className="text-success me-2" />
                  <h4 className="text-success fw-bold mb-0">Frontend Development</h4>
                </div>
                <span className="text-light small mb-2">6 months experience</span>

                <div className="progress mb-3" style={{ height: "8px" }}>
                  <div className="progress-bar bg-success" style={{ width: "65%" }}></div>
                </div>

                <p className="text-light small">
                  Built interactive UIs with React, along with solid knowledge of HTML5 and CSS.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <span className="badge bg-success text-dark px-3 py-2">React</span>
                  <span className="badge bg-success text-dark px-3 py-2">HTML5</span>
                  <span className="badge bg-success text-dark px-3 py-2">CSS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="col-md-6">
            <div className="card skill-card">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <Database size={28} className="text-info me-2" />
                  <h4 className="text-info fw-bold mb-0">Database</h4>
                </div>
                <span className="text-light small mb-2">1 year experience</span>

                <div className="progress mb-3" style={{ height: "8px" }}>
                  <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                </div>

                <p className="text-light small">
                  Worked extensively with SQL Server: queries, stored procedures, indexing, and performance tuning.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <span className="badge bg-info text-dark px-3 py-2">SQL Server</span>
                </div>
              </div>
            </div>
          </div>

          {/* API Development */}
          <div className="col-md-6">
            <div className="card skill-card">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <Server size={28} className="text-purple me-2" />
                  <h4 className="text-purple fw-bold mb-0">API Development</h4>
                </div>
                <span className="text-light small mb-2">6 months experience</span>

                <div className="progress mb-3" style={{ height: "8px" }}>
                  <div className="progress-bar bg-purple" style={{ width: "55%" }}></div>
                </div>

                <p className="text-light small">
                  Created REST APIs with secure endpoints. Hands-on experience in Postman and Swagger.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <span className="badge bg-purple text-dark px-3 py-2">REST API</span>
                  <span className="badge bg-purple text-dark px-3 py-2">Postman</span>
                  <span className="badge bg-purple text-dark px-3 py-2">Swagger</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Projects.js (without react-icons)
import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="section-title text-center mb-5 text-light fw-bold">
          Projects
        </h2>
        <div className="row g-4">

          {/* Project 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card project-card h-100 shadow-card">
              <div className="icon-wrapper mb-3">💻</div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-warning">Portfolio Website</h5>
                <p className="card-text flex-grow-1 text-light">
                  Personal portfolio made using React and Bootstrap with dynamic sections and responsive design.
                </p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  <span className="badge bg-warning text-dark px-3 py-2">React</span>
                  <span className="badge bg-warning text-dark px-3 py-2">Bootstrap</span>
                  <span className="badge bg-warning text-dark px-3 py-2">CSS</span>
                </div>
                <a href="#" className="btn btn-warning mt-auto">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card project-card h-100 shadow-card">
              <div className="icon-wrapper mb-3">🗄️</div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger">API Development</h5>
                <p className="card-text flex-grow-1 text-light">
                  Built scalable APIs using .NET Core and SQL Server, with Postman testing and Swagger documentation.
                </p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  <span className="badge bg-danger text-dark px-3 py-2">.NET Core</span>
                  <span className="badge bg-danger text-dark px-3 py-2">SQL Server</span>
                  <span className="badge bg-danger text-dark px-3 py-2">Swagger</span>
                </div>
                <a href="#" className="btn btn-danger mt-auto">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card project-card h-100 shadow-card">
              <div className="icon-wrapper mb-3">💬</div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-warning">Realtime Chat App</h5>
                <p className="card-text flex-grow-1 text-light">
                  Developed a live chat app with real-time messaging using Websocket and .Net.
                </p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  <span className="badge bg-warning text-dark px-3 py-2">React</span>
                  <span className="badge bg-warning text-dark px-3 py-2">Web Socket</span>
                  <span className="badge bg-warning text-dark px-3 py-2">CSS</span>
                </div>
                <a href="#" className="btn btn-warning mt-auto">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card project-card h-100 shadow-card">
              <div className="icon-wrapper mb-3">🎮</div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-info">Aviator Game Demo</h5>
                <p className="card-text flex-grow-1 text-light">
                  Web-based Aviator game simulation with interactive UI and scoring system.
                </p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  <span className="badge bg-info text-dark px-3 py-2">JavaScript</span>
                  <span className="badge bg-info text-dark px-3 py-2">HTML5</span>
                  <span className="badge bg-info text-dark px-3 py-2">CSS</span>
                </div>
                <a href="#" className="btn btn-info mt-auto">View Project</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import projects from "../data/projects";

function Projects() {
  return (
    <section id="proyectos" className="py-5">

      <div className="container">

        <h2 className="section-title">
          Proyectos Destacados
        </h2>

        <div className="row g-4">

          {projects.map((project) => (

            <div
              key={project.id}
              className="col-lg-4 col-md-6"
            >

              <div className="card-custom">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <div className="p-4">

                  <span className="badge bg-success mb-3">
                    {project.tech}
                  </span>

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <button
                    className="btn btn-custom"
                  >
                    Ver Proyecto
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;

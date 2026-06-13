function Technologies() {
  const techs = [
    {
      icon: "bi-filetype-html",
      name: "HTML5",
    },
    {
      icon: "bi-filetype-css",
      name: "CSS3",
    },
    {
      icon: "bi-filetype-js",
      name: "JavaScript",
    },
    {
      icon: "bi-bootstrap",
      name: "Bootstrap",
    },
    {
      icon: "bi-code-slash",
      name: "React",
    },
    {
      icon: "bi-git",
      name: "Git",
    },
  ];

  return (
    <section
      id="tecnologias"
      className="py-5"
    >
      <div className="container">

        <h2 className="section-title">
          Tecnologías
        </h2>

        <div className="row g-4">

          {techs.map((tech, index) => (
            <div
              className="col-md-4"
              key={index}
            >
              <div className="tech-card">

                <i
                  className={`bi ${tech.icon}`}
                ></i>

                <h5>{tech.name}</h5>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Technologies;
import React from "react"

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        className="object-cover object-center w-full h-56"
        src={project.image}
        alt="project"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  )
}

const Projects = () => {
  const projectsSection = [
    {
      title: "프로젝트 이름",
      description: "프로젝트 설명",
      image: "프로젝트 이미지",
    },
  ]
  return (
    <section id="projects" className="py-12 bg-amber-500">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center text-white">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {projectsSection.map((project, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 md:w-1/3 px-4 mb-8 transform transition duration-500 ${
                index % 2 === 0 ? "translate-y-0" : "translate-y-10"
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

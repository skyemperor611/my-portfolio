import React from "react"
import htmlIcon from "../../assets/images/skills/HTML5_Badge_512.png"
import reactIcon from "../../assets/images/skills/React_Logo.png"
import springIcon from "../../assets/images/skills/Spring_Logo.png"
import mysql from "../../assets/images/skills/MySql_Logo.png"

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: htmlIcon },
    { name: "React", icon: reactIcon },
  ]
  const backendSkills = [{ name: "SPRING", icon: springIcon }]
  const dbSkills = [{ name: "mysql", icon: mysql }]

  return (
    <section id="skills" className="p-10 bg-yellow-300">
      <div className="container mx-auto">
        <h2 className="mb-6 text-4xl font-bold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-20">
          <div className="w-full mb-8 md:w-auto">
            <h3 className="mb-4 text-3xl font-bold text-center">Frontend</h3>
            <div className="flex justify-center gap-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16"
                  />
                  <span className="mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mb-8 md:w-auto">
            <h3 className="mb-4 text-3xl font-bold text-center">Backend</h3>
            <div className="flex justify-center gap-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16"
                  />
                  <span className="mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mb-8 md:w-auto">
            <h3 className="mb-4 text-3xl font-bold text-center">Database</h3>
            <div className="flex justify-center gap-4">
              {dbSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16"
                  />
                  <span className="mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

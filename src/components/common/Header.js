import React from "react"
import { Link } from "react-scroll"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <h1 className="text-xl font-bold">노라에몽</h1>
        <nav>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="px-4 hover:underline"
          >
            About Me
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="px-4 hover:underline"
          >
            Skills
          </Link>
          <Link
            to="archiving"
            smooth={true}
            duration={500}
            className="px-4 hover:underline"
          >
            Archiving
          </Link>
          <Link
            to="career"
            smooth={true}
            duration={500}
            className="px-4 hover:underline"
          >
            Career
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-4 hover:underline"
          >
            Projects
          </Link>

          {/* More navigation links if necessary */}
        </nav>
      </div>
    </header>
  )
}

export default Header

import React from "react"

const Archiving = () => {
  const handleCardClick = (url) => {
    window.location.href = url
  }

  return (
    <section id="archiving" className="section-class">
      <div className="py-12 text-white bg-black">
        <div className="mb-10 text-4xl text-center">ARCHIVING</div>
        <div className="flex justify-center gap-10">
          <div
            className="h-64 p-4 text-black transition duration-500 transform bg-white cursor-pointer w-80 hover:translate-y-2"
            onClick={() => handleCardClick("https://github.com/skyemperor611")}
          >
            <h3 className="text-2xl font-bold">GitHub</h3>
            <p>https://github.com/skyemperor611</p>
            <ul>
              <li>개인 프로젝트 연습 코드</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Archiving

import React from "react"
import { Link } from "react-scroll"
import backgroundImage from "../../assets/images/developer-office-background.png"

const About = () => {
  return (
    <section
      id="about"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="text-white bg-center bg-no-repeat bg-cover"
    >
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 py-8 mx-auto">
        <p className="my-6 text-3xl text-center">웹 개발자 포트폴리오</p>
        <hr className="w-1/6 border-black my-w" />
        <p className="mb-4 text-xl text-center">
          안녕하세요.
          <br />
          자기 계발이 취미인 웹 개발자 입니다.
          <br />
          끊임없이 배우고 성장하는 삶이 제 장점입니다..
          <br />
        </p>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="px-4 py-2 mt-6 font-bold text-white bg-orange-500 rounded cursor-pointer"
        >
          더 알아보기
        </Link>
      </div>
    </section>
  )
}

export default About

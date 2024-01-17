import React, { useEffect, useRef, useState } from "react"

const Career = () => {
  const cardContents = [
    { title: "Project1", description: "project1 description" },
    {
      title: "Project2",
      description: "project2 description",
    },
  ]

  const [visibleCards, setVisibleCards] = useState([])
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target)
          if (entry.isIntersecting) {
            setVisibleCards((prevVisibleCards) => [...prevVisibleCards, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => ref && observer.observe(ref))

    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  const createCard = (content, index) => (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      key={index}
      className={`transition-opacity duration-500 ${
        visibleCards.includes(index) ? "opacity-100" : "opacity-0"
      }`}
    >
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  )

  return (
    <section id="career" className="py-12 text-white bg-orange-500">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cardContents.map((content, index) => createCard(content, index))}
        </div>
      </div>
    </section>
  )
}
export default Career

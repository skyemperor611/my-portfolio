import React, { useEffect, useRef, useState } from "react"

const Career = () => {
  const cardContents = [
    { title: "Project1", description: "project1 description" },
    {
      title: "Project2",
      description: "project2 description",
    },
  ]

  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    const currentCardRefs = cardRefs.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = currentCardRefs.current.indexOf(entry.target)
          if (entry.isIntersecting) {
            setVisibleCards((prevVisibleCards) =>
              new Set(prevVisibleCards).add(index)
            )
          } else {
            setVisibleCards((prevVisibleCards) => {
              const newVisibleCards = new Set(prevVisibleCards)
              newVisibleCards.delete(index)
              return newVisibleCards
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    currentCardRefs.current.forEach((ref) => ref && observer.observe(ref))

    return () => {
      currentCardRefs.current.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  const createCard = (content, index) => (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      key={index}
      className={`transition-opacity duration-500  transform ${
        visibleCards.has(index) ? "opacity-100" : "opacity-0"
      } ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
    >
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  )

  return (
    <section id="career" className="py-12 text-white bg-orange-500">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-8">
          {cardContents.map((content, index) => createCard(content, index))}
        </div>
      </div>
    </section>
  )
}
export default Career

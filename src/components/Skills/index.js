import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoSkill from '../../assets/images/skills-re.png'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={10}
            />
          </h1>
          <p>
            As a Full Stack Engineer, I focus on building dynamic and scalable
            web applications by leveraging modern frontend technologies like
            React, Angular and jQuery. I craft responsive user interfaces with a
            strong emphasis on performance and user experience. On the backend,
            I develop secure and efficient RESTful APIs using C# and .NET,
            ensuring seamless communication between client and server.
          </p>
          <p align="LEFT">
            I utilize Swagger for API documentation and Postman for testing and
            debugging backend services. For data storage, I work with Azure SQL
            Server, enabling reliable and cloud-integrated database solutions.
          </p>
          <p>
            My applications are deployed using Microsoft Azure, where I leverage
            various cloud services for scalability, monitoring, and continuous
            delivery.
            <br />
            Checkout my CV on this
            <a
              href="./JAYANTH%20RAVEENDRA_RESUME_UPDATED.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;link
            </a>
            .
          </p>
        </div>
      </div>
      <div className="skill-wrapper">
        <img className="skill-logo" src={LogoSkill} alt="S" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills

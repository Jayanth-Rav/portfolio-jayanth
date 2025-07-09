// src/components/Exp/index.js
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoExp from '../../assets/images/work-re.png'
import './index.scss'

const Exp = () => {
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
          {/* Animated title */}
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>

          {/* Work Experience Section */}
          <section className="experience-zone">
            <div className="experience-item">
              <div className="experience-header">
                <h3>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={[
                      'Y',
                      'U',
                      'C',
                      'C',
                      'A',
                      ' ',
                      'I',
                      'T',
                      ' ',
                      'S',
                      'O',
                      'L',
                      'U',
                      'T',
                      'I',
                      'O',
                      'N',
                      'S',
                    ]}
                    idx={30}
                  />
                </h3>
                <span className="experience-dates">June 2024 to Present</span>
              </div>
              <h4>Software Engineer</h4>
              <ul>
                <li>
                  Developed and integrated robust RESTful APIs using
                  ASP.NET Core / .NET Framework.
                </li>
                <li>
                  Optimized database performance by identifying and resolving
                  critical query bottlenecks, reducing execution times
                  significantly through strategic indexing, query refactoring,
                  and adherence to efficient data retrieval practices.
                </li>
                <li>
                  Collaborated with cross-functional teams (UI/UX designers,
                  business analysts, and testers) to translate requirements into
                  technical specifications and deliver integrated application
                  features.
                </li>
              </ul>
            </div>

            {/* Second entry */}
            <div className="experience-item">
              <div className="experience-header">
                <h3>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={[
                      'W',
                      'Y',
                      'Z',
                      'M',
                      'I',
                      'N',
                      'D',
                      'Z',
                      ' ',
                      'S',
                      'O',
                      'L',
                      'U',
                      'T',
                      'I',
                      'O',
                      'N',
                      'S',
                    ]}
                    idx={30}
                  />
                </h3>
                <span className="experience-dates">
                  August 2023 to October 2023
                </span>
              </div>
              <h4>Software Development Engineer Intern</h4>
              <ul>
                <li>
                  Developed Part Numbering System that generates unique part
                  number based on the attributes selected under each category of
                  the part.
                </li>
                <li>
                  Unique part number along with the description of the part are
                  stored in the database.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="work-wrapper">
        <img className="work-logo" src={LogoExp} alt="S" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Exp

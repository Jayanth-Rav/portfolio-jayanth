import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const projectData = [
  {
    title: 'NAVIGO',
    description:
      'An application that is used by 3 departments of Nestle France – Food, Waters and Purina, for managing the financial records and also perform importation of data and exportation of Excel.',
    tech: [
      'C#',
      'ASP.Net Windows Forms',
      'SSMS',
      'Azure Cloud Services',
      'OpenXML',
      'Closed XML',
    ],
    link: 'https://github.com/Jayanth-Rav/Nestle.fr.Navigo',
  },
  {
    title: 'ATLAS Modernization',
    description:
      'An application to analyze and act upon impending out-of-stock scenarios for Nestle products and make real-time communication available to customers, in a reliable and transparent manner, helping Nestlé France to proactively manage client expectations.',
    tech: [
      'C#',
      'HTML',
      'CSS',
      'JQuery',
      'ASP.Net Core Web MVC',
      'RESTAPI',
      'SSMS',
      'Azure Cloud Services',
      'OpenXML',
      'Closed XML',
    ],
    link: 'https://github.com/Jayanth-Rav/Nestle.fr.Food.ATLAS',
  },
  {
    title: 'FDV Modernization Fiche Promo',
    description:
      'A Nestle France application used by the sales force. The goal of the project is to build a portal for Brand marketing managers to create promotions and share them with the sales team. The sales force then pushes them to Visicom via Fiche Promo.',
    tech: [
      'C#',
      'HTML',
      'CSS',
      'JQuery',
      'ASP.Net Core Web MVC',
      'RESTAPI',
      'SSMS',
      'Azure Cloud Services',
      'OpenXML',
      'Closed XML',
    ],
    link: 'https://github.com/Jayanth-Rav/Nestle.Fr.Food.FDV',
  },
  {
    title: 'Quiz Generator',
    description:
      'Application that generates quiz based on the topic entered or the input of video given using Gemini AI.',
    tech: ['HTML', 'CSS', 'C#', 'JQuery', 'ASP.Net Core Web MVC'],
    link: 'https://github.com/Jayanth-Rav/PES_EdTech_Hackathon',
  },
  {
    title: 'Trasccon Part Numbering System',
    description:
      'Part Numbering System built to generate unique part numbers based on attributes under each category. It stores both the number and the part description in a database.',
    tech: ['HTML', 'CSS', 'C#', 'JQuery', 'ASP.Net Core Web MVC'],
    link: 'https://github.com/Jayanth-Rav/Trasccon_Part_Numbering_System',
  },
]

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="projects-container">
          <div className="projects-header">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
              />
            </h1>
          </div>
          <div className="projects-list">
            {projectData.map((project) => (
              <div key={project.title} className="project-card">
                <div className="card-title">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-title-link"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </div>
                <p className="card-desc">{project.description}</p>
                <div className="tags-list">
                  {project.tech.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Projects
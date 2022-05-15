import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { motion } from 'framer-motion';
import GitS from '../../assets/images/git.png'
import ReactS from '../../assets/images/react.png'
import CppS from '../../assets/images/cpp.png'
import PythonS from '../../assets/images/python.png'
import JavaS from '../../assets/images/javascript.png'
import HtmlS from '../../assets/images/html.png'
import CssS from '../../assets/images/css.png'
import NodeS from '../../assets/images/node.png'
import SolidityS from '../../assets/images/Solidity.png'
import SassS from '../../assets/images/sass.png'

// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's']}
            idx={15}
          />
        </h1>
        <div className="text-zone">
          <div className='zone'>
            <h2 className='head-text'>Technical</h2>
            <div className="app__skills-container">
              <motion.div className='app__skills-list'>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={GitS} alt="Git" />
                  </div>
                  <p className="p-text">Git</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={ReactS} alt="React" />
                  </div>
                  <p className="p-text">React</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={CppS} alt="C++" />
                  </div>
                  <p className="p-text">C++</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={PythonS} alt="Python" />
                  </div>
                  <p className="p-text">Python</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={JavaS} alt="JavaScript" />
                  </div>
                  <p className="p-text">JavaScript</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={HtmlS} alt="HTML5" />
                  </div>
                  <p className="p-text">HTML5</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={CssS} alt="CSS" />
                  </div>
                  <p className="p-text">CSS</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={SassS} alt="Sass" />
                  </div>
                  <p className="p-text">Sass</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={NodeS} alt="Node.js" />
                  </div>
                  <p className="p-text">Node.js</p>
                </motion.div>

                <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
                  <div className="app__flex" style={{ backgroundColor: '#F8F0D2' }}>
                    <img src={SolidityS} alt="Solidity" />
                  </div>
                  <p className="p-text">Solidity</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className='zone2'>
            <div className="app__skills-exp">
              <motion.div className="app__skills-exp-item">
                <div className="app__skills-exp-year">
                  <h2 className="bold-text">Finance</h2>
                </div>
                <motion.div className="app__skills-exp-works">
                  <div className='marg'>
                    <>
                      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work">
                        <ul className="bold-text">
                          <li>
                            Technical Analysis
                          </li>
                          <li>
                            Market Research
                          </li>
                          <li>
                            Record Keeping
                          </li>
                          <li>
                            Stock & Option Trading
                          </li>
                          <li>
                            Crypto: ETH, Altcoins, & Microcaps
                          </li>
                        </ul>
                      </motion.div>
                    </>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div className="app__skills-exp-item">
                <div className="app__skills-exp-year">
                  <h2 className="bold-text">Skills</h2>
                </div>
                <motion.div className="app__skills-exp-works">
                  <div className='marg1'>
                    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work">
                      <ul className="bold-text">
                        <li>
                          Problem Solving
                        </li>
                        <li>
                          Computers Proficiency
                        </li>
                        <li>
                          Rapid Learner
                        </li>
                        <li>
                          Strong Work Ethic
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* <div className="text-zone_2">
          <div className="app__skills-exp">
            <motion.div className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <h2 className="bold-text">Finance</h2>
              </div>
              <motion.div className="app__skills-exp-works">
                <div className='marg'>
                  <>
                    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work">
                      <ul className="bold-text">
                        <li>
                          Technical Analysis
                        </li>
                        <li>
                          Market Research
                        </li>
                        <li>
                          Record Keeping
                        </li>
                        <li>
                          Stock & Option Trading
                        </li>
                        <li>
                          Crypto: ETH, Altcoins, & Microcaps
                        </li>
                      </ul>
                    </motion.div>
                  </>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <h2 className="bold-text">Skills</h2>
              </div>
              <motion.div className="app__skills-exp-works">
                <div className='marg1'>
                  <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work">
                    <ul className="bold-text">
                      <li>
                        Problem Solving
                      </li>
                      <li>
                        Computers Proficiency
                      </li>
                      <li>
                        Rapid Learner
                      </li>
                      <li>
                        Strong Work Ethic
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div> */}
        {/* <div className="text-zone_3">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Skills

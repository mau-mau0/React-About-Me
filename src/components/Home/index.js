import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import { init } from 'ityped'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', ' ', 'K', 'a', 'm', 'a', 'u', ' ', ' ', 'B', 'o', 'w', 'i', 'e']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Comp Sci Undergrad', 'Freelance Web Dev', 'Freelance Smart Contract Dev', 'Content Creator']
    })
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className='home'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <span className={`${letterClass} _12`}>,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'</span>
              <span className={`${letterClass} _14`}>m</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </h1>
            <h2>
              <span style={{ color: '#f37867', fontSize: '1.2em' }} ref={textRef}></span>
              <br />
              With some experience in designing modern websites,
              web services, and online stores. I decided to create an "About Me"
              website to show off my skills. It's easy to use, so you can explore
              my work, projects, and learn all about me in just a few clicks!
            </h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>

          {/* <div className='logopic'>
            <Logo />
          </div> */}

          <div className='about'>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <div className='aboutPs'>
              <p>
                Hi, I’m Kamau, a very ambitious 20-year-old college student who has
                been infatuated with all of tech, finance, and crypto since 2019.
                I have completely immersed myself into the web3 world, learning and absorbing as
                much information as possible. I am a motivated student, eager to
                contribute my technical skills and hard work ethic towards projects
                that increase education and exposure to the crypto space and the finance world.
              </p>
              <p>
                Having extensive experience programming, I decided to start learning Solidity
                to pursue smart contract development in December. Since then, I have by
                no means become an expert, but I have advanced enough to be proud of
                my skills.
              </p>
              <p>
                If I needed to define myself in one sentence it be that would be
                that I want to set a good example for my 3 little brothers, I'm a sports
                fanatic, tech-obsessed, and that I have very high expectations for myself!!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Home

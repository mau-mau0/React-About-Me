import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import MammothS from '../../assets/images/MammothSwap.png'
import OldAboutS from '../../assets/images/old_about_me.PNG'
import BlackjackS from '../../assets/images/simple_blackjack.PNG'
import ReactAboutS from '../../assets/images/react_about_me.png'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            {/* Projects */}
            <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
              >
                <img src={MammothS} alt="Mammoth Swap" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href="https://mau-mau0.github.io/MammothSwap/" target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="https://github.com/mau-mau0/MammothSwap" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>

              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">Mammoth Swap</h4>
                <p className="p-text" style={{ marginTop: 10 }}>Modern DEX, used to swap cryptocurrencies after choosing a trading pair.<br />Currently not working at the moment.</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Blockchain</p>
                </div>
              </div>
            </div>

            <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
              >
                <img src={OldAboutS} alt="Mammoth Swap" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href="https://mau-mau0.github.io/About-Me-Website/" target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="https://github.com/mau-mau0/About-Me-Website" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>

              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">Old About Me</h4>
                <p className="p-text" style={{ marginTop: 10 }}>My previous about me website I built using HTML/CSS/Javascript. This website has very rudimentary features compared to this one.</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Web Dev</p>
                </div>
              </div>
            </div>

            <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
              >
                <img src={BlackjackS} alt="Mammoth Swap" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href="https://mau-mau0.github.io/simple-blackjack-game/" target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="https://github.com/mau-mau0/simple-blackjack-game" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>

              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">Simple Blackjack Game</h4>
                <p className="p-text" style={{ marginTop: 10 }}>A simple game of Blackjack I built when I first began developing. Follows a slightly different set of rules.</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Web Dev</p>
                </div>
              </div>
            </div>

            <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
              >
                <img src={ReactAboutS} alt="Mammoth Swap" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href="https://mau-mau0.github.io/About-Me-Website/" target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="https://github.com/mau-mau0/About-Me-Website" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>

              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">React About Me</h4>
                <p className="p-text" style={{ marginTop: 10 }}>My new about me website I built using React.js. This website has very rudimentary features compared to this one.</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Web Dev</p>
                </div>
              </div>
            </div>

            {/* <div className="app__work-item app__flex">
              <div
                className="app__work-img app__flex"
              >
                <img src={MammothS} alt="Mammoth Swap" />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href="https://mau-mau0.github.io/About-Me-Website/#about" target="_blank" rel="noreferrer">

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href="https://github.com/mau-mau0/About-Me-Website" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>

              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">Old About Me</h4>
                <p className="p-text" style={{ marginTop: 10 }}>My previous about me website I built using HTML/CSS/Javascript. This website has very rudimentary features compared to this one.</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Web Dev</p>
                </div>
              </div>
            </div> */}

          </motion.div>
        </div>
        <div className='chain'>
          <h2 class="head-text">On-Chain Resume: </h2>
          <div className="dropdown">
            <button style={{ fontWeight: 600 }} className="dropbtn">0xd1caA1ff30735568849c1c797425D377Bb7cE8f6</button>
            <div className="dropdown-content">
              <a href="https://etherscan.io/address/0xd1caA1ff30735568849c1c797425D377Bb7cE8f6" target="_blank" rel="noopener noreferrer">Ethereum</a>
              <a href="https://bscscan.com/address/0xd1caa1ff30735568849c1c797425d377bb7ce8f6" target="_blank" rel="noopener noreferrer">Binance</a>
              <a href="https://rinkeby.etherscan.io/address/0xd1caA1ff30735568849c1c797425D377Bb7cE8f6" target="_blank" rel="noopener noreferrer">Rinkeby</a>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Portfolio

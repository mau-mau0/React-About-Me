import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <div className='education'>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                idx={15}
              />
            </h1>
            <div className='job'>
              <h3 style={{ float: 'left' }}>University of Houston</h3>
              <h4 style={{ float: 'right' }}>AUGUST 2020 – JULY 2024</h4>
              <p>B.S. IN COMPUTER SCIENCE</p>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  Relevant Coursework :
                </li>
                <li>
                  Physics I & II;
                </li>
                <li>
                  Calculus I & II;
                </li>
                <li>
                  Python/ C++/ Java
                </li>
              </ul>
              <p>Cumulative GPA: 3.8, Major GPA: 4.0</p>
            </div>
            <hr />
            <div className='job'>
              <h3 style={{ float: 'left' }}>Spring High School</h3>
              <h4 style={{ float: 'right' }}>AUGUST 2016 – JULY 2020</h4>
              <p>PLTW ENGINEERING PROGRAM</p>
              <p>GPA: 4.0</p>
            </div>
          </div>
          <div className='experience'>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                idx={15}
              />
            </h1>
            <div className='job'>
              <h3 style={{ float: 'left' }}>Mau IT Solutions</h3>
              <h4 style={{ float: 'right' }}>FEBURARY 2021 – PRESENT</h4>
              <p>Technical Freelancer</p>
              <ul>
                <li>
                  Freelancer for custom MS Access databases, Spreadsheets, Websites, Graphic Design, NFT
                  smart contracts, &amp; CS/Math Tutoring
                </li>
                <li>
                  Provided services to over 40 clients &amp; counting (businesses, clubs, and personal use)
                </li>
                <li>
                  Created 2 different niche MS Access database templates for sale on Etsy/Reddit with many users
                </li>
                <li>
                  Design smart contracts for NFTs and cryptocurrencies
                </li>
              </ul>
            </div>
            <hr />
            <div className='job'>
              <h3 style={{ float: 'left' }}>eCommerce Small Business Owner</h3>
              <h4 style={{ float: 'right' }}>MARCH 2020 - FEBURARY 2021</h4>
              <p>Mystic Mask</p>
              <ul>
                <li>
                  Freelancer for custom MS Access databases, Spreadsheets, Websites, Graphic Design, NFT
                  smart contracts, &amp; CS/Math Tutoring
                </li>
                <li>
                  Provided services to over 40 clients &amp; counting (businesses, clubs, and personal use)
                </li>
                <li>
                  Created 2 different niche MS Access database templates for sale on Etsy/Reddit with many users
                </li>
                <li>
                  Design smart contracts for NFTs and cryptocurrencies
                </li>
              </ul>
            </div>
            <hr />
            <div className='job'>
              <h3 style={{ float: 'left' }}>Personal Shopper / Delivery Driver</h3>
              <h4 style={{ float: 'right' }}>AUGUST 2020 - PRESENT</h4>
              <p>DoorDash, UberEats, and Instacart</p>
              <ul>
                <li>
                  Receive telephonic orders and communicate directly with customers to assess their needs and ensure an exceptional experience.
                </li>
                <li>
                  Shop for requested items and make product selections based on customers' needs and product specifications.
                </li>
                <li>
                  Deliver products to customers' home or business.
                </li>
                <li>
                  Maintain record of all purchases, sales, and requisitions.
                </li>
              </ul>
            </div>
            <hr />
            <div className='job'>
              <h3 style={{ float: 'left' }}>Restaraunt Team Member</h3>
              <h4 style={{ float: 'right' }}>MARCH 2020 - FEBURARY 2021</h4>
              <p>Mod Pizza</p>
              <ul>
                <li>
                  Provided friendly, diligent, speedy & accurate service to dine-in and take-out customers.
                </li>
                <li>
                  Fostered community relationships by getting to know regular customers and providing memorable customer service.
                </li>
                <li>
                  Accepted payment from customers, and made change as necessary.
                </li>
                <li>
                  Cleaned and organized eating, service, and kitchen areas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Experience

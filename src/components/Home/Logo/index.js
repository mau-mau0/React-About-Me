import { useRef } from 'react'
import LogoS from '../../../assets/images/headshot1.png'
import './index.scss'

const Logo = () => {
  const solidLogoRef = useRef()

  return (
    <div class='circleanime'>
      <div className='svgDraw'>
        <svg viewBox="0 0 500 500">
          <circle class="circle" cx="250" cy="250" r="200" stroke="#f37867" stroke-width="13" fill-opacity="0"></circle>
        </svg>
      </div>
      <div className='svgFill'>
        <svg viewBox="0 0 500 500">
          <circle class="circle" cx="250" cy="250" r="200" stroke="#f37867" stroke-width="1" fill="#f37867" fill-opacity="1"></circle>
        </svg>
      </div>
      <div class='logoimg'>
        <img
          className="solid-logo"
          ref={solidLogoRef}
          src={LogoS}
          alt="JavaScript,  Developer"
        />
      </div>
    </div>
  )
}

export default Logo

import { useRef } from 'react'
import LogoS from '../../../assets/images/headshot1.png'
import './index.scss'

const Logo = () => {
  const solidLogoRef = useRef()

  return (
    <div class='circleanime'>
      <div className='svgC'>
        <svg height="45em" width="40em" viewBox="0 0 1 563">
          <circle class="circle" cx="50%" cy="50%" r="227" stroke="#f37867" stroke-width="13" fill-opacity="0" />
        </svg>
      </div>
      <div class='logo'></div>
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

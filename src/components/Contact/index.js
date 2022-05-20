import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import emailLogo from '../../assets/images/email.png'
import phoneLogo from '../../assets/images/mobile.png'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_v8uv1al',
        'template_xge6tgj',
        form.current,
        'UuX3z3S-mWAnAL7BY')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className='app_footer-cards'>
            <div className='app_footer-card'>
              <img src={emailLogo} alt="email" />
              <a href="mailto:k.maumau11@gmail.com" className='p-text'>k.maumau0@gmail.com</a>
            </div>
            <div className='app_footer-card'>
              <img src={phoneLogo} alt="mobile" />
              <a href="tel: +1 (832) 764-9796" className='p-text'>+1 (832) 764-9796</a>
            </div>
          </div>
          <p>
            If you have a request or question, or simply just want to
            say Hello don't hesitate to contact me using the form below!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Contact

import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LogoT from '../../assets/images/teddy-logo2.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import hanalei from '../../assets/images/hanalei1.jpg'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
        setletterClass('text-animate-hover')
    }, 2600)

    return () => {
        clearTimeout(timer)
    }
  })

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoT} alt='dev' />
          <AnimatedLetters letterClass={letterClass} strArray={'eddy, a'.split('')} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={'Computer Science Undergraduate.'.split()} idx={20} />
          </h1>
          <h2>full-stack developer | programmer | open source contributor | adrdent learner</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <img src={hanalei} alt='hanalei' className='logo-container' />
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home

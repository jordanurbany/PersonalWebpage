import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
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
      <div className='boat home-page'>
        <div className='text-zone'>
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          
          <AnimatedLetters letterClass={letterClass} strArray={' Teddy,'.split('')} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={'Software Engineer'.split()} idx={20} />
          </h1>
          <h2>full-stack developer | programmer | open source contributor | adrdent learner</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <div className='profile'>
          <img src={hanalei} alt="Me" className='my-image' />
        </div>
      </div>
      <Loader type='triangle-skew-spin' />
    </>
  )
}

export default Home

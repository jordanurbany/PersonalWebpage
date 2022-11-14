import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import './index.scss'

const Portfolio = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setletterClass('text-animate-hover')
    }, 3000)

    return () => {
        clearTimeout(timer)
    }
  })

  useEffect(() => {
    getPortfolio();
  }, []);

const getPortfolio = async () => {
  const querySnapshot = await getDocs(collection(db, 'portfolio'));
  setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
}

  const renderPortfolio = (portfolio) => {

    return (
        <div className='images-container'>
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className='image-box' key={idx}>
                            <img 
                                src={port.image}
                                className='portfolio-video'
                                alt='portfolio'
                            />
                            <div className='content'>
                                <h2 className='title'>{port.name}</h2>
                                <h3 className='description'>{port.description}</h3>
                                {/* <h3 className='stack'>{port.stack}</h3> */}
                                {/* <button className='btn' onClick={() => window.open(port.src)}>View Project</button> */}
                                <br></br>
                                <button className='btn' onClick={() => window.open(port.url)}>Source Code</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
  }
  
  return (
    <>
    <div className='container portfolio-page'>
      <h1 className='page-title'>
        <AnimatedLetters 
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
        />
      </h1> 
      <div>
        {renderPortfolio(portfolio)}
      </div> 
    </div>
    <Loader type='pacman'/>
    </>
  
  )
}


export default Portfolio


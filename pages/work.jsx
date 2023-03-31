import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='My photos in Europe' message='This is some of my recent work traveling in Europe.'/>
        <Portfolio />
    </div>
  )
}

export default work

import React from 'react'

import { Menu, Header, About, Projects, Skills, Footer } from '../../components'

function Home() {
  return (
    <div>
      <Menu />
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

export default Home

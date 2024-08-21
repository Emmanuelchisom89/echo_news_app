import React from "react"
import Side from "../sideContent/side/Side"
import Life from "../lifestyle/Life"
import Popular from "../popular/Popular"
import Ppost from "../Ppost/Ppost"
import "./home.scss"

const Home = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            <Popular />
            <Ppost />
            <Life />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default Home
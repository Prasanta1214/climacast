import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'

function Home() {
  return (
    <>
      <div className="containers  w-full bg-dark-subtle overscroll-none pt-10">
        <div className="header d-flex justify-content-center column-gap-5 fs-3 ">
            <Link className="link"to="/">Today</Link>
            <Link className="link" to="/hourly">Hourly</Link>
            <Link className="link" to="/daily">Daily</Link>
        </div>
      </div>
    </>
  )
}

export default Home

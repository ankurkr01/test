import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const navbar = () => {
  return (
   
    <nav className="navbar navbar-light navbar-expand-lg p-4 fixed-top">
      <div className="container nav-mob-0">
        <Link className="navbar-brand " href="#">
          <Image src="/logo.svg" alt="logo" className="Image-fluid logo-dark" width={107}
      height={40} />
           {/* <Image src="Image/logo-light.svg" alt="logo" className="Image-fluid logo-light">  */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Features</Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Pricing</Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Contact</Link>
              </li>
            {/* <li className="nav-item">
              <Link className="nav-link" href="/dashboard">Dashboard</Link>
              </li> */}
          </ul>
          <div className="d-flex align-items-center ms-lg-5 mb-lg-0 mb-4">
            <button type="button" className="btn custom-btn custom-btn-primary   me-4">Login</button>
            <button type="button" className="btn custom-btn custom-btn-info">Signup</button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default navbar
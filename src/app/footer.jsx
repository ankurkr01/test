import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const footer = () => {
  return (
    <>

<footer className="position-relative overflow-hidden bg-white">
    <div className="footer-bg wow slideInUp"></div>
    <div className="container footer-container pt-lg-5">
      <div className="row justify-content-center py-lg-5">
        <div className="col-sm-8 text-center">
          <h1 className="font-fieldwork semi-bold wow fadeInDown">
            Get Started with Kite Today
          </h1>
          <h5 className="font-fieldwork w-75 mx-auto fw-normal lh-1-5  wow fadeInDown">
            Take the first step toward achieving project success by trying Kite for free.
          </h5>

          <h3 className="mt-5 fw-bold">Start your free trial now </h3>
          <div className="d-flex align-items-center mt-4 justify-content-center wow fadeInDown">
            <input type="text" className="form-control header-input" placeholder="Enter your business e-mail"/>
            <button type="button" className="ms-3 btn custom-btn custom-btn-primary  btn-banner wow fadeInDown">Get
              Started</button>
          </div>
        </div>
      </div>
      <div className="row mt-5 py-lg-5">
        <div className="col-sm-6 col-12 col-md-3 col-lg-3 mt-lg-0 mt-4 wow fadeInDown">
          <h4 className="semi-bold text-dark mb-4  wow fadeInDown">Links</h4>
          <ul className="list-unstyled wow fadeInDown">
            <li className="mb-3">
              <Link href="index.html" className="text-decoration-none">Home</Link>
            </li>
            <li className="mb-3">
              <Link href="pricing.html" className="text-decoration-none"> Pricing</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Integration</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Contact Us</Link>
            </li>
          </ul>
          <ul className="list-inline mt-lg-5 mt-4 wow fadeInDown">
            <li className="list-inline-item">
              <Link href="#">
                <Image src="/twitter.svg" alt="twitter" width={31}
      height={31}/>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#">
                <Image src="/fb.svg" alt="fb" width={31}
      height={31}/>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#">
                <Image src="/instagram.svg" alt="instagram" width={31}
      height={31}/>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#">
                <Image src="/linkdein.svg" alt="linkdein" width={31}
      height={31}/>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-12 col-md-3 col-lg-3 mt-lg-0 mt-4 " >
          <h4 className="semi-bold  text-dark mb-4  wow fadeInDown">Features</h4>
          <ul className="list-unstyled wow fadeInDown">
            <li className="mb-3">
              <Link href="#" className="text-decoration-none">Dashboard</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Boards</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Listing</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Doc</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Report</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Chat</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Sprint</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-12 col-md-3 col-lg-3 mt-lg-0 mt-4 ">
          <h4 className="semi-bold  text-dark mb-4  wow fadeInDown">Useful Links</h4>
          <ul className="list-unstyled wow fadeInDown">
            <li className="mb-3">
              <Link href="#" className="text-decoration-none">Terms & Conditions </Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Affiliates </Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Privacy Policy</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Cookie Policy</Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Support</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-12 col-md-3 col-lg-3 mt-lg-0 mt-4 ">
          <h4 className="semi-bold  text-dark mb-4  wow fadeInDown">Help</h4>
          <ul className="list-unstyled wow fadeInDown">
            <li className="mb-3">
              <Link href="#" className="text-decoration-none">Status </Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Email </Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> Privacy Policy </Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="text-decoration-none"> 24/7 Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="row py-4 text-center">
        <div className="col-md-12">
          <h6 className="text-uppercase"> © copyright 2023 Kite. All rights reserved.</h6>
        </div>
      </div>
    </div>
  </footer>

    </>
  )
}

export default footer
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className=" position-relative hero">
      <div className="banner-section overflow-hidden position-relative">
        <div className="banner-bottom-image position-absolute d-block bg-white w-100"></div>
      </div>
      <div className="position-absolute w-100 pt-5 banner-content top-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 text-center">
              <div className="mx-700px mx-auto">
                <h1 className="fw-bolder font-fieldwork text-capitalize wow fadeInDown h1 mb-0">
                  Unleash Your Team's Potential
                </h1>
                <h4 className="font-fieldwork mb-3 wow fadeInDown">
                  Master Your Projects with Our Innovative Project
                  Management Software
                </h4>
                <h3 className="mt-5 fw-bold fs-2">Start your free trial now </h3>
                <div className="d-sm-flex align-items-center mt-3 justify-content-center">
                  <input type="text" className="mb-sm-0 mb-4 form-control header-input  wow fadeInDown"
                    placeholder="Enter your business e-mail"/>
                  <button type="button" className="ms-3 btn custom-btn custom-btn-primary  btn-banner wow fadeInDown">Get
                    Started</button>
                </div>
              </div>
              <div className="banner-img mt-5">
                <Image src="/banner-ss.png" alt="banner" className="img-fluid banner-shadow wow fadeInDown" width={1070}
      height={709} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Hero
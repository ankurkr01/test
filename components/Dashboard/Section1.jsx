import React from 'react'
import Image from 'next/image'

const Section1 = () => {
  return (
    <>

<section className="security hero">
    <div className="container">
      <div className="row py-xl-5 mt-5 pt-5 align-items-center">
        <div className="col-lg-6 py-5">
          <h4 className="wow fadeInDown fs-4 text-dark semi-bold font-fieldwork">
            Stay on top of your projects like never before with
          </h4>
          <h1 className="font-fieldwork fw-bold wow fadeInDown lh-1 py-3 font-fieldwork mb-0">
            <span className="kite-color">Kite's</span>
            <span className="fw-normal">
              Powerful &
            </span>
            Customizable Dashboards
          </h1>
          <h4 className="wow fadeInDown fw-normal lh-base  text-dark">
            Our innovative project management software gives you complete control, providing real-time insights and data
            visualization to drive better decision-making and project success.
          </h4>
          <button type="button" className="mt-4 btn custom-btn custom-btn-primary  btn-theme wow fadeInDown">Get
            Started</button>
        </div>
        <div className="col-lg-6 py-4 text-lg-star text-center text-lg-center mb-lg-0 mb-sm-4 px-0">
          <Image src="/dashboard-bg.png" alt="list-view" className="img-fluid wow fadeInDown" width={607} height={602}/>
        </div>
      </div>
    </div>
  </section>
        
    </>
  )
}

export default Section1
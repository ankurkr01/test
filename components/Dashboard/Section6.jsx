import React from 'react'
import Image from 'next/image'

const Section6 = () => {
  return (
    <>

<section className="Improve-section">
    <div className="container">
      <div className="row py-xl-5 my-5 align-items-center">
        <div className="col-lg-6 py-5 pe-lg-5">
          <div className="Improve pe-lg-5">
            <h3 className="font-fieldwork fw-bold wow fadeInDown fs-1 pt-1 pb-2 text-dark">
              Improve Your Decision-Making
            </h3>
            <h5 className="wow fadeInDown fw-normal text-dark lh-base pe-lg-4">
              Kite's dynamic dashboards enable you to make informed decisions based on real-time data. Quickly identify
              potential roadblocks or bottlenecks, and take action before they impact your project's success. With
              Kite's
              dashboards, you'll be well-equipped to steer your projects toward a successful outcome.
            </h5>
          </div>
        </div>
        <div className="col-lg-6 py-4 text-lg-end text-center mb-lg-0 mb-sm-4">
          <Image src="/line-graf.png" alt="line-graf" className="img-fluid text-center text-lg-start wow fadeInDown" width={590} height={550}/>
        </div>
      </div>
    </div>
  </section>
  <section className="potential-section bg-primary py-5">
    <div className="container py-5">
      <div className="potential-content">
        <h2 className="font-fieldwork semi-bold wow fadeInDown text-center text-white h1 mb-4" style={{'visibility': 'visible'}}>
          Unlock the Full Potential of Kite's Project Management Software
        </h2>
        <div className="col-lg-6 mx-auto text-center">
          <h5 className="text-white text-center fw-normal fs-4 lh-base">
            Experience the power of Kite's dynamic dashboards and other incredible features by starting your free trial
            today
          </h5>
          <button type="button" className="mt-4 btn bg-white btn-theme wow fadeInDown">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
        

    </>
  )
}

export default Section6
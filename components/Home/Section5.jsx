import React from 'react'
import Image from 'next/image'

const Section5 = () => {
  return (
    <>

<section className="security">
    <div className="container">
      <div className="row pt-lg-5 align-items-center">
        <div className="col-lg-4 pt-5">
          <h2 className="font-fieldwork fw-bold wow fadeInDown">
            Security and Scalability
          </h2>
          <p className="wow fadeInDown">
            We understand that data security is paramount. That's why Kite is built on a robust and secure
            infrastructure,
            ensuring your data is always protected. As your team grows, Kite seamlessly scales with you, accommodating
            any
            number of users and projects.
          </p>
          <button type="button" className="mt-4 btn custom-btn custom-btn-primary  btn-theme wow fadeInDown">Get
            Started</button>
        </div>
        <div className="col-lg-8 pt-4 text-md-end mb-lg-0 mb-sm-4">
          <Image src="/security-image.png" alt="list-view" className="img-fluid list-view-img wow fadeInDown" width={790} height={617}/>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Section5
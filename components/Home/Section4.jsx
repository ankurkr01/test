import React from 'react'
import Image from 'next/image'

const Section4 = () => {
  return (
    <>

<section className="software-integration bg-primary pt-sm-5">
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <h2 className="semi-bold font-fieldwork wow fadeInDown text-white">Integrations That Boost Productivity </h2>
          <h5 className="fw-normal lh-1-5 wow fadeInDown text-white">
            Kite seamlessly integrates with popular tools like Slack, Google
            Drive, and Trello, making it easy for your team to continue using their
            favorite apps while benefiting from Kite's powerful project management features.
          </h5>
        </div>
        <div className="col-md-12 text-center py-5 mb-5">
          <Image src="/software-integration.png" alt="integration" className="img-fluid wow fadeInDown" width={919} height={318} />
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Section4
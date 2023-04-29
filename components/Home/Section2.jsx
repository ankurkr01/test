import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (
    <>


<section className="doc-section my-sm-5 bg-primary position-relative">
    <div className="position-relative z-index-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12  col-md-8 text-center">
            <h2 className="font-fieldwork fw-bold wow fadeInDown">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-11 text-center pt-5 px-md-0">
            <Image src="/doc-screen.png" alt="doc" className="img-fluid shadow-custom wow fadeInDown" width={1113}
      height={737} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5 mt-lg-4 justify-content-center">
          <div className="col-md-6 col-lg-4 mb-lg-0 mb-4">
            <div className="border-end border-primary text-white pe-md-5 ps-md-3">
              <h3 className="font-fieldwork fw-bold my-3 text-white wow fadeInDown">
                Time Tracking & <br className="d-md-block d-none"/>
                Reporting
              </h3>
              <p className="wow fadeInDown">Monitor project hours, generate insightful reports, and make data-driven
                decisions to improve your team's performance and productivity.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-lg-0 mb-4">
            <div className="border-end border-primary text-white pe-md-5 ps-md-3">
              <h3 className="font-fieldwork fw-bold my-3 text-white wow fadeInDown">Resource <br
                  className="break-tag"/>Management</h3>
              <p className="wow fadeInDown">Allocate resources effectively and ensure optimal project outcomes. Kite's
                resource management tools help you avoid bottlenecks and maximize your team's potential.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="text-white pe-lg-5 ps-lg-3">
              <h3 className="font-fieldwork fw-bold my-3 text-white wow fadeInDown">Securely share with <br className="d-md-block d-none"/>anyone.</h3>
              <p className=" wow fadeInDown">Easily protect your Docs with privacy
                and edit controls. Create shareable links and manage permissions for team, guest, or public access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        
    </>
  )
}

export default Section2
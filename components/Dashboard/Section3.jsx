import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (
    <>
    <section className="Bird-Eye py-5">
    <div className="container pt-xl-5">
      <div className="row py-xl-5  align-items-center">
        <div className="col-lg-6 py-4 ps-lg-5 order-lg-2">
          <div className="px-lg-5">
            <h5 className="wow fadeInDown fw-bold text-uppercase text-muted-dark letter-space font-fieldwork">
              Project Progress
            </h5>
            <h3 className="font-fieldwork fw-bold wow fadeInDown fs-1 pt-1 pb-2 text-dark">
              Bird's-Eye View
            </h3>
            <h5 className="wow fadeInDown fw-normal text-dark lh-base ">
              Kite's dashboards offer an at-a-glance overview of your project's progress, health, and status. Easily
              monitor tasks, deadlines, and milestones to ensure your team is on track and your project is moving
              forward
              smoothly.
            </h5>
          </div>
        </div>
        <div className="col-lg-6 py-4 text-lg-start text-center order-lg-1">
          <Image src="/circle-graff.png" alt="graf" className="img-fluid wow fadeInDown" width={690} height={545}/>
        </div>
      </div>
    </div>
  </section>
        
    </>
  )
}

export default Section3
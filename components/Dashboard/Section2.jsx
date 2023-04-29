import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (
    <>

<section className="Features">
    <div className="container">
      <h2 className="font-fieldwork fw-bolder wow fadeInDown text-center pt-5 pb-3"
        >
        Key Features of Kite's Dynamic Dashboards
      </h2>
      <div className="row justify-content-center py-4 mt-4">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="card-keyfeatures my-3">
            <Image src="/info-circle.svg" alt="icon" className="wow fadeInDown"  width={32} height={32}/>
            <h3 className="font-fieldwork fw-bolder fs-2 text-dark my-3 wow fadeInDown">
              Customizable Widgets
            </h3>
            <h5 className="wow fadeInDown fw-normal lh-base text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ultrices mi. Curabitur neque
              tortor, blandit
            </h5>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="card-keyfeatures my-3">
            <Image src="/arrows.svg" alt="icon" className="wow fadeInDown"  width={32} height={32}/>
            <h3 className="font-fieldwork fw-bolder fs-2 text-dark my-3 wow fadeInDown">
              Sprint
            </h3>
            <h5 className="wow fadeInDown fw-normal lh-base text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ultrices mi. Curabitur neque
              tortor, blandit
            </h5>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="card-keyfeatures my-3">
            <Image src="/task.svg" alt="icon" className="wow fadeInDown"  width={32} height={32}/>
            <h3 className="font-fieldwork fw-bolder fs-2 text-dark my-3 wow fadeInDown">
              Task
            </h3>
            <h5 className="wow fadeInDown fw-normal lh-base text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ultrices mi. Curabitur neque
              tortor, blandit
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
        
    </>
  )
}

export default Section2
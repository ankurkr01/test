import React from 'react'
import Image from 'next/image'

const Section4 = () => {
  return (
    <>

<section className="Task-priority pb-5 pt-xl-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 py-4  pe-lg-5">
          <div className="taske-content pe-xl-5">
            <h5 className="wow fadeInDown text-uppercase fw-bold text-muted-dark letter-space font-fieldwork">
              Task by priority
            </h5>
            <h3 className="font-fieldwork fw-bold wow fadeInDown fs-1 pt-1 pb-2 text-dark font-fieldwork">
              Lorem ipsum was <br className="d-xl-block d-none"/>purposefully designed to <br className="d-xl-block d-none"/>have no meaning
            </h3>
            <h5 className="wow fadeInDown fw-normal text-dark lh-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ultrices mi. Curabitur neque
              tortor, blandit id tempus vel, condimentum vitae erat. Ut posuere vehicula odio at blandit. Morbi non
              pretium velit. Ut elementum dui
            </h5>
          </div>
        </div>
        <div className="col-lg-6 py-4 text-lg-star text-center mb-lg-0 mb-sm-4">
          <Image src="/bar-graf.png" alt="bar-graf" className="img-fluid text-center text-lg-start wow fadeInDown" width={590} height={550}/>
        </div>
      </div>
    </div>
  </section>
        
    </>
  )
}

export default Section4
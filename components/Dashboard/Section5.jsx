import React from 'react'
import Image from 'next/image'

const Section5 = () => {
  return (
    <>

<section className="Bird-Eye pt-xl-4">
    <div className="container pb-5">
      <div className="row  align-items-center">
        <div className="col-lg-6 py-4 ps-lg-5 order-lg-2 px-lg-5">
          <div className="taske-content pe-xl-5">
            <h5 className="wow fadeInDown fw-bold text-uppercase text-muted-dark letter-space font-fieldwork">
              Task by type
            </h5>
            <h3 className="font-fieldwork fw-bold wow fadeInDown fs-1 pt-1 pb-2 text-dark">
              Lorem ipsum was <br className="d-xl-block d-none"/>purposefully designed to <br className="d-xl-block d-none"/>have no meaning
            </h3>
            <h5 className="wow fadeInDown fw-normal text-dark lh-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ultrices mi. Curabitur neque
              tortor, blandit id tempus vel, condimentum vitae erat. Ut posuere vehicula odio at blandit. Morbi non
              pretium velit. Ut elementum dui
            </h5>
          </div>
        </div>
        <div className="col-lg-6 py-4 text-lg-star text-center order-lg-1">
          <Image src="/chart-left.png" alt="graf" className="img-fluid wow fadeInDown" width={590} height={540}/>
        </div>
      </div>
    </div>
  </section>
  <section className="graphic-print bg-primary py-5 mt-lg-5">
    <div className="container py-lg-3">
      <div className="row justify-content-center py-5">
        <div className="col-12 col-md-12">
          <h2 className="font-fieldwork semi-bold wow fadeInDown text-center text-white h1 font-fieldwork"
            >
            Lorem ipsum is placeholder text commonly used in the graphic, print
          </h2>
        </div>
      </div>
      <div className="customizable-cards pb-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="customizable-card text-center text-sm-start py-3 my-3 pe-lg-5">
              <Image src="/circle-check.svg" className="py-2" alt="icon" width={30} height={43}/>
              <h3 className="fw-bold text-white py-3 mb-0 fs-2 font-fieldwork">
                Customizable Widgets
              </h3>
              <h6 className="text-white fw-normal">
                Tailor your dashboard to your specific needs by choosing from a wide variety of widgets. Display key
                performance indicators (KPIs), project timelines, team workload, and more, all in one place. (Coming
                Soon)
              </h6>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="customizable-card text-center text-sm-start py-3 my-3 pe-lg-5">
              <Image src="/circle-check.svg" className="py-2" alt="icon" width={30} height={43}/>
              <h3 className="fw-bold text-white py-3 mb-0 fs-2 font-fieldwork">
                Interactive Data Visualization
              </h3>
              <h6 className="text-white fw-normal">
                Make sense of complex data with Kite's intuitive and interactive data visualization tools. Gain valuable
                insights into your project performance and identify trends to optimize your team's efforts. (Coming
                Soon)
              </h6>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="customizable-card text-center text-sm-start py-3 my-3 pe-lg-5">
              <Image src="/circle-check.svg" className="py-2" alt="icon" width={30} height={43}/>
              <h3 className="fw-bold text-white py-3 mb-0 fs-2 font-fieldwork">
                Real-Time Updates
              </h3>
              <h6 className="text-white fw-normal">
                Keep everyone on the same page with live updates on your dashboard. As your team makes progress, your
                dashboard instantly reflects the latest information, ensuring you always have an accurate understanding
                of your project status.
              </h6>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="customizable-card text-center text-sm-start py-3 my-3 pe-lg-5">
              <Image src="/circle-check.svg" className="py-2" alt="icon" width={30} height={43}/>
              <h3 className="fw-bold text-white py-3 mb-0 fs-2 font-fieldwork">
                Easy Sharing & Collaboration:
              </h3>
              <h6 className="text-white fw-normal">
                Share your dashboard with team members, stakeholders, or clients to keep everyone informed and aligned.
                Collaborate more effectively with easy access to the same data and insights.(Coming Soon)
              </h6>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="customizable-card text-center text-sm-start py-3 my-3 pe-lg-5">
              <Image src="/circle-check.svg" className="py-2" alt="icon" width={30} height={43}/>
              <h3 className="fw-bold text-white py-3 mb-0 fs-2 font-fieldwork">
                Option 5
              </h3>
              <h6 className="text-white fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ultrices mi. Curabitur neque
                tortor, blandit id tempus vel, condimentum vitae erat. Ut posuere vehicula odio at blandit. Morbi non
                pretium velit.
              </h6>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="customizable-card text-center text-sm-start py-3 my-3 pe-lg-5">
              <Image src="/circle-check.svg" className="py-2" alt="icon" width={30} height={43}/>
              <h3 className="fw-bold text-white py-3 mb-0 fs-2 font-fieldwork">
                Option 6
              </h3>
              <h6 className="text-white fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ultrices mi. Curabitur neque
                tortor, blandit id tempus vel, condimentum vitae erat. Ut posuere vehicula odio at blandit. Morbi non
                pretium velit.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        
    </>
  )
}

export default Section5
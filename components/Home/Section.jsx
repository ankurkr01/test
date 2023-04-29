import React from 'react'
import Image from 'next/image'

const Section = () => {
  return (
    <>
    <section className="awesome-features py-5 position-relative">
    <div className="position-absolute top-0 start-0 w-50 feature-bg d-lg-block d-none">
      <Image src="/side-shape.svg" alt="shape" className="img-fluid" width={24}
      height={24}/>
    </div>

    <div className="container pt-lg-0 pt-5 mt-sm-0 mt-5" id="Simplify">
      <div className="row align-items-center">
        <div className="col-md-12 text-center">
          <h5 className="wow fadeInDown">
            Simplify Your Workflow
          </h5>
          <h2 className="fw-bolder font-fieldwork text-capitalize wow fadeInDown">Features That Empower Your Team</h2>
        </div>
      </div>
      <div className="row my-5 pb-lg-5">
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="features  mx-auto  bg-primary rounded-2 p-4 wow fadeInDown h-100">
            <div className="px-2 pt-3">
              <div className="features-img rounded-circle mb-4 d-flex align-items-center justify-content-center">
                <Image src="/epic.svg" className="img-fluid" alt="epic" width={24}
      height={24}/>
              </div>
              <h4 className="text-white font-fieldwork">Epic</h4>
              <h5 className="text-white fw-normal">
                Create, assign, and prioritize tasks with ease. Kite's flexible and user-friendly interface allows you
                to keep track of progress and stay on top of deadlines. </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="features  mx-auto  bg-primary rounded-2 p-4 wow fadeInDown h-100">
            <div className="px-2 pt-3">
              <div className="features-img rounded-circle mb-4 d-flex align-items-center justify-content-center">
                <Image src="/backlog.svg" className="img-fluid" alt="epic" width={24}
      height={24}/>
              </div>
              <h4 className="text-white font-fieldwork">Backlog</h4>
              <h5 className="text-white fw-normal">Lorem ipsum dolor sit amet, consectetur tior adipiscing elit, sed do
                eiusmod tempor aliqua incididunt ut labore et dolore magna </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="features  mx-auto  bg-primary rounded-2 p-4 wow fadeInDown h-100">
            <div className="px-2 pt-3">
              <div className="features-img rounded-circle mb-4 d-flex align-items-center justify-content-center">
                <Image src="/sprint.svg" className="img-fluid" alt="epic" width={24}
      height={24}/>
              </div>
              <h4 className="text-white font-fieldwork">Sprint</h4>
              <h5 className="text-white fw-normal">Lorem ipsum dolor sit amet, consectetur tior adipiscing elit, sed do
                eiusmod tempor aliqua incididunt ut labore et dolore magna </h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="features  mx-auto  bg-primary rounded-2 p-4 wow fadeInDown h-100">
            <div className="px-2 pt-3">
              <div className="features-img rounded-circle mb-4 d-flex align-items-center justify-content-center">
                <Image src="/report.svg" className="img-fluid" alt="epic" width={24}
      height={24}/>
              </div>
              <h4 className="text-white font-fieldwork">Report</h4>
              <h5 className="text-white fw-normal">Lorem ipsum dolor sit amet, consectetur tior adipiscing elit, sed do
                eiusmod tempor aliqua incididunt ut labore et dolore magna </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-lg-5  align-items-center">
        <div className="col-lg-4  col-md-6 py-4 order-md-2">
          <h3 className="font-fieldwork fw-bold wow fadeInDown">Customizable Dashboards</h3>
          <p className="wow fadeInDown">Get a bird's-eye view of your projects with customizable dashboards that display key
            metrics and insights. Stay informed and make informed decisions with Kite's powerful analytics.
          </p>
          <button type="button" className="mt-4 btn custom-btn custom-btn-primary  btn-theme wow fadeInDown">Get
            Started</button>
        </div>
        <div className="col-lg-8 col-md-6  py-4 order-md-1 mb-lg-0 mb-sm-4">
          <Image src="/dashboard-frame.png" alt="dashboard" className="img-fluid shadow-custom border-grey wow fadeInDown" width={772}
      height={532}/>
        </div>
      </div>
      <div className="row py-lg-5  align-items-center">
        <div className="col-lg-4 col-md-6  py-4">
          <h3 className="font-fieldwork fw-bold wow fadeInDown">Task Management</h3>
          <p className="wow fadeInDown">
            Create, assign, and prioritize tasks with ease. Kite's flexible and user-friendly
            interface allows you to keep track of progress and stay on top of deadlines.
          </p>
          <button type="button" className="mt-4 btn custom-btn custom-btn-primary  btn-theme wow fadeInDown">Get
            Started</button>
        </div>
        <div className="col-lg-8 col-md-6  py-4 text-md-end mb-lg-0 mb-sm-4">
          <Image src="/listview.png" alt="list-view" className="img-fluid list-view-img wow fadeInDown" width={790}
      height={550}/>
        </div>
      </div>
      <div className="row py-lg-5  align-items-center">
        <div className="col-lg-5 col-md-6  py-4 ps-lg-5 order-md-2">
          <h3 className="font-fieldwork fw-bold wow fadeInDown">Collaboration</h3>
          <p className="wow fadeInDown">
            Foster team collaboration with real-time communication, document sharing, and interactive Kanban boards.
            Kite ensures that everyone stays on the same page and works together efficiently.
          </p>
          <button type="button" className="mt-4 btn custom-btn custom-btn-primary  btn-theme wow fadeInDown">Get
            Started</button>
        </div>
        <div className="col-lg-7  col-md-6 py-4 order-md-1">
          <Image src="/board1.png" alt="board" className="img-fluid wow fadeInDown" width={676}
      height={467}/>
        </div>
      </div>
    </div>
  </section>
        
    </>
  )
}

export default Section
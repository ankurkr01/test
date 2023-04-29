import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (
    <>

<section className="chat-section mt-5 pt-sm-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <h2 className="h1 font-fieldwork fw-bold wow fadeInDown">Bring everyone together in Chat</h2>
          <h5 className="fw-normal lh-1-5 wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h5>
          <button type="button" className="mt-3 btn custom-btn custom-btn-primary  btn-theme wow fadeInDown">Get
            Started</button>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <Image src="/chat.png" alt="chat" className="img-fluid wow fadeInDown" width={1195} height={667}/>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Section3
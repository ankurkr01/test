import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Section7 = () => {
  return (
    <>

<section className="bg-primary pt-5 position-relative ">
    <div className="container  my-xl-5">
      <div className="row align-items-center">
        <div className="col-md-12 position-relative">
          <div className="col-lg-5 py-xl-5 text-lg-start text-center mt-5 support-sec">
            <h2 className="text-white semi-bold font-fieldwork wow fadeInDown">We Support All Devices. So use the app
              anywher, anytime</h2>
            <p className="text-white my-4 wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="list-unstyled d-sm-flex justify-content-center justify-content-lg-start my-5 pb-lg-5">
              <li>
                <Link href="#"
                  className="wow fadeInDown btn mb-sm-0 mb-3 btn-light app-store-btn me-1 overflow-hidden cursor-pointer">
                  <Image src="/app-store.svg" alt="app-store" width={146} height={35}/>
                </Link>
              </li>
              <li>
                <Link href="#"
                  className="wow fadeInDown btn mb-sm-0 mb-3 btn-light app-store-btn ms-1 overflow-hidden cursor-pointer">
                  <Image src="/google-pay.svg" alt="google-pay" width={146} height={35}/>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-12 col-lg-7 text-lg-end text-center position-lg-absolute end-0 bottom-0">
            <Image src="/mobile-screen.png" alt="img" className="wow fadeInDown img-fluid" width={763} height={572}/>
          </div>
        </div>
      </div>
    </div>
    <div className="position-absolute bottom-0 start-0">
      <Image src="/bg-image.svg" className="img-fluid" alt="wave" width={1904} height={173}/>
    </div>
  </section>

    </>
  )
}

export default Section7
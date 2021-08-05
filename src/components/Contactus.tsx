import React from "react";

const Contactus = () => {
  return (
    <>
      <section id="CONTACTUS">
        <div className='gap'>
          <div className='container'>
            <div className='sec-title text-center'>
              <div className='sec-title-inner'>
                <span>Get information</span>
                <h3>Contact information</h3>
              </div>
            </div>
            <div className='contact-info-wrap text-center remove-ext3'>
              <div className='row'>
                <div className='col-md-4 col-sm-6 col-lg-4'>
                  <div className='contact-info-box'>
                    <i className='flaticon-location-pin' />
                    <strong>Our Location</strong>
                    <span> +22 33 4455 6677 /  +22 33 4455 6677</span>
                    <a href='#'>ahluquranacademy@gmail.com</a>
                  </div>
                </div>
                <div className='col-md-4 col-sm-6 col-lg-4'>
                  <div className='contact-info-box'>
                    <i className='flaticon-call' />
                    <strong>Contact us Anytime</strong>
                    <span>Mobile: +22 33 4455 6677</span>
                    <span style={{ opacity: '0' }}>Fax: 123 456 789</span>
                  </div>
                </div>
                <div className='col-md-4 col-sm-6 col-lg-4'>
                  <div className='contact-info-box'>
                    <i className='flaticon-email' />
                    <strong>Write Some Words</strong>
                    <a href='#'>ahluquranacademy@gmail.com</a>
                    <a href='#' style={{ opacity: '0' }}>info@example.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className='gap'>
          <div className='container'>
            <div className='sec-title text-center'>
              <div className='sec-title-inner'>
                <span>Have Question</span>
                <h3>Send Message</h3>
              </div>
            </div>
            <div className='contact-form text-center'>
              <form>
                <div className='row mrg20'>
                  <div className='col-md-6 col-sm-6 col-lg-6'>
                    <input type='text' placeholder='Name' />
                  </div>
                  <div className='col-md-6 col-sm-6 col-lg-6'>
                    <input type='text' placeholder='Phone' />
                  </div>
                  <div className='col-md-6 col-sm-6 col-lg-6'>
                    <input type='email' placeholder='Email' />
                  </div>
                  <div className='col-md-6 col-sm-6 col-lg-6'>
                    <input type='text' placeholder='Subject' />
                  </div>
                  <div className='col-md-12 col-sm-12 col-lg-12'>
                    <textarea placeholder='Message' defaultValue={""} />
                    <button className='thm-btn brd-rd40' type='submit'>
                      Contact Us
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Contactus;

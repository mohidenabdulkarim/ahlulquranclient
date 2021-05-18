import React from "react";

const Footer = () => {
  return (
    <>
      <section>
        <div className='gap bottom-spac170 thm-layer opc9'>
          <img
            className='botm-shp shp-img'
            src='assets/images/shp2-6.png'
            alt='shp2-6.png'
          />
          <div
            className='fixed-bg'
            style={{ backgroundImage: "url(assets/images/pattern-bg.jpg)", backgroundSize:'initial' }}
          ></div>
          <div className='container'>
            <div className='nwsltr-wrp text-center'>
              <div className='nwsltr-innr'>
                <div className='nwsltr-title'>
                  {/* <h3>Newsletter</h3>
                  <span>Subscribe to our mailing list</span> */}
                </div>
                <form>
                  {/* <input type='email' placeholder='Enter your email' />
                  <button type='submit'>Sign up</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='gap top-spac30 drk-bg2 remove-bottom'>
          <div className='container'>
            <div className='footer-data'>
              <div className='row'>
                <div className='col-md-4 col-sm-12 col-lg-4'>
                  <div className='wdgt-box'>
                    <div className='logo'>
                      <h1 style={{color:'white'}}>Ahlul Quran</h1>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className='col-md-8 col-sm-12 col-lg-8'>
                  <div className='row'>
                    <div className='col-md-4 col-sm-4 col-lg-4'>
                      <div className='wdgt-box style2'>
                        <h4>Quick Links</h4>
                        <ul>
                          <li>
                            <a href='#' title=''>
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href='#' title=''>
                              Product Category
                            </a>
                          </li>
                          <li>
                            <a href='#' title=''>
                              Our Products
                            </a>
                          </li>
                          <li>
                            <a href='#' title=''>
                              How we do it
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-4 col-lg-4'>
                      <div className='wdgt-box style2'>
                        <h4>Useful Links</h4>
                        <ul>
                          <li>
                            <a href='#' title=''>
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a href='#' title=''>
                              Terms & Conditions
                            </a>
                          </li>
                          <li>
                            <a href='#' title=''>
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href='#' title=''>
                              Cookies Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-4 col-lg-4'>
                      <div className='wdgt-box style2'>
                        <h4>Contact Us</h4>
                        <ul className='cont-lst'>
                          <li>
                            <i className='flaticon-location-pin'></i>Aorem Ipsum
                            labore et dolore magnam. SWIP 3HZ
                          </li>
                          <li>
                            <i className='flaticon-call'></i>+22 33 4455 6677
                          </li>
                          <li>
                            <i className='flaticon-email'></i>
                            <a href='#' title=''>
                              ilamic@dummy.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bottom-bar'>
              <p>&copy; Copyright 2020. All Rights Reserved.</p>
              <div className='scl'>
                <a href='#' title='Twitter' target='_blank'>
                  <i className='fa fa-twitter'></i>
                </a>
                <a href='#' title='Pinterest' target='_blank'>
                  <i className='fa fa-pinterest-p'></i>
                </a>
                <a href='#' title='Google Plus' target='_blank'>
                  <i className='fa fa-google-plus'></i>
                </a>
                <a href='#' title='Facebook' target='_blank'>
                  <i className='fa fa-facebook'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

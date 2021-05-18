import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const OurScholars = () => {
  return (
    <section id="SCHOLARS">
      <div className='gap top-spac200 bottom-spac270 thm-layer opc95'>
        <img
          className='top-shp shp-img'
          src='assets/images/shp2-4.png'
          alt='shp2-4.png'
        />
        <img
          className='botm-shp shp-img'
          src='assets/images/shp2-5.png'
          alt='shp2-5.png'
        />
        <div
          className='fixed-bg ptrn-bg'
          style={{ backgroundImage: "url(assets/images/pattern-bg.jpg)" }}
        />
        <div className='container'>
          <div className='sec-title2 text-center'>
            <div className='sec-title-inner2'>
              <span>Our Expert</span>
              <h3>Islamic Scholars</h3>
            </div>
          </div>
          <div className='team-wrap text-center remove-ext3'>
            <div className='row'>
              <Swiper slidesPerView={'auto'} pagination={{ clickable: true }} style={{ padding: '0 10px 30px 10px' }} autoplay={true}>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/1.png'
                      alt='team-img2-1.jpg'
                    />
                    <div className='team-info2'>
                      <h4>AL Zahra</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/2.png'
                      alt='team-img2-2.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Umair</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/3.png'
                      alt='team-img2-3.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Fatima</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/4.png'
                      alt='team-img2-4.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Ammara</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/5.png'
                      alt='team-img2-4.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Ammara</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/6.png'
                      alt='team-img2-4.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Ammara</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/7.png'
                      alt='team-img2-4.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Ammara</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/8.png'
                      alt='team-img2-4.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Ammara</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/9.png'
                      alt='team-img2-4.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Ammara</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='col-md-3 col-sm-6 col-lg-3'>
                  <div className='team-box2'>
                    <img
                      src='assets/images/resources/10.png'
                      alt='team-img2-4.jpg'
                    />
                    <div className='team-info2'>
                      <h4>Ammara</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor
                    </p>
                      <div className='team-scl'>
                        <a href='#' title='Twitter' target='_blank'>
                          <i className='fa fa-twitter' />
                        </a>
                        <a href='#' title='Pinterest' target='_blank'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                        <a href='#' title='Google Plus' target='_blank'>
                          <i className='fa fa-google-plus' />
                        </a>
                        <a href='#' title='Facebook' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurScholars;

import React from "react";

const WhatWeDo = () => {
  return (
    <section id="SERVICES">
      <div className='gap'>
        <div
          className='fixed-bg'
          style={{ backgroundImage: "url(assets/images/parallax2.jpg)" }}
        />
        <div className='container'>
          <div className='sec-title text-center'>
            <div className='sec-title-inner'>
              {/* <span>Serving Humanity</span> */}
              <h3>Our Courses</h3>
            </div>
          </div>
          <div className='serv-wrap'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-sm-12'>
                <div className='remove-ext9'>
                  <div className='row'>
                    <div className='col-md-6 col-sm-6 col-lg-6'>
                      <div className='serv-box'>
                        <i className='flaticon-quran-rehal' />
                        <div className='serv-info'>
                          <h4>Qur’an Memorisation Program</h4>
                          <p>
                            Memorise 1 page a day and Complete Hifdh in 2 years
                            <br />
                            Memorise 2 page a day and Complete Hifdh in 1 years
<br />
Memorise Have a peach
                            a day and complete hifdh
                            in 4 years
                          </p>

                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-lg-6'>
                      <div className='serv-box'>
                        <i className='flaticon-heart-1' />
                        <div className='serv-info'>
                          <h4>Tajweed</h4>
                          <p>
                            Tajweed Level 1/Level 2: Rulings of Selected Chapters from Tuhfatul Adfaal<br />
                            Tajweed Level 3: Rulings of Selected Chapters from Al Jazariyyah
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-lg-6'>
                      <div className='serv-box'>
                        <i className='flaticon-mosque' />
                        <div className='serv-info'>
                          <h4>Fiqh</h4>
                          <p>
                            Shafi’e Fiqh
                            <br />
                            Level 1: Safinah An Najah
                            <br />
                            Level 2: Safinah As Salah
                            <br />
                            Level 3: Matn Abi Shujaa’
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-lg-6'>
                      <div className='serv-box'>
                        <i className='flaticon-social-care' />
                        <div className='serv-info'>
                          <h4>Aqeedah</h4>
                          <p>
                            Level 1: Take Your Aqeedah
                            <br />
                            Level 2: Virtue of Islam
                            <br />
                            Level 3: The Guidance to the Correct Creed
                            <br />
                            Level 4: Aqeedah At Tahawiyah
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-lg-6'>
                      <div className='serv-box'>
                        <i className='flaticon-quran-rehal' />
                        <div className='serv-info'>
                          <h4>Seerah</h4>
                          <p>
                            A Summarised Text on the Biographies of the Prophet ﷺ and His Companions
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-lg-6'>
                      <div className='serv-box'>
                        <i className='flaticon-mosque' />
                        <div className='serv-info'>
                          <h4>Hadeeth</h4>
                          <p>
                            Level 1: 40 Hadith
                            <br/>
                            Level 2: Umdah Al Ahkaam
                            <br/>
                            Level 3: Buluugh Al Maraam
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

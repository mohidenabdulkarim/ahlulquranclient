import React from "react";

const OurHistory = () => {
  return (
    <section id="ABOUTUS">
      <div className='gap'>
        <div className='container'>
          {/* <WhatsAppWidget phoneNumber='252636125251' /> */}
          <div className='hstry-wrap'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-lg-6'>
                <div className='hstry-img text-center'>
                  <img
                    src='assets/images/resources/about.jpg'
                    alt='hstry-img.png'
                  />
                </div>
              </div>
              <div className='col-md-6 col-sm-12 col-lg-6' style={{marginTop:'-1.5rem'}}>
                <div className='hstry-desc'>
                  {/* <span>A Few Words About Us</span> */}
                  <h2>About us</h2>
                  <p>
                    The Ahlul Qur’an Academy is an online academy that has been established for the learning of the Qur’an aswell as Islamic Studies!
                    Students will be able to embark upon the different sciences of the Quran like its Tajweed, Qiraat and Tafsir. <br /><br />
                    They can also learn about different  Tarbiyah subjects that will bring them closer to Allah. <br /><br />
                    The Qur’ān instructors are highly qualified and from different parts of the world and the majority of them are students who have obtained certification from Sheikh Abdulrashid Sheikh Ali Sufi. <br /><br />
                    Aswell as English speaking teachers who are renowned in Tarbiyah and mentorship. <br /><br />
                    The objective of this academy is to build a generation of students who attach themselves to Allah and His Messenger through the subjects they are studying.
                    Registration had started so get in touch via the information on your screen!
                  </p>
                  {/* <strong>
                    The jamia is the <span>#1</span> Islamic Center in the{" "}
                    <span>Country!</span>
                  </strong>
                  <ul>
                    <li>Astonisihing Facilities</li>
                    <li>Helping All Communities</li>
                    <li>Leads Charity Events</li>
                    <li>Schooling Children</li>
                    <li>Feeding Hungry People</li>
                    <li>Providing Accomodations</li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;

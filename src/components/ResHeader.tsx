import React from "react";

const ResHeader = () => {
  return (
    <>
      <div className='rspn-hdr'>
        <div className='rspn-mdbr'>
          <ul className='rspn-scil'>
            <li>
              <a href='#' target='_blank'>
                <i className='fa fa-twitter' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                <i className='fa fa-facebook' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                <i className='fa fa-linkedin' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                <i className='fa fa-google-plus' />
              </a>
            </li>
          </ul>
          <form className='rspn-srch'>
            <input type='text' placeholder='Enter Your Keyword' />
            <button type='submit'>
              <i className='fa fa-search' />
            </button>
          </form>
        </div>
        <div className='lg-mn'>
          <div className='logo'>
            <a href='index.html'>
              <img src='assets/images/logo2.png' alt='logo2.png' />
            </a>
          </div>
          <div className='rspn-cnt'>
            <span>
              <i className='fa fa-envelope thm-clr' />
              <a href='#'>info@jamia.com</a>
            </span>
            <span>
              <i className='fa fa-phone thm-clr' />
              +(00) 123-345-11
            </span>
          </div>
          <span className='rspn-mnu-btn'>
            <i className='fa fa-list-ul' />
          </span>
        </div>
        <div className='rsnp-mnu'>
          <span className='rspn-mnu-cls'>
            <i className='fa fa-times' />
          </span>
          <ul>
            <li className='menu-item-has-children'>
              <a href='#'>Home</a>
              <ul>
                <li>
                  <a href='index.html'>Homepage 1</a>
                </li>
                <li>
                  <a href='index2.html'>Homepage 2</a>
                </li>
                <li>
                  <a href='index-simple.html'>Simple Homepage 1</a>
                </li>
                <li>
                  <a href='index-simple2.html'>Simple Homepage 2</a>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>Header Styles</a>
                  <ul>
                    <li>
                      <a href='index.html'>Header Style 1</a>
                    </li>
                    <li>
                      <a href='index2.html'>Header Style 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='menu-item-has-children'>
              <a href='#'>Blog</a>
              <ul>
                <li>
                  <a href='blog.html'>Blog</a>
                </li>
                <li>
                  <a href='blog-detail.html'>Blog Detail</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='event.html'>Event</a>
            </li>
            <li>
              <a href='crowd-funding.html'>Donate</a>
            </li>
            <li className='menu-item-has-children'>
              <a href='#'>Pages</a>
              <ul>
                <li>
                  <a href='team.html'>Team</a>
                </li>
                <li>
                  <a href='team2.html'>Scholars</a>
                </li>
                <li>
                  <a href='portfolio.html'>Portfolio</a>
                </li>
                <li>
                  <a href='services.html'>Services</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='about.html'>About</a>
            </li>
            <li>
              <a href='contact.html'>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='header-search'>
        <span className='srch-cls-btn brd-rd5'>
          <i className='fa fa-times' />
        </span>
        <form>
          <input type='text' placeholder='Search here...' />
          <button type='submit'>
            <i className='fa fa-search' />
          </button>
        </form>
      </div>
    </>
  );
};

export default ResHeader;

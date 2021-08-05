import react, { useState, useEffect } from 'react'
import ContactFormModel from "../ContactFormModel";
import Contactus from "../Contactus";
import Footer from "../Footer";
import Header from "../Header";
import HeaderSearch from "../HeaderSearch";
import OurHistory from "../OurHistory";
import OurScholars from "../OurScholars";
import ResHeader from "../ResHeader";
import WhatWeDo from "../WhatWeDo";
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const style = `
  position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9999;
    transform: translate(-50%, -50%);
  `;


  useEffect(() => {
    setLoading(false);

    window.onload = () => {
      setLoading(true);
    }
  }, [])

  if (loading) {
    return (
      <div className="min-vh-100 min-vw-100 d-flex align-items-center justify-content-center">

        <HashLoader color={"212529"} loading={loading} size={80} css={style} />
      </div>
    )
  } else {

    return (
      <>
        <Header />
        <ResHeader />
        <HeaderSearch />
        <ContactFormModel />
        <OurHistory />
        <OurScholars />
        <WhatWeDo />
        <Contactus />
        <Footer />
        <WhatsAppWidget phoneNumber='442039834610' />
      </>
    );
  }

};

export default Home;

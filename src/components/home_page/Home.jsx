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
import MoonLoader from "react-spinners/MoonLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    window.onload = () => {
      setLoading(false);
    }
  }, [])

  if (loading) {
    return (
      <div className="min-vh-100 min-vw-100 d-flex align-items-center justify-content-center">

        <MoonLoader color={"#212529"} loading={loading} size={80} />
      </div>
    )
  } else {

    return (
      <>
        {/* <Header /> */}
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

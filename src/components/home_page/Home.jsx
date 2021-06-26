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

const Home = () => {
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
};

export default Home;

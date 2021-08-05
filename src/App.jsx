import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/admin/Dashboard";
import Home from "./components/home_page/Home";
import Login from "./components/Login";
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import SuccessPage from "./components/success_page/SuccessPage";
const App = () => {
  return (

    <>
      {/* <WhatsAppWidget phoneNumber='+442039834610' /> */}
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/success' element={<SuccessPage />} />
        <Route path='' element={<Home />} />

      </Routes>
    </>
  )
};

export default App;
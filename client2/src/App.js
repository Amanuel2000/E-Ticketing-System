import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Fixtures from "./pages/fixtures/Fixtures"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Footer from "./components/Footer"
import NotFound from "./pages/notFound/NotFound"
import GenerateQRC from "./pages/generateQRC/GenerateQRC"
import Ticket from "./pages/ticket/Ticket"
import Payment from "./pages/payment/Payment"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="fixtures" element={<Fixtures />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="/fixtures/ticket" element={<Ticket />} />
        <Route path="/fixtures/ticket/payment" element={<Payment />} />
        <Route path="/fixtures/ticket/payment/generate" element={<GenerateQRC />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
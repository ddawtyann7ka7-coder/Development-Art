import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './sections/Home/Home'
import Syllabus from './sections/Syllabus/Syllabus'
import RegisterForm from './sections/RegisterForm/RegisterForm'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import WhyUs from './sections/WhyUs/WhyUs'
import Process from './sections/Process/Process'
import FAQ from './sections/FAQ/FAQ'

export default function App() {
  const scrollToForm = () => {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navbar scrollToForm={scrollToForm} />
      <Home scrollToForm={scrollToForm} />
      <Syllabus />
      <WhyUs />
      <Process />
      <FAQ />
      <RegisterForm />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
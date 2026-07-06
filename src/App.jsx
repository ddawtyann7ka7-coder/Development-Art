import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './sections/Home/Home'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const Syllabus = lazy(() => import('./sections/Syllabus/Syllabus'))
const WhyUs = lazy(() => import('./sections/WhyUs/WhyUs'))
const Process = lazy(() => import('./sections/Process/Process'))
const FAQ = lazy(() => import('./sections/FAQ/FAQ'))
const RegisterForm = lazy(() => import('./sections/RegisterForm/RegisterForm'))

export default function App() {
  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navbar scrollToForm={scrollToForm} />
      <Home scrollToForm={scrollToForm} />
      <Suspense fallback={null}>
        <Syllabus />
        <WhyUs />
        <Process />
        <FAQ />
        <RegisterForm />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
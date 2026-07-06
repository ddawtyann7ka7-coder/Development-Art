import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navbarData, ctaData, navbarIcons } from '@/datas/datas'
import Logo from './components/Logo/Logo'
import NavLinks from './components/NavLinks/NavLinks'
import SideNav from './components/SideNav/SideNav'
import MobileMenu from './components/MobileMenu/MobileMenu'

const getIcon = (index) => navbarIcons[index] || navbarIcons[0]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        setIsOpen(false)
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
        }
    }

    return (
        <>
            <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 ${isScrolled ? 'bg-slate-950/70 backdrop-blur-md border-b border-slate-900/80 shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Logo />
                    <NavLinks data={navbarData} onScroll={scrollToSection} />

                    <div className="flex items-center gap-4">
                        <motion.button onClick={() => scrollToSection(ctaData.id)} whileHover={{ scale: 1.02 }} className="hidden md:block px-5 py-2 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full text-white transition-all duration-200 cursor-pointer">
                            {ctaData.name}
                        </motion.button>
                        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1.5 z-50 relative">
                            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <SideNav data={navbarData} onScroll={scrollToSection} getIcon={getIcon} />
            <MobileMenu isOpen={isOpen} data={navbarData} onScroll={scrollToSection} ctaData={ctaData} />
        </>
    )
}
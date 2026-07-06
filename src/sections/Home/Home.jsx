import React from 'react'
import { motion } from 'framer-motion'

export default function Home({ scrollToForm }) {
    return (
        <section id='home' className="relative  max-w-7xl mx-auto px-6 pt-55 pb-20 flex flex-col items-center text-center">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 max-w-3xl"
            >
                <span className="px-3 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                    Դասընթաց 0-ից մինչև Job-Ready
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
                    Դարձիր պահանջված{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                        Front-End
                    </span>{' '}
                    Ծրագրավորող
                </h1>
                <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Սովորիր արդիական տեխնոլոգիաները, ստեղծիր ռեալ նախագծեր, տիրապետիր AI գործիքներին և մուտք գործիր տեղեկատվական տեխնոլոգիաների աշխարհ։
                </p>

                <motion.div className="pt-4" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <button
                        onClick={scrollToForm}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer"
                    >
                        Սկսել Ուսումը
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}
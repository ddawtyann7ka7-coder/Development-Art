import React from 'react'
import { motion } from 'framer-motion'
import { whyUsData } from '@/datas/datas'
import { containerVariants } from './components/WhyUsAnimations/WhyUsAnimations'
import WhyUsCard from './components/WhyUsCard/WhyUsCard'

export default function WhyUs() {
    return (
        <section id='whyUs' className="py-24 bg-slate-950 text-white px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Ինչու՞ ընտրել <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Development Art</span>-ը
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
                >
                    {whyUsData.map((item, index) => (
                        <WhyUsCard key={index} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
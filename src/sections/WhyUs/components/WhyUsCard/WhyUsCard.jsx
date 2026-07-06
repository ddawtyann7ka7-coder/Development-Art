import React from 'react'
import { motion } from 'framer-motion'
import { cardVariants } from '../WhyUsAnimations/WhyUsAnimations'

export default function WhyUsCard({ item }) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-colors backdrop-blur-sm"
        >
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
        </motion.div>
    )
}
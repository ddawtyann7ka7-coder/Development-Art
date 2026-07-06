import React from 'react'
import { motion } from 'framer-motion'
import { rowVariants } from '../ProcessAnimations/ProcessAnimations'

export default function ProcessRow({ step, index }) {
    return (
        <motion.div
            custom={index}
            variants={rowVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                borderColor: "rgba(99, 102, 241, 0.3)",
            }}
            className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-slate-900/20 border border-slate-900 border-l-2 border-l-transparent hover:border-l-indigo-500 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
        >
            <span className="text-4xl font-black bg-gradient-to-br from-cyan-400 to-indigo-500 bg-clip-text text-transparent leading-none pt-1 group-hover:scale-110 transition-transform duration-300 shrink-0">
                {step.num}
            </span>
            <div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
        </motion.div>
    )
}
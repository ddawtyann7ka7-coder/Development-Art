import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { answerVariants, iconVariants } from '../FAQAnimations/FAQAnimations'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({ faq, isOpen, onToggle }) {
    return (
        <div className="border-b border-slate-900 pb-4">
            <button
                className="w-full flex justify-between items-center text-left py-4 font-medium text-lg hover:text-cyan-400 transition-colors cursor-pointer"
                onClick={onToggle}
            >
                <span className="pr-4 text-base md:text-lg">{faq.q}</span>
                <motion.span
                    variants={iconVariants}
                    animate={isOpen ? "open" : "closed"}
                    className="text-sm text-slate-500 shrink-0"
                >
                    <ChevronDown size={20} />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={answerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="overflow-hidden"
                    >
                        <p className="text-slate-400 pl-2 pb-2 text-sm leading-relaxed">
                            {faq.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu({ isOpen, data, onScroll, ctaData }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 0.4, ease: 'easeInOut' }} className="fixed top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6 px-6">
                    <div className="flex flex-col items-center gap-6 w-full max-w-sm mt-12">
                        {data.map((link, index) => (
                            <button key={index} onClick={() => onScroll(link.id)} className="w-full text-center py-4 text-lg font-semibold text-slate-300 hover:text-white border-b border-slate-900 transition-colors cursor-pointer">
                                {link.name}
                            </button>
                        ))}
                        <motion.button onClick={() => onScroll(ctaData.id)} whileTap={{ scale: 0.95 }} className="w-full mt-4 px-6 py-3 text-center text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full text-white cursor-pointer shadow-lg">
                            {ctaData.name}
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
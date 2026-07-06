import { motion } from 'framer-motion'

export default function RegisterStatus({ status }) {
    if (!status.msg) return null;
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl text-center text-sm font-medium ${status.type === 'success'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}
        >
            {status.msg}
        </motion.div>
    )
}
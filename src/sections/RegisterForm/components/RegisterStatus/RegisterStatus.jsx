
export default function RegisterStatus({ status }) {
    if (!status.msg) return null;
    return (
        <div className={`p-4 rounded-xl text-center text-sm font-medium animate-fade-in-up ${status.type === 'success'
            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
            }`}>
            {status.msg}
        </div>
    )
}
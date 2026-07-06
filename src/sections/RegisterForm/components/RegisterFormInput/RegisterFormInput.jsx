export default function RegisterFormInput({ label, type, name, value, onChange, placeholder, required = false, isTextarea = false }) {
    const className = "w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm";
    return (
        <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{label}</label>
            {isTextarea ? (
                <textarea name={name} rows="4" value={value} onChange={onChange} placeholder={placeholder} className={`${className} resize-none`} />
            ) : (
                <input type={type} name={name} required={required} value={value} onChange={onChange} placeholder={placeholder} className={className} />
            )}
        </div>
    )
}
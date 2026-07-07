import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2, Send } from 'lucide-react'
import RegisterFormInput from './components/RegisterFormInput/RegisterFormInput'
import RegisterStatus from './components/RegisterStatus/RegisterStatus'

export default function RegisterForm() {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', msg: '' })
    const formRef = useRef()
    const containerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                }
            })
        }, { threshold: 0.2 })

        if (containerRef.current) observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === 'name') {
            const lettersOnly = value.replace(/[^a-zA-Zа-яА-Яե-ֆԵ-Ֆև\s]/g, '')
            setFormState({ ...formState, [name]: lettersOnly })
            return
        }

        if (name === 'phone') {
            const numbersOnly = value.replace(/[^0-9+\s()-]/g, '')
            setFormState({ ...formState, [name]: numbersOnly })
            return
        }

        setFormState({ ...formState, [name]: value })
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', msg: '' })

        if (!formState.name.trim() || formState.name.trim().length < 2) {
            setLoading(false)
            setStatus({ type: 'error', msg: 'Խնդրում ենք լրացնել վավեր Անուն Ազգանուն։' })
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formState.email.trim())) {
            setLoading(false)
            setStatus({ type: 'error', msg: 'Խնդրում ենք ներմուծել ճիշտ էլ. հասցե (օրինակ՝ name@mail.com)։' })
            return
        }

        if (formState.phone.trim().length < 6) {
            setLoading(false)
            setStatus({ type: 'error', msg: 'Խնդրում ենք ներմուծել վավեր հեռախոսահամար։' })
            return
        }

        const SERVICE_ID = 'service_hmxjjow'
        const TEMPLATE_ID = 'template_vq7scj8'
        const PUBLIC_KEY = 'LkovqUTmeNmSK-f9t'

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setLoading(false)
                setStatus({ type: 'success', msg: 'Շնորհակալություն: Ձեր հայտը հաջողությամբ ուղարկվեց։' })
                setFormState({ name: '', email: '', phone: '', message: '' })
            })
            .catch((error) => {
                setLoading(false)
                setStatus({ type: 'error', msg: 'Տեղի ունեցավ սխալ։ Խնդրում ենք փորձել կրկին։' })
                console.error('EmailJS Error:', error)
            })
    }

    return (
        <section id="register" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900 relative">
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
            <div
                ref={containerRef}
                className="max-w-xl mx-auto animate-register-pop">
                <div className="text-center mb-10 space-y-2">
                    <h2 className="text-3xl font-bold">Ամրագրել Տեղը</h2>
                    <p className="text-slate-400 text-sm">Լրացրեք հայտը, և մենք կկապնվենք Ձեզ հետ մանրամասների համար։</p>
                </div>

                <div
                    className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-md shadow-2xl ">
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                        <RegisterFormInput label="Անուն Ազգանուն" type="text" name="name" value={formState.name} onChange={handleChange} placeholder="Պողոս Պողոսյան" required />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <RegisterFormInput label="Էլ. Հասցե" type="email" name="email" value={formState.email} onChange={handleChange} placeholder="example@mail.com" required />
                            <RegisterFormInput label="Հեռախոսահամար" type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="+374 (XX) XX-XX-XX" required />
                        </div>

                        <RegisterFormInput label="Հաղորդագրություն (Կամընտիր)" name="message" value={formState.message} onChange={handleChange} placeholder="Նշեք Ձեր նպատակները..." isTextarea />

                        <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:brightness-110 disabled:opacity-50 transition-all cursor-pointer">
                            {loading ? <Loader2 className="animate-spin" size={18} /> : <><span>Ուղարկել Հայտը</span> <Send size={16} /></>}
                        </button>

                        <RegisterStatus status={status} />
                    </form>
                </div>
            </div>
        </section>
    )
}
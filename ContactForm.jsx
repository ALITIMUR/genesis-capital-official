import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Form submitted')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 border" placeholder={t('name')} required />
      <input name="email" value={form.email} onChange={handleChange} className="w-full p-2 border" type="email" placeholder={t('email')} required />
      <textarea name="message" value={form.message} onChange={handleChange} className="w-full p-2 border" placeholder={t('message')} required />
      <button className="px-4 py-2 bg-blue-600 text-white" type="submit">{t('send')}</button>
    </form>
  )
}

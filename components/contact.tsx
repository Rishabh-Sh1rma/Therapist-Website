"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, Send } from "lucide-react"

interface FormData {
  fullName: string
  phoneNumber: string
  email: string
  message: string
  preferredTime: string
  agreeToContact: boolean
}

interface FormErrors {
  fullName?: string
  phoneNumber?: string
  email?: string
  message?: string
  preferredTime?: string
  agreeToContact?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please share your name so I know how to address you"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "A phone number helps me reach you more easily"
    } else if (!/^\d{3}[-. ]?\d{3}[-. ]?\d{4}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number (e.g., 555-123-4567)"
    }

    if (!formData.email.trim()) {
      newErrors.email = "I'll need your email to send you appointment details"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Sharing what brings you here helps me prepare for our conversation"
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Knowing your preferred times helps me schedule our call"
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "Please confirm you'd like me to reach out to you"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-teal-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif text-slate-800 mb-4">Thank You for Reaching Out</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I've received your message and I'm honored that you're considering therapy. I'll be in touch within one
              business day to schedule your free consultation.
            </p>
            <p className="text-slate-500 mb-8">
              In the meantime, know that taking this step shows incredible courage and self-compassion.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  fullName: "",
                  phoneNumber: "",
                  email: "",
                  message: "",
                  preferredTime: "",
                  agreeToContact: false,
                })
              }}
              className="text-teal-600 hover:text-teal-700 font-medium underline underline-offset-2 hover:underline-offset-4 transition-all duration-200"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-teal-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100 to-transparent rounded-full translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-100 to-transparent rounded-full -translate-x-32 translate-y-32"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-800 mb-6">
            Ready to Begin Your{" "}
            <span className="text-teal-600 relative">
              Journey?
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-teal-200"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            I'm here to listen and support you. Fill out the form below, and I'll reach out within one business day to
            schedule your free consultation.
          </p>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-xl p-8 lg:p-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 ${
                    errors.fullName
                      ? "border-red-400 bg-red-50"
                      : "border-slate-200 hover:border-slate-300 focus:border-teal-500"
                  }`}
                  placeholder="Your full name"
                />
                {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-700 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 ${
                    errors.phoneNumber
                      ? "border-red-400 bg-red-50"
                      : "border-slate-200 hover:border-slate-300 focus:border-teal-500"
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phoneNumber && <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 ${
                  errors.email
                    ? "border-red-400 bg-red-50"
                    : "border-slate-200 hover:border-slate-300 focus:border-teal-500"
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3">
                What brings you here? *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none ${
                  errors.message
                    ? "border-red-400 bg-red-50"
                    : "border-slate-200 hover:border-slate-300 focus:border-teal-500"
                }`}
                placeholder="Share what's on your mind or what you'd like to work on. There's no pressure to share everything right now—just whatever feels comfortable."
              />
              {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-3">
                Preferred time to reach you *
              </label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 ${
                  errors.preferredTime
                    ? "border-red-400 bg-red-50"
                    : "border-slate-200 hover:border-slate-300 focus:border-teal-500"
                }`}
                placeholder="e.g., Weekday mornings, evenings after 6pm, weekends"
              />
              {errors.preferredTime && <p className="mt-2 text-sm text-red-600">{errors.preferredTime}</p>}
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeToContact"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleInputChange}
                className="mt-1 h-5 w-5 text-teal-600 focus:ring-teal-500 border-slate-300 rounded transition-colors duration-200"
              />
              <label htmlFor="agreeToContact" className="text-sm text-slate-700 leading-relaxed">
                I agree to be contacted by Dr. Serena Blake regarding my inquiry and understand that this form is secure
                and confidential *
              </label>
            </div>
            {errors.agreeToContact && <p className="text-sm text-red-600 ml-8">{errors.agreeToContact}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 text-white py-4 px-8 rounded-xl hover:bg-teal-700 focus:ring-4 focus:ring-teal-500/50 transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending your message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-600">
              <span className="font-medium">Your privacy matters:</span> This form is secure and HIPAA-compliant. Your
              information will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "I'm currently an out-of-network provider, which means I don't directly bill insurance companies. However, I provide detailed superbills (receipts) that you can submit to your insurance for potential reimbursement. Many of my clients receive partial reimbursement for out-of-network mental health services. I recommend checking with your insurance provider about your out-of-network benefits—I'm happy to help you understand what questions to ask them.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "I offer secure telehealth sessions through a HIPAA-compliant platform for clients located in California. Online therapy can be just as effective as in-person sessions and offers greater flexibility for busy schedules. You'll need a private space, reliable internet, and a device with camera and microphone. I also continue to offer in-person sessions at my comfortable Los Angeles office for those who prefer face-to-face meetings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I understand that life happens, and I try to be as flexible as possible. I require 24 hours advance notice for cancellations or rescheduling. Sessions cancelled with less than 24 hours notice will be charged the full fee, unless it's due to an emergency or sudden illness. This policy helps me maintain consistent availability for all my clients and ensures appointment times can be offered to others when needed. No-shows are also charged the full session fee.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-800 mb-6">
            Questions You Might{" "}
            <span className="text-teal-600 relative">
              Have
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-teal-200"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            I believe in transparency and want you to feel informed about the therapy process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left bg-white hover:bg-slate-50 transition-colors duration-200 flex justify-between items-center group"
              >
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-teal-600 transition-colors duration-200">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-teal-600 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500 group-hover:text-teal-600 transition-colors duration-200" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 bg-slate-50">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-slate-600">
            Have other questions? I'm here to help.{" "}
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-teal-600 hover:text-teal-700 font-medium underline underline-offset-2 hover:underline-offset-4 transition-all duration-200"
            >
              Get in touch
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

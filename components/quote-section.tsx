"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

export default function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-100/50 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-sage-100/50 to-transparent rounded-full translate-x-40 translate-y-40"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-teal-600" />
            </div>
          </div>

          {/* Main Quote */}
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-800 leading-relaxed mb-8 max-w-4xl mx-auto">
            "The curious paradox is that when I accept myself just as I am,{" "}
            <span className="text-teal-600 relative">
              then I can change
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-teal-200"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
            ."
          </blockquote>

          {/* Attribution */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg text-slate-600 font-medium mb-2">— Carl Rogers</p>
            <p className="text-slate-500">Humanistic Psychologist</p>
          </div>

          {/* Supporting Text */}
          <div
            className={`mt-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100 max-w-3xl mx-auto">
              <p className="text-lg text-slate-700 leading-relaxed">
                This profound truth lies at the heart of therapeutic healing. In our work together, you'll discover that
                self-compassion and acceptance aren't obstacles to growth—they're the very foundation that makes
                meaningful change possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

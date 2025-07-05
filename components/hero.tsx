"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="bg-gradient-to-b from-black/40 to-black/10 absolute inset-0 z-5"></div>

      {/* Floating elements */}
      <div className="absolute top-16 left-4 w-24 h-24 sm:w-32 sm:h-32 bg-teal-200/20 rounded-full blur-xl animate-pulse z-5" />
      <div className="absolute bottom-16 right-4 w-28 h-28 sm:w-40 sm:h-40 bg-rose-200/20 rounded-full blur-xl animate-pulse delay-1000 z-5" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          Compassionate Therapy to{" "}
          <span className="text-teal-300 relative inline-block">
            Help You Thrive
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 text-teal-200/50"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-base sm:text-xl text-white/90 mb-2 font-light drop-shadow-md">
            Dr. Serena Blake, Clinical Psychologist (PsyD)
          </p>
          <p className="text-sm sm:text-lg text-white/80 mb-8 leading-relaxed drop-shadow-md">
            Based in Los Angeles, CA • In-person & online sessions available
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-teal-600 text-white text-base sm:text-lg font-medium rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Free Consultation
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

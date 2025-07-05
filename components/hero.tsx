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
        <source
          src="https://player.cloudinary.com/embed/?cloud_name=dmxohihpi&public_id=qclw2u61rldddmz3a2cj&profile=cld-default"
          type="video/mp4"
        />
      </video>

      {/* Optional overlay gradient */}
      <div className="bg-gradient-to-b from-black/30 to-white/10 absolute inset-0 z-5"></div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/20 rounded-full blur-xl animate-pulse z-5"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-200/20 rounded-full blur-xl animate-pulse delay-1000 z-5"></div>

      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          Compassionate Therapy to{" "}
          <span className="text-teal-300 relative">
            Help You Thrive
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-teal-200/50"
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
          <p className="text-xl sm:text-2xl text-white/90 mb-4 font-light drop-shadow-md">
            Dr. Serena Blake, Clinical Psychologist (PsyD)
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
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
            className="group inline-flex items-center px-8 py-4 bg-teal-600 text-white text-lg font-medium rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
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

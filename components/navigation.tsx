"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Video Background for Navigation */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source
          src="https://player.vimeo.com/external/658395660.sd.mp4?s=0ce4c0a8bb0a31ff2d8d36d292ba159cf8db75d1&profile_id=165&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Overlay for readability */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${isScrolled ? "bg-white/95" : "bg-black/20"}`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h2
              className={`text-2xl font-serif transition-colors duration-300 ${
                isScrolled ? "text-slate-800" : "text-white drop-shadow-lg"
              }`}
            >
              Dr. Serena Blake
            </h2>
            <p
              className={`text-sm -mt-1 transition-colors duration-300 ${
                isScrolled ? "text-slate-600" : "text-white/80 drop-shadow-md"
              }`}
            >
              Clinical Psychologist
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Home", "About", "Services", "FAQ", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isScrolled
                      ? "text-slate-700 hover:text-teal-600"
                      : "text-white/90 hover:text-teal-300 drop-shadow-md"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                      isScrolled ? "bg-teal-600" : "bg-teal-300"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-200 ${
                isScrolled ? "text-slate-700 hover:text-teal-600" : "text-white/90 hover:text-teal-300 drop-shadow-md"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200 relative z-10">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {["Home", "About", "Services", "FAQ", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-slate-700 hover:text-teal-600 hover:bg-teal-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

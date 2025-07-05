"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function About() {
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

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-sage-100 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rose-100 to-transparent rounded-full translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-serif text-slate-800 mb-8 leading-tight">
              A Safe Space for <span className="text-teal-600">Healing & Growth</span>
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                I'm Dr. Serena Blake, a licensed clinical psychologist with over eight years of experience helping
                individuals and couples navigate life's challenges. With more than 500 client sessions, I've witnessed
                the incredible resilience of the human spirit and the transformative power of therapy.
              </p>

              <p>
                My approach combines evidence-based techniques like Cognitive Behavioral Therapy (CBT) and Eye Movement
                Desensitization and Reprocessing (EMDR) with genuine compassion and understanding. I believe that
                healing happens in relationship, and I'm honored to walk alongside you on your journey.
              </p>

              <p>
                I earned my Doctor of Psychology degree from Pepperdine University and completed my clinical internship
                at UCLA Medical Center. I offer both in-person sessions at my Los Angeles office and secure online
                sessions via Zoom, making therapy accessible and convenient for your lifestyle.
              </p>

              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-600">
                <p className="italic text-teal-800">
                  "My goal is to create a space where you feel truly seen, heard, and understood—a place where you can
                  explore your thoughts and feelings without judgment while developing the tools you need to thrive."
                </p>
              </div>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-200 to-rose-200 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <Image
                  src="/doc.jpg"
                  alt="Dr. Serena Blake, Licensed Clinical Psychologist"
                  width={500}
                  height={600}
                  className="rounded-xl object-cover"
                />
              </div>

              {/* Floating credential badges */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-semibold text-slate-800">Licensed PsyD</p>
                <p className="text-xs text-slate-600">California</p>
              </div>

              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-semibold text-slate-800">8+ Years</p>
                <p className="text-xs text-slate-600">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

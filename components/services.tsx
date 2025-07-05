"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Heart, Users, Shield } from "lucide-react"

// Color utility for icon backgrounds and hover text
const colorMap = {
  teal: {
    iconBg: "bg-teal-600",
    hoverText: "group-hover:text-teal-600",
  },
  rose: {
    iconBg: "bg-rose-600",
    hoverText: "group-hover:text-rose-600",
  },
  lime: {
    iconBg: "bg-lime-600",
    hoverText: "group-hover:text-lime-600",
  },
}

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Find peace amidst life's storms. Together, we'll explore evidence-based techniques like CBT and mindfulness to help you manage anxiety, panic attacks, and chronic stress. You'll learn to identify triggers, develop healthy thought patterns, and build resilience that lasts.",
    icon: Heart,
    image: "/stress.jpg",
    color: "teal",
  },
  {
    title: "Relationship Counseling",
    description:
      "Strengthen the connections that matter most. Whether you're navigating challenges with your partner, family, or friends, we'll work on improving communication, resolving conflicts, and deepening emotional intimacy. Healthy relationships are the foundation of a fulfilling life.",
    icon: Users,
    image: "/couple.jpg",
    color: "rose",
  },
  {
    title: "Trauma Recovery",
    description:
      "Reclaim your sense of safety and self-worth. Using specialized approaches like EMDR and trauma-informed therapy, we'll work at your pace to process difficult memories and emotions. Healing is possible, and you don't have to face this journey alone.",
    icon: Shield,
    image: "/trauma.jpg",
    color: "lime", // ✅ Using lime instead of sage to match Tailwind color classes
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-800 mb-6">
            How I Can{" "}
            <span className="text-teal-600 relative">
              Support You
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-teal-200"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Specialized therapy services tailored to your unique needs and goals
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const styles = colorMap[service.color as keyof typeof colorMap]

            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 ${styles.iconBg} rounded-full flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className={`text-2xl font-serif text-slate-800 mb-4 transition-colors duration-300 ${styles.hoverText}`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pricing Section */}
        <div
          className={`bg-white rounded-2xl shadow-xl p-8 lg:p-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif text-slate-800 mb-4">Investment in Your Well-being</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Quality therapy is an investment in yourself. I offer transparent pricing with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border border-teal-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-teal-800 mb-2">Individual Sessions</h4>
                <div className="text-4xl font-bold text-teal-600 mb-2">$200</div>
                <p className="text-teal-700">50 minutes</p>
                <p className="text-sm text-teal-600 mt-2">Perfect for personal growth and healing</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-8 rounded-xl border border-rose-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-rose-800 mb-2">Couples Sessions</h4>
                <div className="text-4xl font-bold text-rose-600 mb-2">$240</div>
                <p className="text-rose-700">60 minutes</p>
                <p className="text-sm text-rose-600 mt-2">Strengthen your relationship together</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600">
              <span className="font-medium">Good news:</span> I provide detailed superbills for insurance reimbursement
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { MapPin, Phone, Mail, Clock, Calendar, Video } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-600/10 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-rose-600/10 to-transparent rounded-full translate-x-40 translate-y-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Practice Information */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-white mb-2">Dr. Serena Blake, PsyD</h3>
              <p className="text-teal-300 font-medium">Clinical Psychologist</p>
              <p className="text-slate-400 mt-2">
                Licensed in California • Specializing in anxiety, relationships, and trauma recovery
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Office Location</p>
                  <p className="text-slate-300">1287 Maplewood Drive</p>
                  <p className="text-slate-300">Los Angeles, CA 90026</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a
                    href="tel:+13235550192"
                    className="text-slate-300 hover:text-teal-300 transition-colors duration-200"
                  >
                    (323) 555-0192
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href="mailto:serena@blakepsychology.com"
                    className="text-slate-300 hover:text-teal-300 transition-colors duration-200"
                  >
                    serena@blakepsychology.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-serif text-white mb-6 flex items-center">
              <Clock className="w-5 h-5 text-teal-400 mr-2" />
              Office Hours
            </h4>

            <div className="space-y-6">
              {/* In-Person Sessions */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 text-rose-400 mr-2" />
                  <h5 className="text-white font-semibold">In-Person Sessions</h5>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p>Tuesday: 10:00 AM – 6:00 PM</p>
                  <p>Thursday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Virtual Sessions */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-3">
                  <Video className="w-5 h-5 text-teal-400 mr-2" />
                  <h5 className="text-white font-semibold">Virtual Sessions (Zoom)</h5>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p>Monday: 1:00 PM – 5:00 PM</p>
                  <p>Wednesday: 1:00 PM – 5:00 PM</p>
                  <p>Friday: 1:00 PM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Additional Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-serif text-white mb-6">Quick Links</h4>

            <div className="space-y-3 mb-8">
              {["About", "Services", "FAQ", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase())
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="block text-slate-300 hover:text-teal-300 transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Important Notes */}
            <div className="bg-teal-900/30 rounded-xl p-6 border border-teal-800/50">
              <h5 className="text-teal-300 font-semibold mb-3">Important Notes</h5>
              <div className="space-y-2 text-sm text-slate-300">
                <p>• 24-hour cancellation policy</p>
                <p>• Superbills provided for insurance</p>
                <p>• HIPAA-compliant telehealth platform</p>
                <p>• Free 15-minute consultation available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">© 2025 Dr. Serena Blake, PsyD. All rights reserved.</p>
              <p className="text-slate-500 text-xs mt-1">
                Licensed Clinical Psychologist • California License #PSY12345
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="text-slate-400 hover:text-teal-300 transition-colors duration-200 text-sm"
              >
                Back to Top ↑
              </button>
              <div className="text-slate-500 text-xs">
                <p>Privacy Policy • Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

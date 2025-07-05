import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import QuoteSection from "@/components/quote-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <QuoteSection />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

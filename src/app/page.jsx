import { Footer } from '@/components/default/footer'
import { Header } from '@/components/default/header'
import { Hero } from '@/components/home-default/Hero'
import { Products } from '@/components/home-default/Pricing'
import { PrimaryFeatures } from '@/components/home-default/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/home-default/SecondaryFeatures'
import { Testimonials } from '@/components/home-default/Testimonials'
import { CallToAction } from '@/components/home-default/CallToAction'
import { Faqs } from '@/components/home-default/Faqs'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        {/* <Testimonials /> */}
        <Products />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
